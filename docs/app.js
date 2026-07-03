const data = window.REPRO_DATA;

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const fmtBytes = (n) => {
  if (!Number.isFinite(Number(n))) return "n/a";
  const units = ["B", "KB", "MB", "GB"];
  let value = Number(n);
  let i = 0;
  while (value >= 1024 && i < units.length - 1) { value /= 1024; i += 1; }
  return `${value.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
};
const showToast = (text = "Copied") => {
  const toast = $("#toast");
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1500);
};
const displayId = (value) => String(value || "").replaceAll("_", "_\u200b");
const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied");
  } catch {
    showToast("Copy failed");
  }
};

function renderOverview() {
  const passed = data.verdict.verdict_passed;
  $("#verdict-title").textContent = passed ? "VERDICT PASS" : "VERDICT FAIL";
  $("#status-dot").style.background = passed ? "var(--green)" : "var(--red)";
  $("#verdict-copy").textContent = passed
    ? "第三方可从 release 包重建核心物理引擎并复现 V32/V33/V34 的内部闭合。历史实验层被分离为注册清单，不伪装成源码复现。"
    : "复现链存在失败，请先查看 Failure Localization 定位矩阵。";
  $("#release-sha").textContent = data.release.archive_sha256;
  $("#archive-size").textContent = fmtBytes(data.release.archive_size_bytes);
  $("#file-count").textContent = String(data.manifest.file_count);
  $("#one-command").textContent = data.commands.one_command;
  $("#guard-badges").innerHTML = data.boundaries.map((b) => `<span class="badge">${b}</span>`).join("");
}

function renderTimeline() {
  const phases = data.verdict.phases || [];
  $("#phase-timeline").innerHTML = phases.map((phase) => `
    <div class="phase">
      <div class="node"></div>
      <div>
        <strong>${phase.phase}</strong>
        <span>${phase.started_at} → ${phase.finished_at}</span>
      </div>
      <small>${phase.exit_code === 0 ? "PASS" : "FAIL"} · ${phase.duration_seconds ?? "?"}s</small>
    </div>
  `).join("");
}

function renderLayers() {
  const l0 = data.po11c.layers?.L0_hard_source_reproduction || [];
  const l1 = data.po11c.layers?.L1_registered_ledger_and_failure_boundaries || [];
  const cards = [
    ...l0.map((layer) => ({...layer, group: "L0 hard source"})),
    ...l1.map((layer) => ({...layer, group: layer.reproduction_layer || "registered"})),
  ];
  $("#layer-cards").innerHTML = cards.map((layer) => `
    <article class="layer-card">
      <span class="pass-pill">${layer.passed ? "PASS" : "CHECK"}</span>
      <h3>${displayId(layer.layer_id)}</h3>
      <p>${layer.scope || layer.boundary || ""}</p>
      <p><code>${layer.group}</code></p>
    </article>
  `).join("");
}

function renderInventory() {
  const rows = data.inventory || [];
  const select = $("#inventory-layer");
  const layers = [...new Set(rows.map((r) => r.reproduction_layer))].sort();
  select.innerHTML = `<option value="all">All layers</option>` + layers.map((l) => `<option value="${l}">${l}</option>`).join("");
  const render = () => {
    const q = $("#inventory-search").value.toLowerCase();
    const layer = select.value;
    const filtered = rows.filter((r) => {
      const hay = Object.values(r).join(" ").toLowerCase();
      return (layer === "all" || r.reproduction_layer === layer) && hay.includes(q);
    });
    $("#inventory-body").innerHTML = filtered.map((r) => `
      <tr>
        <td><strong>${r.experiment_id}</strong><br><span>${r.book}</span></td>
        <td><code>${r.reproduction_layer}</code></td>
        <td>${r.status}</td>
        <td>${r.closure_type}</td>
        <td><code>${r.source_exists === "True" ? "source present" : "missing"}</code></td>
      </tr>
    `).join("");
  };
  $("#inventory-search").addEventListener("input", render);
  select.addEventListener("change", render);
  render();
}

function renderFailures() {
  const matrix = data.failure_matrix;
  $("#failure-class").innerHTML = `<strong>${matrix.failure_class}</strong><br><span>${matrix.reason}</span>`;
  $("#failure-categories").innerHTML = Object.entries(matrix.categories || {}).map(([name, desc]) => `
    <div class="category"><strong>${name}</strong><span>${desc}</span></div>
  `).join("");
  $("#boundary-list").innerHTML = data.boundaries.map((b) => {
    const [key, value] = b.split("=");
    return `<div class="guard"><strong>${key}</strong><span>${value}</span></div>`;
  }).join("");
}

function renderManifest() {
  const groups = data.manifest.file_groups || {};
  const entries = Object.entries(groups).sort((a, b) => b[1] - a[1]).slice(0, 12);
  const max = Math.max(...entries.map(([, count]) => count), 1);
  $("#manifest-groups").innerHTML = entries.map(([name, count]) => `
    <div class="bar-row">
      <div class="bar-meta"><span>${name}</span><strong>${count}</strong></div>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.max(3, (count / max) * 100)}%"></div></div>
    </div>
  `).join("");
}

function bindInteractions() {
  $("#copy-command").addEventListener("click", () => copyText(data.commands.one_command));
  $$(".copy-mini").forEach((button) => {
    button.addEventListener("click", () => copyText(data.commands[button.dataset.copy]));
  });
  const sections = $$("main section[id]");
  const navLinks = $$("nav a");
  window.addEventListener("scroll", () => {
    let current = sections[0]?.id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top < 140) current = section.id;
    }
    navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
  });
}

renderOverview();
renderTimeline();
renderLayers();
renderInventory();
renderFailures();
renderManifest();
bindInteractions();
