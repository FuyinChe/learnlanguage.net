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
      zh: "用来记住 A1–B2 的法语动词变位。复习间隔跟着遗忘曲线走，答错过的会再出现。",
      en: "For remembering French verb forms from A1 to B2. Reviews follow a forgetting curve, and missed answers come back.",
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
    code: "FRA",
    name: { zh: "法语阅读助手", en: "French Reading Assistant" },
    summary: {
      zh: "用来读法语材料。在页面上框选一段，识别文字、听朗读，并查看语法和词汇说明。",
      en: "For reading French. Select a passage on the page to recognize the text, hear it, and see notes on grammar and vocabulary.",
    },
    points: {
      zh: ["框选后做法语 OCR", "edge-tts 朗读", "语法、词汇解释和笔记"],
      en: ["French OCR on a selected region", "Read-aloud with edge-tts", "Grammar, vocabulary, and notes"],
    },
    host: "fra.learnlanguage.net",
    url: "https://fra.learnlanguage.net",
    repo: "https://github.com/FuyinChe/FrenchReadingAssisstant-stirlingPDF",
    status: "live",
    accent: "#2c6b4a",
  },
  {
    code: "CA",
    name: { zh: "粤语助手", en: "Cantonese Assistant" },
    summary: {
      zh: "用来把句子写成粤语。简体或繁体都会换成书面说法，标上粤拼，并对照香港繁体、台湾繁体和简体。",
      en: "For writing a sentence in Cantonese. Simplified or traditional input becomes written Cantonese, with Jyutping and Hong Kong, Taiwan, and simplified scripts side by side.",
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
];
