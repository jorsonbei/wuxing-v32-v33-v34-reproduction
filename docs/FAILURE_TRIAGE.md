# PO09Y Failure Triage

## Build Fails Before PO09Q

Check:

- `logs/20_hepfit_configure.log`
- `logs/20_hepfit_build.log`
- `logs/97_compile_po09q_engine_forward.log`

Most common causes are missing ROOT/GSL/RGESolver paths or an image mismatch.

## PO09Q V34 Flavour Strict Closure Fails

Check:

- `engine_forward/v34_legacy_probe/raw_docker.csv`
- `data/internal/hfcd_v34/HFCD_V34_012_BoundaryBest_FlavourRaw.csv`
- `root_cause/PO09V_V34FlavourCanonicalReferenceRefresh_NoPhysicsChange_NoTargetRead/PO09V_reference_refresh_diff.csv`

If raw is finite but differs from reference, do not tune physics parameters. First verify whether the canonical reference is stale.

## PO09R Exact Source Fails

Check:

- `root_cause/PO09R_V34FlavourExactSourceDriftRootCause/PO09R_V34FlavourDriftDistribution.csv`
- `root_cause/PO09R_V34FlavourExactSourceDriftRootCause/source_integrator_snippets.txt`

The solved PO09U root cause was `MsoMb` being used in `C_7p` before initialization. If this reappears, inspect `MVll::updateParameters()` ordering first.

## Boundary Failure

Any accidental `fit_run=true`, `mcmc_run=true`, or `external_target_read=true` invalidates this reproduction seal. Stop and inspect the script path before rerunning.
