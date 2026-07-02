import SectionTitle from "./SectionTitle";

export default function FAQ() {
  const faqItems = [
    {
      q: "目前有哪些产品和作品？",
      a: "目前产品生态主要包括四大模块：商业小说（故事创作）、实战课程、效率模板工具、以及一对一诊断服务。部分产品现在已开源或上架（如 Obsidian 模板、PPT 梳理顾问服务等），部分规划中的产品也以“开发中”形式陈列以便收集第一手用户偏好。",
    },
    {
      q: "如何获取、阅读或购买这些产品？",
      a: "针对不同形式的产品，我们接入了最自然的落地链路：点击卡片后可直接跳转到外部的知名发布平台（如起点中文网、少数派、Notion 或 GitHub）进行阅读、下载或购买。暂时处于“开发中”或个性定制类的服务，可以直接点击微信扫码或发送邮件进行直达交流。",
    },
    {
      q: "能够承接第三方的定制开发或私教服务吗？",
      a: "完全可以。我们擅长针对产品原型设计、PPT逻辑重构、海外邮件注册转化、企业 AI 提示词和智能体工作流设计提供专项顾问服务。请在联系我们板块说明你的问题、具体约束及预期效果，我会在评估匹配度后在 24 小时内回复是否可以合作。",
    },
    {
      q: "网站内容和记录会持续更新吗？",
      a: "是的。这个站点是我个人的「长期主义实验田」。我的核心信条是“先完成，再完美”，后续我完成的每一个微型工具、沉淀的方法检查清单、新创作的小说章节都会第一时间陈列到我的产品橱窗中，成长记录也会同步保持高频更新。",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-border">
      <div className="mx-auto max-w-[800px] px-4 md:px-6">
        {/* Section Header */}
        <SectionTitle
          badge="FAQ"
          title="常见问题解答"
          subtitle="关于个人产品实验室的运行逻辑与合作细则"
          align="center"
        />

        {/* Semantic native details block */}
        <div className="flex flex-col border-t border-border mt-6">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="group py-1"
              id={`faq-item-${index}`}
            >
              <summary className="text-sm md:text-base font-semibold text-text-primary hover:text-primary transition-colors flex justify-between items-center pr-4">
                <span>{item.q}</span>
              </summary>
              <div className="pb-6 pr-4 text-xs md:text-sm text-text-secondary leading-relaxed fade-in">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
