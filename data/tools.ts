export type Locale = "zh" | "en";

export type ToolStatus = "live" | "soon";

export type Tool = {
  code: string;
  name: Record<Locale, string>;
  summary: Record<Locale, string>;
  points: Record<Locale, string[]>;
  /** Hostname on learnlanguage.net. */
  host: string;
  /** Where the primary action opens. Omit while the host is not serving yet. */
  url?: string;
  repo: string;
  status: ToolStatus;
  accent: string;
};

/**
 * The navigation page renders this list.
 * To add a tool, append one entry and push. The card, host, and links come from here.
 */
export const tools: Tool[] = [
  {
    code: "FVA",
    name: { zh: "法语动词助手", en: "French Verb Assistant" },
    summary: {
      zh: "按 A1–B2 练习法语动词变位，复习间隔跟着遗忘曲线走。",
      en: "Practice French verb conjugation from A1 to B2. Review spacing follows a forgetting curve.",
    },
    points: {
      zh: ["372 个核心动词，带中英文释义", "全部、按语式或按时态练习", "错题本和按语态的进度"],
      en: ["372 core verbs, with Chinese and English glosses", "Practice all forms, or by mood and tense", "A mistake list and progress by tense"],
    },
    host: "fva.learnlanguage.net",
    url: "https://fva.learnlanguage.net",
    repo: "https://github.com/FuyinChe/FrenchVerbAssisstant",
    status: "live",
    accent: "#1f4e89",
  },
  {
    code: "CA",
    name: { zh: "粤语助手", en: "Cantonese Assistant" },
    summary: {
      zh: "把简体或繁体换成粤语书面说法，标粤拼，并排对照香港繁体、台湾繁体和简体。",
      en: "Turn simplified or traditional text into written Cantonese, with Jyutping and Hong Kong, Taiwan, and simplified scripts side by side.",
    },
    points: {
      zh: ["点字听读，点粤拼改多音字", "整句粤语、国语、普通话和英语朗读", "笔顺工作纸和日常短句"],
      en: ["Tap a character to hear it, or a syllable to fix a reading", "Read a sentence in Cantonese, Mandarin, or English", "Stroke worksheets and everyday phrases"],
    },
    host: "cantonese.learnlanguage.net",
    url: "https://cantonese.learnlanguage.net",
    repo: "https://github.com/FuyinChe/CantoneseAssisstant",
    status: "live",
    accent: "#9c3b2e",
  },
  {
    code: "FRA",
    name: { zh: "法语阅读助手", en: "French Reading Assistant" },
    summary: {
      zh: "在 PDF 上框选法语，识别文字、朗读，并用 AI 解释语法和词汇。网站入口还在准备。",
      en: "Select French on a PDF, recognize the text, hear it read aloud, and get an AI explanation. The website is not open yet.",
    },
    points: {
      zh: ["框选后做法语 OCR", "edge-tts 朗读", "语法、词汇解释和笔记"],
      en: ["French OCR on a selected region", "Read-aloud with edge-tts", "Grammar, vocabulary, and notes"],
    },
    host: "fra.learnlanguage.net",
    repo: "https://github.com/FuyinChe/FrenchReadingAssisstant-stirlingPDF",
    status: "soon",
    accent: "#2c6b4a",
  },
];
