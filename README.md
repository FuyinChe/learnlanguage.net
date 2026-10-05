# LearnLanguage.net

语言学习工具的导航站。FVA、CA、FRA 各自使用 `learnlanguage.net` 的二级域名，以后的工具也从这里进入。

| 代号 | 工具 | 地址 |
| --- | --- | --- |
| FVA | 法语动词助手 | https://fva.learnlanguage.net |
| CA | 粤语助手 | https://cantonese.learnlanguage.net |
| FRA | 法语阅读助手 | `fra.learnlanguage.net`（尚未开放，仓库已在 GitHub） |

粤语助手现在的主机名是 `cantonese`，不是 `ca`。法语阅读助手的网站还没接上域名，卡片会先连到仓库。

## 加上一个新工具

编辑 [`data/tools.ts`](data/tools.ts)，追加一条，然后推送。页面按这份清单渲染，不用改布局。

```ts
{
  code: "NEW",
  name: { zh: "中文名", en: "English name" },
  summary: { zh: "一句说明。", en: "One sentence." },
  points: { zh: ["要点"], en: ["Point"] },
  host: "new.learnlanguage.net",
  url: "https://new.learnlanguage.net",
  repo: "https://github.com/FuyinChe/example",
  status: "live",
  accent: "#1c1915",
}
```

地址还不能打开时，不要填 `url`，并把 `status` 设为 `"soon"`。

## 本地

```bash
npm install
npm run dev
```

打开 http://localhost:3000 。
