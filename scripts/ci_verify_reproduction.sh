#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${ROOT_DIR}"

VERIFY_CLEAN_CLONE="${VERIFY_CLEAN_CLONE:-0}" JOBS="${JOBS:-1}" ./verify_reproduction.sh

python3 - <<'PY'
import json
from pathlib import Path

verdict = json.loads(Path("verification/VERDICT.json").read_text(encoding="utf-8"))
matrix = json.loads(Path("verification/FAILURE_LOCALIZATION_MATRIX.json").read_text(encoding="utf-8"))
print("VERDICT_PASSED=", verdict.get("verdict_passed"))
print("FAILURE_CLASS=", matrix.get("failure_class"))
if not verdict.get("verdict_passed"):
    raise SystemExit(1)
PY
