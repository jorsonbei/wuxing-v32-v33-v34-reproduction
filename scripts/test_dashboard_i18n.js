// No dependencies: exercise both language renderers with a small DOM test double.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
for (const file of ['index.html', 'app.js', 'i18n.js', 'styles.css']) {
  assert.equal(fs.readFileSync(path.join(root, 'docs', file), 'utf8'), fs.readFileSync(path.join(root, 'dashboard', file), 'utf8'), `docs/dashboard parity: ${file}`);
}
function run(lang, stored, storageThrows = false) {
  const elements = new Map();
  const make = id => ({ id, textContent:'', innerHTML:'', value: id === '#inventory-layer' ? 'all' : '', dataset:{}, style:{}, attrs:{}, handlers:{}, classList:{add(){},remove(){},toggle(){}}, setAttribute(k,v){this.attrs[k]=v}, getAttribute(k){return this.attrs[k]}, addEventListener(k,v){this.handlers[k]=v} });
  const get = id => { if(!elements.has(id)) elements.set(id,make(id)); return elements.get(id); };
  const links = ['zh','en'].map(language => Object.assign(make('language-'+language), { dataset:{language} }));
  const html = fs.readFileSync(path.join(root,'docs/index.html'),'utf8');
  const staticElements = [...html.matchAll(/data-i18n="([^"]+)"/g)].map(match=>Object.assign(make(match[1]), {dataset:{i18n:match[1]}}));
  const minis = ['fast_check','ci_check','serve_dashboard'].map(copy=>Object.assign(make(copy),{dataset:{copy}}));
  let copied;
  const document = {documentElement:{},title:'',getElementById:id=>get("#"+id),querySelector:get,querySelectorAll:selector=>selector==='[data-language]'?links:selector==='[data-i18n]'?staticElements:selector==='.copy-mini'?minis:[]};
  const href = 'https://example.com/lab/'+(lang?'?lang='+lang:'')+'#inventory';
  const context = {window:{addEventListener(){}},document,location:{href,search:lang?'?lang='+lang:''},URL,URLSearchParams,setTimeout(){},localStorage:{getItem(){if(storageThrows)throw Error('blocked');return stored},setItem(){if(storageThrows)throw Error('blocked')}},navigator:{clipboard:{async writeText(text){copied=text}}}};
  vm.createContext(context);
  for(const file of ['reproduction_data.js','i18n.js','app.js']) vm.runInContext(fs.readFileSync(path.join(root,'docs',file),'utf8'),context);
  return {context,get,links,minis,staticElements,copied:()=>copied};
}
(async()=>{
  for(const language of ['zh','en']) {
    const test=run(language);
    const t=test.context.window.REPLAY_I18N.t;
    assert.equal(test.context.document.documentElement.lang,language==='zh'?'zh-CN':'en');
    assert.ok(test.get('#verdict-title').textContent.includes('PASS'));
    assert.equal((test.get('#inventory-body').innerHTML.match(/<tr>/g)||[]).length,9);
    assert.equal(test.get('#file-count').textContent,'4086'); // existing evidence snapshot, deliberately unchanged
    assert.ok(test.get('#layer-cards').innerHTML.includes(t('V34 Higgs minimal non-EWPO court forward closure.')));
    test.get('#inventory-search').value = language==='zh'?'失败':'failure';
    test.get('#inventory-search').handlers.input();
    assert.ok(test.get('#inventory-body').innerHTML.includes('P84_WZ_TailGuard'));
    test.get('#inventory-search').value='nonexistent-example';test.get('#inventory-search').handlers.input();
    assert.ok(test.get('#inventory-body').innerHTML.includes(t('No matching experiments')));
    test.get('#inventory-search').value='';test.get('#inventory-layer').value='L0_hard_source';test.get('#inventory-layer').handlers.change();
    assert.equal((test.get('#inventory-body').innerHTML.match(/<tr>/g)||[]).length,3);
    await test.get('#copy-command').handlers.click();
    assert.equal(test.copied(),test.context.window.REPRO_DATA.commands.one_command);
    for(const mini of test.minis){await mini.handlers.click();assert.equal(test.copied(),test.context.window.REPRO_DATA.commands[mini.dataset.copy]);}
    assert.equal(test.links.find(link=>link.dataset.language===language).attrs['aria-current'],'true');
    assert.ok(test.links.every(link=>link.href.endsWith('#inventory')));
    test.context.location.href = 'https://example.com/lab/?lang='+language+'&view=all#layers';
    for (const link of test.links) {
      link.handlers.click();
      const target = new URL(link.href, 'https://example.com');
      assert.equal(target.hash, '#layers');
      assert.equal(target.searchParams.get('lang'), link.dataset.language);
      assert.equal(target.searchParams.get('view'), 'all');
    }
  }
  assert.equal(run().context.window.REPLAY_I18N.language,'zh');
  assert.equal(run(null,'en').context.window.REPLAY_I18N.language,'en');
  assert.equal(run('zh','en').context.window.REPLAY_I18N.language,'zh');
  assert.equal(run('invalid','en').context.window.REPLAY_I18N.language,'en');
  assert.equal(run(null,null,true).context.window.REPLAY_I18N.language,'zh');
  console.log('PASS: bilingual render, filters, empty state, copy command invariance, preference fallback, deep links, docs/dashboard parity.');
})().catch(error=>{console.error(error);process.exitCode=1;});
