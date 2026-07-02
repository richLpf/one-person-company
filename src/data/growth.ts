export interface GrowthRecord {
  id: string;
  date: string;
  title: string;
  description: string;
  tag: string;
}

export const growthRecords: GrowthRecord[] = [
  {
    id: "g1",
    date: "2026-07-02",
    title: "开始搭建个人产品展示站",
    description: "利用现代轻量架构，将过去散落在不同平台的商业小说、课程专栏、提效模板和顾问服务进行一站式整合，开启「个人产品实验室」的第一步。",
    tag: "实验室动态"
  },
  {
    id: "g2",
    date: "2026-06-30",
    title: "完善多 Agent 协同与 MCP 平台管理方案",
    description: "重新设计了内部的自动化流程，深入研究基于 Skill-centric 架构的 MCP (Model Context Protocol) 插件系统，为后续开发 AI 提效小工具做好底层知识沉淀。",
    tag: "技术探索"
  },
  {
    id: "g3",
    date: "2026-06-24",
    title: "重新梳理个人公众号与邮件周报的写作大纲",
    description: "砍掉泛泛的成长碎碎念，聚焦于「能力产品化」和「出海工具开发」两大主题。每一篇内容都以解决具体问题为导向，提升内容资产的沉淀价值。",
    tag: "内容创作"
  },
  {
    id: "g4",
    date: "2026-06-15",
    title: "邮件注册流程诊断标准 V1.0 发布",
    description: "梳理了过去三年优化邮件送达率的经验，形成了一份包含 40 多个关键指标的诊断检查清单，作为对外提供深度咨询的标准化评估工具。",
    tag: "方法论沉淀"
  }
];
