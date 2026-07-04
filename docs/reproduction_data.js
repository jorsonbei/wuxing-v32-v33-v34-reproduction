window.REPRO_DATA = {
  "generated_at": "2026-07-03T07:21:48.780476+00:00",
  "release": {
    "archive": "release/PO10D_wuxing_v32_v33_v34_reproduction_release.tar.gz",
    "archive_sha256": "e4219534086fe18dea4bc40dc23114e957f1966a2238ebdf6b5bf57adb26a538",
    "archive_size_bytes": 216254027,
    "manifest": "release/PO10D_MANIFEST.json",
    "boundary_statement": "release/PO10D_BOUNDARY_STATEMENT.md",
    "third_party_guide": "release/PO10D_THIRD_PARTY_REPLAY_GUIDE.md",
    "ci_script": "ci_verify_reproduction.sh",
    "ci_workflow": "ci/github_actions_verify_reproduction.yml"
  },
  "verdict": {
    "route": "PO10B_OneCommandPublicVerifier",
    "generated_at": "2026-07-03T06:44:31.402301+00:00",
    "verdict_passed": true,
    "state": {
      "fit_run": false,
      "mcmc_run": false,
      "external_target_read": false,
      "physics_formula_changed": false,
      "physics_parameter_tuning": false,
      "new_physics_claim_allowed": false
    },
    "gates": {
      "all_phases_exit_zero": true,
      "v32_assertions_passed": true,
      "v33_engine_forward_closure": true,
      "v34_higgs_engine_forward_closure": true,
      "v34_flavour_strict_closure": true,
      "po09r_exact_source_reproduction": true,
      "po09w_end_to_end_seal": true,
      "po09x_clean_clone_determinism": true,
      "po11_layered_verifier": true,
      "po11c_extended_layered_verifier": true
    },
    "phases": [
      {
        "phase": "build_rgesolver",
        "exit_code": 0,
        "started_at": "2026-07-03T06:26:03Z",
        "finished_at": "2026-07-03T06:27:06Z",
        "log_path": "/work/verification/build_rgesolver.log",
        "duration_seconds": 63
      },
      {
        "phase": "build_hepfit_engine_forward",
        "exit_code": 0,
        "started_at": "2026-07-03T06:27:06Z",
        "finished_at": "2026-07-03T06:43:11Z",
        "log_path": "/work/verification/build_hepfit_engine_forward.log",
        "duration_seconds": 965
      },
      {
        "phase": "compile_po09q_engine_forward",
        "exit_code": 0,
        "started_at": "2026-07-03T06:43:11Z",
        "finished_at": "2026-07-03T06:43:25Z",
        "log_path": "/work/verification/compile_po09q_engine_forward.log",
        "duration_seconds": 14
      },
      {
        "phase": "po09w_seal",
        "exit_code": 0,
        "started_at": "2026-07-03T06:43:25Z",
        "finished_at": "2026-07-03T06:44:31Z",
        "log_path": "/work/verification/po09w_seal.log",
        "duration_seconds": 66
      },
      {
        "phase": "po11_layered_verifier",
        "exit_code": 0,
        "started_at": "2026-07-03T06:44:31Z",
        "finished_at": "2026-07-03T06:44:31Z",
        "log_path": "/work/verification/po11_layered_verifier.log",
        "duration_seconds": 0
      },
      {
        "phase": "po11c_extended_layered_verifier",
        "exit_code": 0,
        "started_at": "2026-07-03T06:44:31Z",
        "finished_at": "2026-07-03T06:44:31Z",
        "log_path": "/work/verification/po11c_extended_layered_verifier.log",
        "duration_seconds": 0
      }
    ],
    "reports": {
      "v32_assertions": "/work/reports/v32_assertions.json",
      "po09q": "/work/engine_forward/PO09Q_V33V34EngineForward_Report.json",
      "po09r": "/work/root_cause/PO09R_V34FlavourExactSourceDriftRootCause/PO09R_V34FlavourExactSourceDriftRootCause_Report.json",
      "po09w": "/work/root_cause/PO09W_V33V34EndToEndThirdPartyReproductionSeal_NoPhysicsChange/PO09W_V33V34EndToEndThirdPartyReproductionSeal_NoPhysicsChange_Report.json",
      "po09x": "/work/clean_replay/PO09X_20260703T014608Z/PO09X_CleanCloneDeterminismAudit_NoPhysicsChange_Report.json",
      "po11": "/work/layered_verifier/PO11_ExtendBeyondV33V34_Report.json",
      "po11c": "/work/layered_verifier/PO11C_ExtendedLayeredVerifier_Report.json"
    }
  },
  "external_replay": {
    "report": "external_replay/PO10E_20260703T065720Z/PO10E_ExternalReleaseReplay_Report.json",
    "passed": true,
    "archive_sha256": "e4219534086fe18dea4bc40dc23114e957f1966a2238ebdf6b5bf57adb26a538",
    "verify_exit_code": 0,
    "verify_clean_clone": "0"
  },
  "failure_matrix": {
    "route": "PO10C_FailureLocalizationMatrix",
    "generated_at": "2026-07-03T06:44:31.426975+00:00",
    "failure_class": "PASS",
    "reason": "All verifier gates passed.",
    "failed_phase": null,
    "failed_log": null,
    "categories": {
      "Build": "CMake/make/compiler dependency failure.",
      "Runtime": "Executable/Python/Docker command crashes after build.",
      "Numerical Drift": "Engine output finite but differs from frozen internal reference.",
      "Boundary Violation": "Fit/MCMC/external-target/physics-change gate violated.",
      "Reference Mismatch": "Required reference artifact missing, stale, or inconsistent.",
      "Docker": "Docker daemon/image/mount failure."
    }
  },
  "po11c": {
    "route": "PO11C_ExtendedLayeredVerifier",
    "generated_at": "2026-07-03T06:44:31.338383+00:00",
    "extended_layered_verifier_passed": true,
    "hard_source_reproduction_passed": true,
    "registered_reference_sources_present": true,
    "state": {
      "fit_run": false,
      "mcmc_run": false,
      "external_target_read": false,
      "physics_formula_changed": false,
      "physics_parameter_tuning": false,
      "new_physics_claim_allowed": false
    },
    "layers": {
      "L0_hard_source_reproduction": [
        {
          "layer_id": "V32_HEPfitWhiteBoxAndMwSchemeSweep",
          "passed": true,
          "source": "reports/v32_assertions.json",
          "scope": "V32 HEPfit white-box probes, DeltaR scheme lock, blind Mw scheme sweep."
        },
        {
          "layer_id": "V33_EWPOForwardVectorAndCovariance",
          "passed": true,
          "source": "engine_forward/PO09Q_V33V34EngineForward_Report.json",
          "scope": "V33 EWPO global vector and covariance forward closure."
        },
        {
          "layer_id": "V34_HiggsForwardClosure",
          "passed": true,
          "source": "engine_forward/PO09Q_V33V34EngineForward_Report.json",
          "scope": "V34 Higgs minimal non-EWPO court forward closure."
        },
        {
          "layer_id": "V34_FlavourC9ExactSourceClosure",
          "passed": true,
          "source": "root_cause/PO09R_V34FlavourExactSourceDriftRootCause/PO09R_V34FlavourExactSourceDriftRootCause_Report.json",
          "scope": "V34 Flavour C9_22 isolated cavity exact-source repeated raw closure."
        },
        {
          "layer_id": "EndToEndBoundarySeal",
          "passed": true,
          "source": "root_cause/PO09W_V33V34EndToEndThirdPartyReproductionSeal_NoPhysicsChange/PO09W_V33V34EndToEndThirdPartyReproductionSeal_NoPhysicsChange_Report.json",
          "scope": "No fit, no MCMC, no external target read, no physics-parameter tuning seal."
        }
      ],
      "L1_registered_ledger_and_failure_boundaries": [
        {
          "layer_id": "P83_L1_MetricSplitInvariantAudit",
          "passed": true,
          "reproduction_layer": "L1_registered_ledger",
          "status": "registered_reference_only",
          "source": "local-evidence/HFCD_RUN_OUTPUTS/20260601_145147_HFCD_V32_022_P83_L1MetricSplitInvariantAudit_NoTargetRead/HFCD_V32_022_P83_L1MetricSplitInvariantAudit_Report.json",
          "closure_type": "ledger_reference",
          "scope": "Q_P83 = Q_base + B_thick P_buffer + S_shear K_shear; positive-definite, condition, Q-energy, hidden/shear orthogonality.",
          "boundary": "L1 internal closure only; not external equivalence."
        },
        {
          "layer_id": "P83_OrthogonalOblique_L1Extension",
          "passed": true,
          "reproduction_layer": "L1_registered_ledger",
          "status": "registered_reference_only",
          "source": "local-evidence/HFCD_RUN_OUTPUTS/20260601_152749_HFCD_V32_027B_P83_OrthogonalBasisRevision_NoRun/HFCD_V32_027B_P83_OrthogonalBasisRevision_Report.json",
          "closure_type": "ledger_reference",
          "scope": "Gram-Schmidt order Buffer -> T_shear -> U_shear -> S_guarded; pairwise Frobenius orthogonality.",
          "boundary": "NoTargetRead; no visible mass calculation in L1 audit."
        },
        {
          "layer_id": "P84_WZ_TailGuard",
          "passed": true,
          "reproduction_layer": "L2_report_reference",
          "status": "registered_failure_boundary",
          "source": "local-evidence/BSM_P84_006_L2_Ignition_Report.json",
          "closure_type": "failure_boundary",
          "scope": "WZ manifestation interface Tail Guard; partial tail suppression with correlation side effect.",
          "boundary": "Semi-success; not promoted as full closure."
        },
        {
          "layer_id": "P85_ModeImpedanceAndInitialHorizon",
          "passed": true,
          "reproduction_layer": "L1_L2_report_reference",
          "status": "registered_reference_only",
          "source": "local-evidence/HFCD_RUN_OUTPUTS/20260601_002511_BSM_P85_010_ModeImpedanceL2Ignition_NoBackfit/BSM_P85_010_ModeImpedanceL2Ignition_Report.json",
          "closure_type": "ledger_reference",
          "scope": "D_mode = 1/(1+x^2), J_vac_mode_limited, J_mode_buffer dark-cavity routing.",
          "boundary": "NoBackfit; L1 parameters locked before L2."
        },
        {
          "layer_id": "P86_DualCapacityGateL1Fuse",
          "passed": true,
          "reproduction_layer": "L1_report_reference",
          "status": "registered_fused_before_L2",
          "source": "book-canon/Book2_HFCD_实验整合版_FINAL_v2.md",
          "closure_type": "failure_boundary",
          "scope": "wz_risk/core_risk capacity gate; L1 risk distribution failed and L2 was not authorized.",
          "boundary": "Successful failure: no L2 ignition."
        },
        {
          "layer_id": "V35_P83RiskSourceCandidate_L1Audit",
          "passed": true,
          "reproduction_layer": "L1_report_reference",
          "status": "frontier_not_in_hard_release",
          "source": "local-evidence/HFCD_RUN_OUTPUTS/20260702_132000_HFCD_V35_001E_P83RiskSourceCandidateL1Audit_NoTargetRead/V35_001E_P83RiskSourceCandidateL1Audit_Report.json",
          "closure_type": "active_frontier",
          "scope": "P83/P86 successor risk-source audit; not yet part of hard public reproduction bundle.",
          "boundary": "NoTargetRead frontier; not an external equivalence claim."
        }
      ]
    },
    "boundary": "L0 layers are executable source-rebuild claims. L1/L2 historical layers are registered source-presence and boundary claims unless promoted by a future executable replay script."
  },
  "inventory": [
    {
      "experiment_id": "V32_HEPfit_WhiteBox_MwScheme",
      "book": "Book3",
      "closure_type": "source_rebuild",
      "reproduction_layer": "L0_hard_source",
      "status": "included_in_verifier",
      "primary_source": "reports/v32_assertions.json",
      "formula_operator_summary": "HEPfit StandardModel/EWSMOneLoopEW probes, DeltaR analytic benchmark, FlagMw scheme guard, blind Mw scheme sweep.",
      "boundary": "NoTargetRead until explicit unblind; no new physics claim.",
      "source_exists": "True",
      "primary_source_rel": "reports/v32_assertions.json"
    },
    {
      "experiment_id": "V33_EWPO_GlobalForwardClosure",
      "book": "Book3",
      "closure_type": "engine_forward_replay",
      "reproduction_layer": "L0_hard_source",
      "status": "included_in_verifier",
      "primary_source": "engine_forward/PO09Q_V33V34EngineForward_Report.json",
      "formula_operator_summary": "R=O_exp-O_th, chi2=R^T C^-1 R, 28-dim EWPO covariance court.",
      "boundary": "Forward-only; V32 golden state frozen; no fit.",
      "source_exists": "True",
      "primary_source_rel": "engine_forward/PO09Q_V33V34EngineForward_Report.json"
    },
    {
      "experiment_id": "V34_Higgs_Flavour_C9_IsolatedCavity",
      "book": "Book3",
      "closure_type": "engine_forward_replay",
      "reproduction_layer": "L0_hard_source",
      "status": "included_in_verifier",
      "primary_source": "engine_forward/PO09Q_V33V34EngineForward_Report.json",
      "formula_operator_summary": "RealWeakEFTLFV C9_22 isolated parameter, Higgs/EWPO drift guard, Flavour LQ1 raw exact closure.",
      "boundary": "Only C9_22 cavity; no cross-sector parameter leakage.",
      "source_exists": "True",
      "primary_source_rel": "engine_forward/PO09Q_V33V34EngineForward_Report.json"
    },
    {
      "experiment_id": "P83_L1_MetricSplitInvariantAudit",
      "book": "Book2/Book3",
      "closure_type": "ledger_reference",
      "reproduction_layer": "L1_registered_ledger",
      "status": "registered_reference_only",
      "primary_source": "local-evidence/HFCD_RUN_OUTPUTS/20260601_145147_HFCD_V32_022_P83_L1MetricSplitInvariantAudit_NoTargetRead/HFCD_V32_022_P83_L1MetricSplitInvariantAudit_Report.json",
      "formula_operator_summary": "Q_P83 = Q_base + B_thick P_buffer + S_shear K_shear; positive-definite, condition, Q-energy, hidden/shear orthogonality.",
      "boundary": "L1 internal closure only; not external equivalence.",
      "source_exists": "True",
      "primary_source_rel": "local-evidence/HFCD_RUN_OUTPUTS/20260601_145147_HFCD_V32_022_P83_L1MetricSplitInvariantAudit_NoTargetRead/HFCD_V32_022_P83_L1MetricSplitInvariantAudit_Report.json"
    },
    {
      "experiment_id": "P83_OrthogonalOblique_L1Extension",
      "book": "Book3",
      "closure_type": "ledger_reference",
      "reproduction_layer": "L1_registered_ledger",
      "status": "registered_reference_only",
      "primary_source": "local-evidence/HFCD_RUN_OUTPUTS/20260601_152749_HFCD_V32_027B_P83_OrthogonalBasisRevision_NoRun/HFCD_V32_027B_P83_OrthogonalBasisRevision_Report.json",
      "formula_operator_summary": "Gram-Schmidt order Buffer -> T_shear -> U_shear -> S_guarded; pairwise Frobenius orthogonality.",
      "boundary": "NoTargetRead; no visible mass calculation in L1 audit.",
      "source_exists": "True",
      "primary_source_rel": "local-evidence/HFCD_RUN_OUTPUTS/20260601_152749_HFCD_V32_027B_P83_OrthogonalBasisRevision_NoRun/HFCD_V32_027B_P83_OrthogonalBasisRevision_Report.json"
    },
    {
      "experiment_id": "P84_WZ_TailGuard",
      "book": "Book2",
      "closure_type": "failure_boundary",
      "reproduction_layer": "L2_report_reference",
      "status": "registered_failure_boundary",
      "primary_source": "local-evidence/BSM_P84_006_L2_Ignition_Report.json",
      "formula_operator_summary": "WZ manifestation interface Tail Guard; partial tail suppression with correlation side effect.",
      "boundary": "Semi-success; not promoted as full closure.",
      "source_exists": "True",
      "primary_source_rel": "local-evidence/BSM_P84_006_L2_Ignition_Report.json"
    },
    {
      "experiment_id": "P85_ModeImpedanceAndInitialHorizon",
      "book": "Book2/Book3",
      "closure_type": "ledger_reference",
      "reproduction_layer": "L1_L2_report_reference",
      "status": "registered_reference_only",
      "primary_source": "local-evidence/HFCD_RUN_OUTPUTS/20260601_002511_BSM_P85_010_ModeImpedanceL2Ignition_NoBackfit/BSM_P85_010_ModeImpedanceL2Ignition_Report.json",
      "formula_operator_summary": "D_mode = 1/(1+x^2), J_vac_mode_limited, J_mode_buffer dark-cavity routing.",
      "boundary": "NoBackfit; L1 parameters locked before L2.",
      "source_exists": "True",
      "primary_source_rel": "local-evidence/HFCD_RUN_OUTPUTS/20260601_002511_BSM_P85_010_ModeImpedanceL2Ignition_NoBackfit/BSM_P85_010_ModeImpedanceL2Ignition_Report.json"
    },
    {
      "experiment_id": "P86_DualCapacityGateL1Fuse",
      "book": "Book2",
      "closure_type": "failure_boundary",
      "reproduction_layer": "L1_report_reference",
      "status": "registered_fused_before_L2",
      "primary_source": "book-canon/Book2_HFCD_实验整合版_FINAL_v2.md",
      "formula_operator_summary": "wz_risk/core_risk capacity gate; L1 risk distribution failed and L2 was not authorized.",
      "boundary": "Successful failure: no L2 ignition.",
      "source_exists": "True",
      "primary_source_rel": "book-canon/Book2_HFCD_实验整合版_FINAL_v2.md"
    },
    {
      "experiment_id": "V35_P83RiskSourceCandidate_L1Audit",
      "book": "Book2/Book3",
      "closure_type": "active_frontier",
      "reproduction_layer": "L1_report_reference",
      "status": "frontier_not_in_hard_release",
      "primary_source": "local-evidence/HFCD_RUN_OUTPUTS/20260702_132000_HFCD_V35_001E_P83RiskSourceCandidateL1Audit_NoTargetRead/V35_001E_P83RiskSourceCandidateL1Audit_Report.json",
      "formula_operator_summary": "P83/P86 successor risk-source audit; not yet part of hard public reproduction bundle.",
      "boundary": "NoTargetRead frontier; not an external equivalence claim.",
      "source_exists": "True",
      "primary_source_rel": "local-evidence/HFCD_RUN_OUTPUTS/20260702_132000_HFCD_V35_001E_P83RiskSourceCandidateL1Audit_NoTargetRead/V35_001E_P83RiskSourceCandidateL1Audit_Report.json"
    }
  ],
  "manifest": {
    "file_count": 4086,
    "file_groups": {
      ".dockerignore": 1,
      "Dockerfile": 1,
      "Makefile": 1,
      "README.md": 1,
      "ci": 1,
      "ci_verify_reproduction.sh": 1,
      "data": 14,
      "engine_forward": 7,
      "layered_verifier": 7,
      "probes": 3,
      "reference": 2,
      "release": 23,
      "reports": 8,
      "root_cause": 8,
      "scripts": 42,
      "sources": 3965,
      "verify_reproduction.sh": 1
    },
    "gates": {
      "v32_assertions_passed": true,
      "v33_engine_forward_closure": true,
      "v34_higgs_engine_forward_closure": true,
      "v34_flavour_strict_closure": true,
      "v34_flavour_max_abs_diff": 0.0,
      "po09r_exact_source_reproduction": true,
      "po09w_end_to_end_seal": true,
      "po09x_clean_clone_determinism": true,
      "po09z_tarball_only_external_replay": true,
      "po10e_external_release_replay": true,
      "po11_layered_verifier": true
    },
    "minimization_policy": {
      "kept": [
        "sources",
        "scripts",
        "probes",
        "internal references",
        "Dockerfile",
        "Makefile",
        "runbooks",
        "CI template",
        "layered inventory"
      ],
      "removed": [
        "build",
        "install",
        "logs",
        "clean_replay",
        "external_replay",
        "runtime vectors/logs"
      ],
      "source_tree_is_size_floor": true
    }
  },
  "commands": {
    "one_command": "tar -xzf PO10D_wuxing_v32_v33_v34_reproduction_release.tar.gz && cd po09h_hepfit_linux_clean_rebuild && ./verify_reproduction.sh",
    "fast_check": "VERIFY_CLEAN_CLONE=0 ./verify_reproduction.sh",
    "ci_check": "VERIFY_CLEAN_CLONE=0 JOBS=2 ./ci_verify_reproduction.sh",
    "serve_dashboard": "cd dashboard && python3 -m http.server 8787"
  },
  "boundaries": [
    "fit_run=false",
    "mcmc_run=false",
    "external_target_read=false",
    "physics_formula_changed=false",
    "physics_parameter_tuning=false",
    "new_physics_claim_allowed=false"
  ]
};
// pages_rebuild_marker: 2026-07-04T05:30:13.959236+00:00
