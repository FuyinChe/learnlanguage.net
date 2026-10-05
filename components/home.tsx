"use client";

import { useEffect, useState } from "react";
import { tools, type Locale } from "@/data/tools";

const copy = {
  zh: {
    eyebrow: "LearnLanguage.net",
    title: "语言工具",
    lede: "每个工具住在自己的二级域名上。从这里进去。以后加上的页面也排在同一份清单里。",
    live: "已开放",
    soon: "筹备中",
    open: "打开",
    repo: "仓库",
    note: "要加一个新工具，在 data/tools.ts 里追加一条，再推送到仓库。",
    footer: "个人学习项目",
  },
  en: {
    eyebrow: "LearnLanguage.net",
    title: "Language tools",
    lede: "Each tool lives on its own subdomain. Start here. New pages join the same list.",
    live: "Open",
    soon: "In preparation",
    open: "Open",
    repo: "Repository",
    note: "To add a tool, append an entry in data/tools.ts and push.",
    footer: "A personal learning project",
  },
} as const;

const storageKey = "learnlanguage-locale";

export function Home() {
  const [locale, setLocale] = useState<Locale>("zh");

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === "en" || saved === "zh") setLocale(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    window.localStorage.setItem(storageKey, locale);
  }, [locale]);

  const text = copy[locale];

  return (
    <div className="page">
      <header className="top">
        <a className="brand" href="/">
          <span className="brand-mark">LearnLanguage</span>
          <span className="brand-host">.net</span>
        </a>
        <div className="lang" role="group" aria-label={locale === "zh" ? "语言" : "Language"}>
          <button type="button" aria-pressed={locale === "zh"} onClick={() => setLocale("zh")}>
            中文
          </button>
          <button type="button" aria-pressed={locale === "en"} onClick={() => setLocale("en")}>
            EN
          </button>
        </div>
      </header>

      <section className="hero">
        <p className="eyebrow">{text.eyebrow}</p>
        <h1>{text.title}</h1>
        <p className="lede">{text.lede}</p>
      </section>

      <section className="grid" aria-label={text.title}>
        {tools.map((tool) => {
          const open = tool.status === "live" && tool.url;
          return (
            <article className="card" key={tool.code}>
              <div className="card-head">
                <span className="code" style={{ background: tool.accent }}>
                  {tool.code}
                </span>
                <span className="status">{tool.status === "live" ? text.live : text.soon}</span>
              </div>
              <h2>{tool.name.zh}</h2>
              <p className="en-name">{tool.name.en}</p>
              <p className="summary">{tool.summary[locale]}</p>
              <ul className="points">
                {tool.points[locale].map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="card-foot">
                <p className="host">{tool.host}</p>
                <div className="actions">
                  {open ? (
                    <a className="primary" href={tool.url}>
                      {text.open}
                    </a>
                  ) : null}
                  <a className={open ? "secondary" : "primary"} href={tool.repo}>
                    {text.repo}
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <p className="note">{text.note}</p>

      <footer>
        <span>{text.footer}</span>
        <a href="https://github.com/FuyinChe/learnlanguage.net">GitHub</a>
      </footer>
    </div>
  );
}
