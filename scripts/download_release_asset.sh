#!/usr/bin/env bash
set -euo pipefail

REPO="${REPO:-jorsonbei/wuxing-v32-v33-v34-reproduction}"
TAG="${TAG:-v2026.07.03}"
ASSET="${ASSET:-PO10D_wuxing_v32_v33_v34_reproduction_release.tar.gz}"

gh release download "${TAG}" -R "${REPO}" -p "${ASSET}"
shasum -a 256 "${ASSET}"

cat <<'EOF'

Expected SHA256:
39f6eb874ab212c7ee32333db367d90c46f1f028d6dbc002318afc992da19415

Next:
  tar -xzf PO10D_wuxing_v32_v33_v34_reproduction_release.tar.gz
  cd po09h_hepfit_linux_clean_rebuild
  ./verify_reproduction.sh
EOF

