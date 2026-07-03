# Wuxing V32/V33/V34 Reproduction Package

This repository publishes the third-party reproduction package for the Wuxing / Light-Fluid research chain covering:

- **V32**: HEPfit white-box physical-engine probes and W-mass scheme-sweep discipline.
- **V33**: EWPO global vector, covariance, residual, and forward-closure verifier.
- **V34**: Flavour `C9_22` isolated-cavity closure and Higgs/EWPO firewall checks.

The full source-rebuild archive is distributed as a GitHub Release asset because it is about 209 MB and should not be committed into ordinary git history.

## Quick Start

Requirements:

- Docker
- GitHub CLI, or a browser download from the Releases page
- A machine with enough CPU/RAM for a clean HEPfit/RGESolver/BAT source rebuild

Download the release asset:

```bash
gh release download v2026.07.03 \
  -R jorsonbei/wuxing-v32-v33-v34-reproduction \
  -p 'PO10D_wuxing_v32_v33_v34_reproduction_release.tar.gz'
```

Verify the archive hash:

```bash
shasum -a 256 PO10D_wuxing_v32_v33_v34_reproduction_release.tar.gz
```

Expected SHA256:

```text
39f6eb874ab212c7ee32333db367d90c46f1f028d6dbc002318afc992da19415
```

Run the verifier:

```bash
tar -xzf PO10D_wuxing_v32_v33_v34_reproduction_release.tar.gz
cd po09h_hepfit_linux_clean_rebuild
./verify_reproduction.sh
```

Expected top-level result:

```text
verdict_passed = true
```

## What This Reproduces

This package reproduces a frozen, bounded physical-engine and evidence chain:

1. Rebuilds the required HEPfit/RGESolver/BAT engine layer from bundled source.
2. Recompiles and reruns V32 C++ probes.
3. Recomputes V33/V34 engine-forward evidence through the rebuilt engine.
4. Runs the layered verifier and boundary seal.
5. Emits a single PASS/FAIL verdict plus failure-localization artifacts.

## What This Does Not Claim

This package does **not** claim unconditional new physics or total external equivalence.

The verifier is intentionally bounded:

- no fitting;
- no MCMC;
- no new external target read;
- no physics-parameter tuning;
- no external-target backfit;
- no unconditional BSM victory claim.

It proves that the frozen V32/V33/V34 reproduction chain can be rebuilt and rechecked under the declared boundaries.

## Repository Contents

- `release/PO10D_MANIFEST.public.json`: public manifest for the release asset.
- `release/VERDICT.latest.json`: latest local one-command verifier result.
- `release/PO11C_ExtendedLayeredVerifier_Report.json`: layered verifier report.
- `docs/THIRD_PARTY_REPLAY_GUIDE.md`: replay guide.
- `docs/BOUNDARY_STATEMENT.md`: boundary statement.
- `docs/FAILURE_TRIAGE.md`: failure localization guide.
- `dashboard/`: static visual dashboard source.
- `scripts/ci_verify_reproduction.sh`: CI entry script used inside the extracted archive.
- `ci/github_actions_verify_reproduction.yml`: GitHub Actions template.

## Visual Dashboard

The static dashboard in `dashboard/` can be opened locally:

```bash
open dashboard/index.html
```

If GitHub Pages is enabled for this repository, the same dashboard can be served from the public Pages URL.

## Third-Party License Boundary

This repository contains a public wrapper around a release archive that includes third-party source snapshots. Those third-party projects retain their own licenses. See `THIRD_PARTY_LICENSE_NOTICE.md`.

