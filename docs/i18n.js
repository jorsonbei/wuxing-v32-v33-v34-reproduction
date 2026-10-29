// UI translations only. Scientific source data and identifiers are not modified.
(function () {
  const messages = {
  "Wuxing": [
    "物性论",
    "Wuxing"
  ],
  "Reproduction Lab": [
    "复演室",
    "Reproduction Lab"
  ],
  "Wuxing Reproduction Lab": [
    "物性论 · 复演室",
    "Wuxing Reproduction Lab"
  ],
  "V32 / V33 / V34 hard-source reproduction package dashboard": [
    "V32 / V33 / V34 源码复演包可视化面板",
    "V32 / V33 / V34 hard-source reproduction package dashboard"
  ],
  "Overview": [
    "总览",
    "Overview"
  ],
  "Replay": [
    "复演过程",
    "Replay"
  ],
  "Layers": [
    "验证层级",
    "Layers"
  ],
  "Inventory": [
    "实验清单",
    "Inventory"
  ],
  "Failures": [
    "失败定位",
    "Failures"
  ],
  "Manifest": [
    "文件清单",
    "Manifest"
  ],
  "Runbook": [
    "操作指南",
    "Runbook"
  ],
  "Boundary": [
    "执行边界",
    "Boundary"
  ],
  "No Fit · No MCMC · No Target": [
    "不拟合 · 不运行 MCMC · 不读取外部靶标",
    "No Fit · No MCMC · No Target"
  ],
  "Copy Verify Command": [
    "复制验证命令",
    "Copy Verify Command"
  ],
  "Dashboard README": [
    "面板说明",
    "Dashboard README"
  ],
  "VERDICT": [
    "验证结论",
    "VERDICT"
  ],
  "Loading": [
    "加载中",
    "Loading"
  ],
  "Release SHA256": [
    "发布包 SHA256",
    "Release SHA256"
  ],
  "One-command replay": [
    "一条命令复演",
    "One-command replay"
  ],
  "third-party path": [
    "第三方复演流程",
    "third-party path"
  ],
  "Fast check": [
    "快速检查",
    "Fast check"
  ],
  "CI check": [
    "CI 检查",
    "CI check"
  ],
  "Serve UI": [
    "启动界面",
    "Serve UI"
  ],
  "Archive size": [
    "压缩包大小",
    "Archive size"
  ],
  "Manifest files": [
    "清单文件数",
    "Manifest files"
  ],
  "External Replay Timeline": [
    "外部复演时间线",
    "External Replay Timeline"
  ],
  "Layered Verifier": [
    "分层验证器",
    "Layered Verifier"
  ],
  "Historical Closure Inventory": [
    "历史闭合实验清单",
    "Historical Closure Inventory"
  ],
  "All layers": [
    "全部层级",
    "All layers"
  ],
  "Experiment": [
    "实验",
    "Experiment"
  ],
  "Layer": [
    "层级",
    "Layer"
  ],
  "Status": [
    "状态",
    "Status"
  ],
  "Closure": [
    "闭合类型",
    "Closure"
  ],
  "Source": [
    "来源",
    "Source"
  ],
  "Failure Localization": [
    "失败定位",
    "Failure Localization"
  ],
  "Boundary Guards": [
    "边界检查",
    "Boundary Guards"
  ],
  "Manifest Anatomy": [
    "发布包结构",
    "Manifest Anatomy"
  ],
  "Copied": [
    "已复制",
    "Copied"
  ],
  "Copy failed": [
    "复制失败，请手动选择命令复制",
    "Copy failed"
  ],
  "No matching experiments": [
    "未找到匹配的实验",
    "No matching experiments"
  ],
  "最小可复现包，保留源码、reference、脚本、CI 与分层清单。": [
    "最小可复演包，保留源码、参考资料、脚本、CI 与分层清单。",
    "Minimal reproducible package retaining source, references, scripts, CI and layered inventories."
  ],
  "文件数来自 release manifest，用于判断包是否完整。": [
    "文件数来自发布包清单，用于核对包是否完整。",
    "The file count comes from the release manifest and helps check package completeness."
  ],
  "展示从 release tarball 外部解包到 verifier PASS 的过程。": [
    "展示从发布压缩包外部解包到验证器通过的过程。",
    "From external extraction of the release archive to the verifier PASS result."
  ],
  "L0 是可执行源码复现；L1/L2 是历史清单和失败边界注册，不伪装成源码复现。": [
    "L0 是可执行的源码复演；L1/L2 是历史清单与失败边界登记，不等同于源码复演。",
    "L0 is executable source reproduction. L1/L2 register historical ledgers and failure boundaries; they are not source reproduction."
  ],
  "Book2/Book3 历史闭合、失败边界和前沿节点的分层纳入清单。": [
    "Book2 / Book3 历史闭合、失败边界和研究前沿节点的分层清单。",
    "Layered inventory of historical closures, failure boundaries and research-frontier nodes from Book2/Book3."
  ],
  "如果复现失败，先看这里定位问题层级。": [
    "若复演失败，先在这里定位问题层级。",
    "If reproduction fails, start here to locate the failing layer."
  ],
  "复现包的防回填边界。": [
    "复演包用于防止结果回填的执行边界。",
    "Execution guards against backfilling results into the reproduction package."
  ],
  "Release 包内部结构和最小化策略。": [
    "发布包的内部结构与最小化策略。",
    "Release archive structure and minimization strategy."
  ],
  "搜索 P83 / V34 / failure / source_rebuild": [
    "搜索 P83 / V34 / 失败 / 源码重建",
    "Search P83 / V34 / failure / source_rebuild"
  ],
  "第三方可从 release 包重建核心物理引擎并复现 V32/V33/V34 的内部闭合。历史实验层被分离为注册清单，不伪装成源码复现。": [
    "第三方可从发布包重建核心物理引擎，复演 V32 / V33 / V34 的内部闭合。历史实验层单列为登记清单，不等同于源码复演。",
    "Third parties can rebuild the core physics engines from the release package and reproduce the internal V32/V33/V34 closure chain. Historical experiments are separate registered inventories, not source reproduction."
  ],
  "复现链存在失败，请先查看 Failure Localization 定位矩阵。": [
    "复演链存在失败，请先查看“失败定位”矩阵。",
    "The reproduction chain has failures. Consult the Failure Localization matrix first."
  ],
  "VERDICT PASS": [
    "验证通过 PASS",
    "VERDICT PASS"
  ],
  "VERDICT FAIL": [
    "验证失败 FAIL",
    "VERDICT FAIL"
  ],
  "PASS": [
    "通过 PASS",
    "PASS"
  ],
  "FAIL": [
    "失败 FAIL",
    "FAIL"
  ],
  "CHECK": [
    "待检查 CHECK",
    "CHECK"
  ],
  "source present": [
    "来源存在",
    "source present"
  ],
  "missing": [
    "缺失",
    "missing"
  ],
  "L0 hard source": [
    "L0 源码复演",
    "L0 hard source"
  ],
  "registered": [
    "已登记",
    "registered"
  ],
  "L0_hard_source": [
    "L0 源码复演",
    "L0_hard_source"
  ],
  "L1_registered_ledger": [
    "L1 已登记账本",
    "L1_registered_ledger"
  ],
  "L2_report_reference": [
    "L2 报告引用",
    "L2_report_reference"
  ],
  "L1_L2_report_reference": [
    "L1 / L2 报告引用",
    "L1_L2_report_reference"
  ],
  "L1_report_reference": [
    "L1 报告引用",
    "L1_report_reference"
  ],
  "included_in_verifier": [
    "已纳入验证器",
    "included_in_verifier"
  ],
  "registered_reference_only": [
    "仅登记参考资料",
    "registered_reference_only"
  ],
  "registered_failure_boundary": [
    "已登记失败边界",
    "registered_failure_boundary"
  ],
  "registered_fused_before_L2": [
    "在 L2 前熔断并登记",
    "registered_fused_before_L2"
  ],
  "frontier_not_in_hard_release": [
    "研究前沿，未纳入源码发布包",
    "frontier_not_in_hard_release"
  ],
  "source_rebuild": [
    "源码重建",
    "source_rebuild"
  ],
  "engine_forward_replay": [
    "引擎前向复演",
    "engine_forward_replay"
  ],
  "ledger_reference": [
    "账本引用",
    "ledger_reference"
  ],
  "failure_boundary": [
    "失败边界",
    "failure_boundary"
  ],
  "active_frontier": [
    "当前研究前沿",
    "active_frontier"
  ],
  "build_rgesolver": [
    "构建 RGESolver",
    "build_rgesolver"
  ],
  "build_hepfit_engine_forward": [
    "构建 HEPfit 前向引擎",
    "build_hepfit_engine_forward"
  ],
  "compile_po09q_engine_forward": [
    "编译 PO09Q 前向探针",
    "compile_po09q_engine_forward"
  ],
  "po09w_seal": [
    "PO09W 边界封存",
    "po09w_seal"
  ],
  "po11_layered_verifier": [
    "PO11 分层验证",
    "po11_layered_verifier"
  ],
  "po11c_extended_layered_verifier": [
    "PO11C 扩展分层验证",
    "po11c_extended_layered_verifier"
  ],
  "V32_HEPfitWhiteBoxAndMwSchemeSweep": [
    "V32 · HEPfit 白盒与 W 质量方案扫描",
    "V32_HEPfitWhiteBoxAndMwSchemeSweep"
  ],
  "V33_EWPOForwardVectorAndCovariance": [
    "V33 · EWPO 前向向量与协方差",
    "V33_EWPOForwardVectorAndCovariance"
  ],
  "V34_HiggsForwardClosure": [
    "V34 · Higgs 前向闭合",
    "V34_HiggsForwardClosure"
  ],
  "V34_FlavourC9ExactSourceClosure": [
    "V34 · Flavour C9 精确源码闭合",
    "V34_FlavourC9ExactSourceClosure"
  ],
  "EndToEndBoundarySeal": [
    "端到端边界封存",
    "EndToEndBoundarySeal"
  ],
  "P83_L1_MetricSplitInvariantAudit": [
    "P83 · L1 度量分裂不变量审计",
    "P83_L1_MetricSplitInvariantAudit"
  ],
  "P83_OrthogonalOblique_L1Extension": [
    "P83 · 正交 / 斜交 L1 扩展",
    "P83_OrthogonalOblique_L1Extension"
  ],
  "P84_WZ_TailGuard": [
    "P84 · WZ 尾部保护",
    "P84_WZ_TailGuard"
  ],
  "P85_ModeImpedanceAndInitialHorizon": [
    "P85 · 模态阻抗与初始视界",
    "P85_ModeImpedanceAndInitialHorizon"
  ],
  "P86_DualCapacityGateL1Fuse": [
    "P86 · 双容量门 L1 熔断",
    "P86_DualCapacityGateL1Fuse"
  ],
  "V35_P83RiskSourceCandidate_L1Audit": [
    "V35 · P83 风险源候选 L1 审计",
    "V35_P83RiskSourceCandidate_L1Audit"
  ],
  "V32 HEPfit white-box probes, DeltaR scheme lock, blind Mw scheme sweep.": [
    "V32 HEPfit 白盒探针、DeltaR 方案锁定与盲测 W 质量方案扫描。",
    "V32 HEPfit white-box probes, DeltaR scheme lock, blind Mw scheme sweep."
  ],
  "V33 EWPO global vector and covariance forward closure.": [
    "V33 EWPO 全局向量与协方差前向闭合。",
    "V33 EWPO global vector and covariance forward closure."
  ],
  "V34 Higgs minimal non-EWPO court forward closure.": [
    "V34 Higgs 最小非 EWPO 检验集合的前向闭合。",
    "V34 Higgs minimal non-EWPO court forward closure."
  ],
  "V34 Flavour C9_22 isolated cavity exact-source repeated raw closure.": [
    "V34 Flavour C9_22 隔离腔体的精确源码重复原始值闭合。",
    "V34 Flavour C9_22 isolated cavity exact-source repeated raw closure."
  ],
  "No fit, no MCMC, no external target read, no physics-parameter tuning seal.": [
    "封存边界：不拟合、不运行 MCMC、不读取外部靶标、不调整物理参数。",
    "No fit, no MCMC, no external target read, no physics-parameter tuning seal."
  ],
  "Q_P83 = Q_base + B_thick P_buffer + S_shear K_shear; positive-definite, condition, Q-energy, hidden/shear orthogonality.": [
    "Q_P83 = Q_base + B_thick P_buffer + S_shear K_shear；检查正定性、条件数、Q 能量及隐藏 / 剪切正交性。",
    "Q_P83 = Q_base + B_thick P_buffer + S_shear K_shear; positive-definite, condition, Q-energy, hidden/shear orthogonality."
  ],
  "Gram-Schmidt order Buffer -> T_shear -> U_shear -> S_guarded; pairwise Frobenius orthogonality.": [
    "Gram-Schmidt 顺序：Buffer → T_shear → U_shear → S_guarded；检查两两 Frobenius 正交性。",
    "Gram-Schmidt order Buffer -> T_shear -> U_shear -> S_guarded; pairwise Frobenius orthogonality."
  ],
  "WZ manifestation interface Tail Guard; partial tail suppression with correlation side effect.": [
    "WZ 显化接口的尾部保护；局部尾部受到抑制，同时存在相关性副作用。",
    "WZ manifestation interface Tail Guard; partial tail suppression with correlation side effect."
  ],
  "D_mode = 1/(1+x^2), J_vac_mode_limited, J_mode_buffer dark-cavity routing.": [
    "D_mode = 1/(1+x^2)，J_vac_mode_limited 与 J_mode_buffer 的暗腔路由。",
    "D_mode = 1/(1+x^2), J_vac_mode_limited, J_mode_buffer dark-cavity routing."
  ],
  "wz_risk/core_risk capacity gate; L1 risk distribution failed and L2 was not authorized.": [
    "wz_risk / core_risk 容量门；L1 风险分布未通过，因此未获准进入 L2。",
    "wz_risk/core_risk capacity gate; L1 risk distribution failed and L2 was not authorized."
  ],
  "P83/P86 successor risk-source audit; not yet part of hard public reproduction bundle.": [
    "P83 / P86 后续风险源审计；尚未纳入公开源码复演包。",
    "P83/P86 successor risk-source audit; not yet part of hard public reproduction bundle."
  ],
  "All verifier gates passed.": [
    "所有验证器检查门均已通过。",
    "All verifier gates passed."
  ],
  "Build": [
    "构建",
    "Build"
  ],
  "Runtime": [
    "运行时",
    "Runtime"
  ],
  "Numerical Drift": [
    "数值漂移",
    "Numerical Drift"
  ],
  "Boundary Violation": [
    "边界违规",
    "Boundary Violation"
  ],
  "Reference Mismatch": [
    "参考资料不匹配",
    "Reference Mismatch"
  ],
  "Docker": [
    "Docker 容器",
    "Docker"
  ],
  "CMake/make/compiler dependency failure.": [
    "CMake / make / 编译器依赖失败。",
    "CMake/make/compiler dependency failure."
  ],
  "Executable/Python/Docker command crashes after build.": [
    "构建后的可执行程序、Python 或 Docker 命令崩溃。",
    "Executable/Python/Docker command crashes after build."
  ],
  "Engine output finite but differs from frozen internal reference.": [
    "引擎输出为有限值，但与冻结的内部参考值不同。",
    "Engine output finite but differs from frozen internal reference."
  ],
  "Fit/MCMC/external-target/physics-change gate violated.": [
    "违反拟合、MCMC、外部靶标读取或物理变更检查门。",
    "Fit/MCMC/external-target/physics-change gate violated."
  ],
  "Required reference artifact missing, stale, or inconsistent.": [
    "所需参考文件缺失、过期或不一致。",
    "Required reference artifact missing, stale, or inconsistent."
  ],
  "Docker daemon/image/mount failure.": [
    "Docker 守护进程、镜像或挂载失败。",
    "Docker daemon/image/mount failure."
  ],
  "fit_run": [
    "运行拟合",
    "fit_run"
  ],
  "mcmc_run": [
    "运行 MCMC",
    "mcmc_run"
  ],
  "external_target_read": [
    "读取外部靶标",
    "external_target_read"
  ],
  "physics_formula_changed": [
    "修改物理公式",
    "physics_formula_changed"
  ],
  "physics_parameter_tuning": [
    "调整物理参数",
    "physics_parameter_tuning"
  ],
  "new_physics_claim_allowed": [
    "允许宣称新物理",
    "new_physics_claim_allowed"
  ],
  "false": [
    "否（false）",
    "false"
  ],
  "true": [
    "是（true）",
    "true"
  ],
  "V32_HEPfit_WhiteBox_MwScheme": [
    "V32 · HEPfit 白盒与 W 质量方案",
    "V32_HEPfit_WhiteBox_MwScheme"
  ],
  "V33_EWPO_GlobalForwardClosure": [
    "V33 · EWPO 全局前向闭合",
    "V33_EWPO_GlobalForwardClosure"
  ],
  "V34_Higgs_Flavour_C9_IsolatedCavity": [
    "V34 · Higgs / Flavour C9 隔离腔体",
    "V34_Higgs_Flavour_C9_IsolatedCavity"
  ]
};
  let saved;
  try { saved = localStorage.getItem('wuxing-replay-language'); } catch (_) {}
  const requested = new URLSearchParams(location.search).get('lang');
  const language = ['zh', 'en'].includes(requested) ? requested : (['zh', 'en'].includes(saved) ? saved : 'zh');
  const t = value => messages[value]?.[language === 'zh' ? 0 : 1] ?? String(value ?? '');
  window.REPLAY_I18N = { language, t };
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = t('Wuxing Reproduction Lab');
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  const search = document.getElementById('inventory-search');
  search.placeholder = t('搜索 P83 / V34 / failure / source_rebuild');
  search.setAttribute('aria-label', language === 'zh' ? '搜索实验清单' : 'Search experiment inventory');
  document.getElementById('inventory-layer').setAttribute('aria-label', language === 'zh' ? '按验证层级筛选' : 'Filter verification layer');
  document.querySelectorAll('[data-language]').forEach(link => {
    const target = link.dataset.language;
    const updateHref = () => {
      const url = new URL(location.href); url.searchParams.set('lang', target);
      link.href = url.pathname + url.search + url.hash;
    };
    updateHref();
    if (target === language) link.setAttribute('aria-current', 'true');
    link.addEventListener('click', () => {
      updateHref(); // Keep the section selected since the page loaded.
      try { localStorage.setItem('wuxing-replay-language', target); } catch (_) {}
    });
  });
})();
