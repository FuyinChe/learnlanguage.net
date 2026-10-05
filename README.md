# LearnLanguage.net

LearnLanguage 是法语与粤语学习工具的入口。各工具独立部署在 `learnlanguage.net` 的二级域名上，本站说明它们的用途，并提供网站与仓库链接。

LearnLanguage is the entry point for these French and Cantonese study tools. Each tool is deployed on its own subdomain. This site states what it is for and links to the site and repository.

## 工具

| 代号 | 名称 | 用途 | 状态 | 网站 | 仓库 |
| --- | --- | --- | --- | --- | --- |
| FVA | 法语动词助手<br>French Verb Assistant | 按 A1–B2 记住法语动词变位，复习间隔跟随遗忘曲线 | 已开放 | [fva.learnlanguage.net](https://fva.learnlanguage.net) | [FrenchVerbAssisstant](https://github.com/FuyinChe/FrenchVerbAssisstant) |
| FRA | 法语阅读助手<br>French Reading Assistant | 在阅读材料上框选文字，识别、朗读，并查看语法与词汇说明 | 筹备中 | fra.learnlanguage.net | [FrenchReadingAssisstant-stirlingPDF](https://github.com/FuyinChe/FrenchReadingAssisstant-stirlingPDF) |
| CA | 粤语助手<br>Cantonese Assistant | 把句子写成粤语书面语，标注粤拼，并对照香港繁体、台湾繁体与简体 | 已开放 | [cantonese.learnlanguage.net](https://cantonese.learnlanguage.net) | [CantoneseAssisstant](https://github.com/FuyinChe/CantoneseAssisstant) |

粤语助手的主机名是 `cantonese.learnlanguage.net`。法语阅读助手的域名尚未提供服务，页面上的入口指向仓库。

## 维护

导航页由 [`data/tools.ts`](data/tools.ts) 渲染。新增工具时在该文件追加一条记录并推送，无需改动页面布局。

记录包含代号、中英文名称、用途、要点、主机名、仓库、状态和强调色。站点已可访问时填写 `url`，并将 `status` 设为 `"live"`。域名尚未提供服务时省略 `url`，并将 `status` 设为 `"soon"`。

## 本地运行

需要 Node.js 20 或更高版本。

```bash
npm install
npm run dev
```

开发地址为 <http://localhost:3000>。生产构建使用 `npm run build`。

## 版权

© 2026 LearnLanguage
