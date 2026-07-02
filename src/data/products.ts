export type ProductCategory =
  | "novel"
  | "course"
  | "tool"
  | "service";

export type ProductStatus =
  | "free"
  | "paid"
  | "serializing"
  | "developing"
  | "available";

export type ProductActionType =
  | "external"
  | "email"
  | "wechat"
  | "comingSoon";

export interface Product {
  id: string;
  title: string;
  category: ProductCategory;
  description: string;
  audience?: string;
  status: ProductStatus;
  statusText: string;
  price?: string;
  actionText: string;
  actionType: ProductActionType;
  actionUrl?: string;
  featured: boolean;
  updatedAt: string;
}

export const products: Product[] = [
  {
    id: "shuzi-dengtian",
    title: "《庶子登天记》",
    category: "novel",
    description: "一部以穿越、古代经营、家族权谋与军政成长为主线的架空历史小说。讲述现代产品经理穿越到大虞帝国，利用商业逻辑和现代协作方法，在世家大族中步步逆袭的故事。",
    audience: "历史小说爱好者、商业思维与经营小说读者",
    status: "serializing",
    statusText: "连载中",
    price: "免费试读",
    actionText: "开始阅读",
    actionType: "external",
    actionUrl: "https://www.qidian.com", // 示例外部阅读地址
    featured: true,
    updatedAt: "2026-06-28"
  },
  {
    id: "dayue-shangnv",
    title: "《大越商女传》",
    category: "novel",
    description: "讲述落魄商贾之女，在漕运封锁和盐铁官营的重压之下，利用特许经营、供应链重组与合伙人制，在古代打造跨国贸易商盟的传奇故事。",
    audience: "女性奋斗、商战与古代经营小说受众",
    status: "developing",
    statusText: "大纲设定中",
    price: "即将上线",
    actionText: "敬请期待",
    actionType: "comingSoon",
    featured: false,
    updatedAt: "2026-07-01"
  },
  {
    id: "fupan-rumen",
    title: "个人复盘入门课",
    category: "course",
    description: "摆脱「收藏从未停止，行动从未开始」的恶性循环。用 7 节课掌握一套可执行、闭环的个人复盘方法论，将每日经历转化为认知资产，实现高保真自我迭代。",
    audience: "感到迷茫、执行力弱、渴望建立稳定复盘习惯的创作者与职场人",
    status: "paid",
    statusText: "系列课程",
    price: "¥ 99",
    actionText: "立即订阅",
    actionType: "external",
    actionUrl: "https://xue.ruanyifeng.com", // 示例知识付费链接
    featured: false,
    updatedAt: "2026-05-15"
  },
  {
    id: "ai-rd-workflow",
    title: "AI 在研发工作中的实战应用",
    category: "course",
    description: "不讲大道理，只讲实操场景。如何利用 LLM 辅助产品原型设计、写出高质量的 PRD、构建自动化代码测试工作流，以及如何将 Agent 嵌入团队的日常开发中。",
    audience: "研发经理、技术主管、寻求效率突破的技术产品经理",
    status: "paid",
    statusText: "图文专栏",
    price: "¥ 199",
    actionText: "查看大纲",
    actionType: "external",
    actionUrl: "https://sspai.com", // 示例专栏地址
    featured: true,
    updatedAt: "2026-06-20"
  },
  {
    id: "obsidian-fupan",
    title: "Obsidian 每日复盘模块与工作流",
    category: "tool",
    description: "一套开箱即用的 Obsidian 个人数据库复盘模板。内含 Daily Note 模板、周度目标跟踪表、月度看板，配合 Dataview 插件，自动汇总你每天的时间分配与成长足迹。",
    audience: "Obsidian 重度用户、双链笔记爱好者、知识库管理者",
    status: "free",
    statusText: "免费资源",
    price: "免费开源",
    actionText: "免费领取",
    actionType: "external",
    actionUrl: "https://github.com", // 示例GitHub开源链接
    featured: true,
    updatedAt: "2026-06-10"
  },
  {
    id: "email-deliverability-checklist",
    title: "邮件送达率诊断与优化检查清单",
    category: "tool",
    description: "从 SPF/DKIM/DMARC 基础解析配置、IP信誉度维护、垃圾箱规避指南，到邮件正文敏感词过滤，一步步指导你排查产品邮件被拒收或进垃圾箱的问题，附带 15 个诊断工具推荐。",
    audience: "独立开发者、增长运营人员、SaaS 产品运维人员",
    status: "free",
    statusText: "免费资源",
    price: "免费领取",
    actionText: "直接下载",
    actionType: "external",
    actionUrl: "https://notion.so", // 示例 Notion 链接
    featured: false,
    updatedAt: "2026-06-25"
  },
  {
    id: "ppt-structuring-service",
    title: "PPT 内容逻辑梳理与定制制作",
    category: "service",
    description: "不只是做排版美化，更核心的是帮你梳理汇报逻辑。将你零散的材料、杂乱的数据和未成形的想法，重构为具备极强说服力的结构化 PPT，适合述职、融资或方案汇报。",
    audience: "面临重要晋升答辩、商业计划书融资或关键客户提案的职场人",
    status: "paid",
    statusText: "一对一服务",
    price: "¥ 1200 / 起",
    actionText: "预约咨询",
    actionType: "wechat",
    featured: true,
    updatedAt: "2026-07-02"
  },
  {
    id: "email-register-optimization",
    title: "邮件注册成功率优化深度诊断",
    category: "service",
    description: "针对海外 SaaS 或是国内出海产品，从邮箱合法性检测、多备用通道策略、验证码时效设计、注册链路无缝体验等方面进行全方位评测，提供 15 页定制化优化方案，直接提高注册转化率。",
    audience: "出海 SaaS 团队、跨国电商独立站创始人",
    status: "paid",
    statusText: "深度诊断服务",
    price: "¥ 4800 / 项目",
    actionText: "发信咨询",
    actionType: "email",
    featured: false,
    updatedAt: "2026-06-12"
  }
];
