# Wuxing Reproduction Lab Dashboard

这是 PO10/PO11 复现包的本地静态可视化面板。它不运行物理计算、不读取外部靶标、不做拟合，只读取随包落盘的 JSON/CSV 复现证据。

## 直接打开

双击或浏览器打开：

```text
dashboard/index.html
```

## 本地网站预览

```bash
cd dashboard
python3 -m http.server 8787
```

然后访问：

```text
http://127.0.0.1:8787
```

## 面板展示什么

- `VERDICT.json` 的最终 PASS/FAIL。
- PO10E release tarball 外部复演结果。
- PO11C 分层 verifier：硬源码复现层与历史注册层。
- PO11B 历史闭合实验清单。
- PO10C 失败定位矩阵。
- Release manifest、SHA256、文件结构。
- 第三方一键复现命令和 CI 命令。

## 边界

这个 dashboard 是可视化读取器，不是新的物理实验，不会启动 HEPfit，不会更新 reference，不会宣称新物理。

## 中英文切换

首次打开默认显示中文；页面右上角可切换 **中文 / English**。浏览器允许本地存储时会记住选择，也可使用 `?lang=zh` 或 `?lang=en` 固定链接。

- 中文版：https://jorsonbei.github.io/wuxing-v32-v33-v34-reproduction/?lang=zh
- 英文版：https://jorsonbei.github.io/wuxing-v32-v33-v34-reproduction/?lang=en

中文界面覆盖导航、验证状态、时间线、层级说明、清单筛选与失败定位。原始实验 ID、公式、哈希、命令及数值结果保持不变；中文搜索与原始 ID 搜索均可使用。页面展示的是随包保存的历史证据，不会因切换语言而重新运行实验。

界面回归检查（Node.js，无额外依赖）：

```bash
node scripts/test_dashboard_i18n.js
```
