export interface Profile {
  name: string;
  role: string;
  laboratoryName: string;
  slogan: string;
  subtitle: string;
  description: string;
  bioDetail: string;
  skills: string[];
  contact: {
    wechatId: string;
    email: string;
    officialAccount: string;
    githubUrl: string;
    directions: string[];
  };
}

export const profile: Profile = {
  name: "林风",
  role: "技术研发与产品实践者 / 独立开发者",
  laboratoryName: "林风的个人产品实验室",
  slogan: "把经验变成产品，把能力变成收入。",
  subtitle: "这里记录我的创作、实践和成长，也展示我持续打磨的小说、课程、方法、工具与个人服务。",
  description: "我是一名技术研发和产品实践者，长期关注AI应用、邮件产品、个人成长、内容创作和能力产品化。",
  bioDetail: "我有技术研发、产品设计和团队管理经验，也一直在尝试个人创业。过去的工作让我积累了邮件产品、云通信、研发管理、AI工具应用和产品落地方面的经验。现在，我正在尝试把这些经验整理成小说、文章、课程、模板、工具和服务。这个网站既是我的作品展示站，也是我的个人成长记录。每完成一个真实项目，我都会尝试从中提炼出可以复用的方法，并将它变成一个更容易被别人使用的产品。",
  skills: [
    "产品设计",
    "技术研发",
    "AI工具应用",
    "邮件产品",
    "内容写作",
    "PPT内容梳理",
    "个人复盘",
    "能力产品化"
  ],
  contact: {
    wechatId: "linfeng_lab",
    email: "linfeng@productlab.net",
    officialAccount: "林风的产品实验室",
    githubUrl: "https://github.com/linfeng-dev",
    directions: [
      "PPT内容梳理与制作",
      "AI提示词和工作流设计",
      "产品原型设计",
      "邮件注册成功率优化",
      "邮件发送效果诊断",
      "个人知识库搭建",
      "内容结构与文章优化"
    ]
  }
};
