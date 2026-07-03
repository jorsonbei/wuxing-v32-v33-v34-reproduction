# PO10F / PO10D Third-Party Replay Guide

This package is designed for a third party to reproduce the executable V32/V33/V34 closure chain without relying on the original working repository.

## What This Reproduces

1. **V32 HEPfit white-box and W-mass scheme chain**
   - Rebuilds RGESolver/HEPfit dependencies from bundled source.
   - Compiles the V32/PO09Q probes.
   - Verifies V32 assertion reports and scheme-locked electroweak engine behavior.

2. **V33 EWPO global forward closure**
   - Recomputes the theory-vector/covariance closure path.
   - Checks the frozen forward-evaluation reference.

3. **V34 Higgs and Flavour C9_22 isolated cavity**
   - Verifies Higgs sector isolation.
   - Verifies Flavour LQ1 `C9_22` exact-source closure with strict zero-drift reference.

4. **Boundary and layered verifier**
   - Checks no fit, no MCMC, no external-target read, no physics-parameter tuning, and no new-physics claim.
   - Separates hard executable source reproduction from historical report/ledger inventory.

## One Command

```bash
tar -xzf PO10D_wuxing_v32_v33_v34_reproduction_release.tar.gz
cd po09h_hepfit_linux_clean_rebuild
./verify_reproduction.sh
```

The verifier writes:

- `verification/VERDICT.json`
- `verification/FAILURE_LOCALIZATION_MATRIX.json`
- `layered_verifier/PO11_ExtendBeyondV33V34_Report.json`
- `layered_verifier/PO11C_ExtendedLayeredVerifier_Report.json` when historical inventory is bundled.

## Visual Dashboard

Open the local static dashboard after extracting the package:

```bash
open dashboard/index.html
```

Or serve it as a local website:

```bash
cd dashboard
python3 -m http.server 8787
```

Then visit `http://127.0.0.1:8787`.

The dashboard is a read-only visual inspector for `VERDICT.json`, `PO10E`, `PO11B`, `PO11C`, `FAILURE_LOCALIZATION_MATRIX.json`, and `PO10D_MANIFEST.json`. It does not run HEPfit, does not update references, and does not perform fits.

## Faster Local Check

If you only want to verify the existing tree without the nested clean-clone replay while still rebuilding sources cleanly:

```bash
VERIFY_CLEAN_CLONE=0 ./verify_reproduction.sh
```

Dirty build reuse is intentionally disabled for the public verifier because stale CMake/BAT caches can create false failures. By default, `verify_reproduction.sh` checks for Docker image `wx-po09q-engine-forward:20260702`; if the image is missing it builds the image from the bundled `Dockerfile`, then self-enters Docker and performs a clean build inside `/work`. Override image name with:

```bash
IMAGE=<your-image> VERIFY_CLEAN_CLONE=1 ./verify_reproduction.sh
```

## CI Entry

For CI or a clean runner:

```bash
chmod +x ./ci_verify_reproduction.sh
VERIFY_CLEAN_CLONE=0 JOBS=2 ./ci_verify_reproduction.sh
```

The GitHub Actions template is bundled at `ci/github_actions_verify_reproduction.yml`.

## Failure Localization

If the command fails, read `verification/FAILURE_LOCALIZATION_MATRIX.json` first. It classifies failures into:

- `Docker`: Docker daemon/image/mount failure.
- `Build`: CMake, compiler, RGESolver, HEPfit, ROOT/GSL dependency failure.
- `Runtime`: executable/Python crash after build.
- `Numerical Drift`: finite output differs from frozen internal reference.
- `Boundary Violation`: no-fit/no-target/no-physics-change guard failed.
- `Reference Mismatch`: required reference artifact missing or stale.

## Boundaries

This package does **not**:

- read PDG/CDF W-mass targets during reproduction,
- run optimizer/MCMC,
- tune physics parameters,
- change physics formulas,
- claim external new-physics equivalence.

## Expected PASS Gates

```json
{
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
}
```
