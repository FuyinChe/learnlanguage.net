"use client";

import { useEffect, useState } from "react";
import { tools, type Locale } from "@/data/tools";

const copy = {
  zh: {
    eyebrow: "LearnLanguage.net",
    title: "学法语，也学粤语",
    lede: "用来记住法语动词怎么变，读材料时听一遍、看懂一句，以及把句子写成粤语并听出发音。",
    live: "已开放",
    soon: "筹备中",
    open: "打开",
    home: "主站",
    copyright: "© 2026 LearnLanguage",
  },
  en: {
    eyebrow: "LearnLanguage.net",
    title: "French and Cantonese",
    lede: "For remembering how French verbs change, hearing and understanding a passage while reading, and rewriting a sentence in Cantonese so it can be heard.",
    live: "Open",
    soon: "In preparation",
    open: "Open",
    home: "Main site",
    copyright: "© 2026 LearnLanguage",
  },
} as const;

const siteUrl = "https://learnlanguage.net";
const siteRepo = "https://github.com/FuyinChe/learnlanguage.net";

function GitHubMark() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.7 7.7 0 0 1 8 3.47c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  );
}

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
          const href = tool.url ?? `https://${tool.host}`;
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
                <p className="host">
                  <a href={href}>{tool.host}</a>
                </p>
                <div className="actions">
                  {open ? (
                    <a className="primary" href={tool.url}>
                      {text.open}
                    </a>
                  ) : null}
                  <a className="github" href={tool.repo} aria-label="GitHub">
                    <GitHubMark />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <footer>
        <nav className="footer-links" aria-label={locale === "zh" ? "页面" : "Pages"}>
          <a href={siteUrl}>{text.home}</a>
          {tools.map((tool) => (
            <a key={tool.code} href={tool.url ?? `https://${tool.host}`}>
              {tool.name[locale]}
            </a>
          ))}
          <a className="footer-github" href={siteRepo} aria-label="GitHub">
            <GitHubMark />
          </a>
        </nav>
        <span className="copyright">{text.copyright}</span>
      </footer>
    </div>
  );
}
