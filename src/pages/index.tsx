import { useEffect } from "react";
import { BookOpen, Award, CheckSquare, Sparkles, MessageSquare, ArrowRight, User } from "lucide-react";
import { products } from "../data/products";
import { growthRecords } from "../data/growth";
import { profile } from "../data/profile";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";

interface IndexPageProps {
  onNavigate: (path: string) => void;
  onWechatClick: () => void;
}

export default function IndexPage({ onNavigate, onWechatClick }: IndexPageProps) {
  useEffect(() => {
    document.title = "个人产品实验室 ｜ 把经验变成产品，把能力变成收入";
    
    // Dynamic meta description setup
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "展示我的小说、课程、方法、工具和个人服务，记录个人能力产品化的实践过程。");
  }, []);

  // Get featured products (featured: true), up to 4 items
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  // Four categories of "What I am doing"
  const capabilities = [
    {
      category: "novel",
      title: "小说与故事内容",
      desc: "创作穿越、古代经营和人物成长方向的小说，也记录创作过程中的方法和思考。",
      examples: ["《庶子登天记》（穿越 · 古代 · 经营）", "《大越商女传》（商战 · 创业 · 权谋）"],
      color: "border-sky-200 hover:border-sky-400 hover:bg-sky-50/20",
      icon: BookOpen,
      iconBg: "bg-sky-50 text-sky-600",
    },
    {
      category: "course",
      title: "课程与知识沉淀",
      desc: "把工作和实践中验证过的方法，整理成可以系统学习的系列课程和图文专栏。",
      examples: ["个人复盘入门：高保真成长课", "AI 在研发工作中的实操应用"],
      color: "border-amber-200 hover:border-amber-400 hover:bg-amber-50/20",
      icon: Award,
      iconBg: "bg-amber-50 text-amber-600",
    },
    {
      category: "tool",
      title: "方法与效率工具",
      desc: "整理可以直接复制使用的提示词、模板、工作流、检查清单和小工具。",
      examples: ["Obsidian 每日复盘模块", "邮件送达率诊断优化检查清单"],
      color: "border-purple-200 hover:border-purple-400 hover:bg-purple-50/20",
      icon: CheckSquare,
      iconBg: "bg-purple-50 text-purple-600",
    },
    {
      category: "service",
      title: "个人顾问服务",
      desc: "针对具体、边界明确的商业和个人效率痛点，提供一对一深度咨询、设计与优化交付。",
      examples: ["PPT内容逻辑梳理与PPT重构", "出海邮件注册转化方案诊断"],
      color: "border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50/20",
      icon: MessageSquare,
      iconBg: "bg-emerald-50 text-emerald-600",
    },
  ];

  // Methodology steps
  const methodologySteps = [
    { num: "01", name: "发现问题", detail: "自身痛点或痛点调研" },
    { num: "02", name: "亲自解决", detail: "实战操作与方案验证" },
    { num: "03", name: "总结方法", detail: "去粗取精抽象逻辑" },
    { num: "04", name: "制作产品", detail: "规范化打磨落地载体" },
    { num: "05", name: "获得反馈", detail: "推向市场收集真实回音" },
    { num: "06", name: "持续改进", detail: "小步快跑高保真迭代" },
  ];

  const handleCapabilityClick = (category: string) => {
    onNavigate(`/works?category=${category}`);
  };

  return (
    <div id="home-page" className="fade-in">
      {/* 1. Hero Landing Section */}
      <Hero onNavigate={onNavigate} onWechatClick={onWechatClick} />

      {/* 2. Capabilities Section */}
      <section className="py-16 md:py-24 bg-white border-y border-border">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6">
          <SectionTitle
            badge="OUR FOCUS"
            title="我正在把这些能力变成产品"
            subtitle="从解决自己的问题开始，把经验整理成其他人也能使用的作品、方法和服务。"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.category}
                  className={`flex flex-col justify-between rounded-2xl bg-white border p-6 shadow-xs transition-all duration-300 group ${cap.color}`}
                >
                  <div className="flex flex-col gap-4">
                    {/* Header icon + Title */}
                    <div className="flex items-center gap-3.5">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl font-mono text-base font-bold shrink-0 ${cap.iconBg}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-text-primary">
                        {cap.title}
                      </h3>
                    </div>

                    <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                      {cap.desc}
                    </p>

                    {/* Example List */}
                    <div className="flex flex-col gap-2 mt-2 bg-background/50 rounded-xl p-4 border border-border/40">
                      <span className="text-[10px] font-mono text-text-secondary/60 uppercase tracking-wider block">
                        核心作品 / 服务示例
                      </span>
                      <ul className="flex flex-col gap-1.5">
                        {cap.examples.map((ex, i) => (
                          <li key={i} className="text-xs text-text-primary flex items-center gap-2 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    id={`btn-cap-${cap.category}`}
                    onClick={() => handleCapabilityClick(cap.category)}
                    className="flex items-center justify-center gap-1.5 mt-5 w-full rounded-xl bg-background border border-border py-2.5 px-4 text-xs font-semibold text-text-primary hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer"
                  >
                    <span>查看相关产品</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
            <SectionTitle
              badge="FEATURED"
              title="最近完成的产品"
              subtitle="精选已经上线并且口碑良好的核心服务、高频工具以及最新小说创作。"
            />
            <button
              id="view-all-products-btn"
              onClick={() => onNavigate("/works")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover group cursor-pointer shrink-0 pb-1.5 border-b border-transparent hover:border-primary transition-all self-start md:self-auto"
            >
              <span>查看全部产品库</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onWechatClick={onWechatClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Methodology Section */}
      <section className="py-16 md:py-24 bg-[#1c221e] text-white/95 border-y border-white/10 relative overflow-hidden">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6">
          <div className="flex flex-col gap-3 mb-12 max-w-2xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full self-start">
              METHODOLOGY
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              我的产品化方法
            </h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              如何将经验转化？我的原则是，把每一次有价值的解题，都通过标准流程抽象并交付出来。
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-3 mb-10 relative">
            {methodologySteps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col justify-between min-h-[110px] group hover:bg-white/10 hover:border-accent/40 transition-all duration-300"
              >
                <div>
                  <span className="block font-mono text-xs text-accent font-bold mb-1">
                    {step.num}
                  </span>
                  <span className="block text-sm font-bold text-white tracking-tight">
                    {step.name}
                  </span>
                </div>
                <span className="block text-[10px] text-white/50 leading-tight mt-2">
                  {step.detail}
                </span>

                {/* Arrow connectors for desktop */}
                {idx < 5 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10 text-white/20 font-mono text-sm group-hover:text-accent transition-colors">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="max-w-2xl text-xs md:text-sm text-white/60 leading-relaxed border-t border-white/10 pt-6">
            <p className="font-medium text-white/80 flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-accent" />
              这个网站也是我的长期成长实验。
            </p>
            我不会等所有内容都准备好后再发布，而是先完成一个可以使用的小产品，再根据真实反馈持续完善。
          </div>
        </div>
      </section>

      {/* 5. Growth Timeline Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-[800px] px-4 md:px-6">
          <SectionTitle
            badge="JOURNAL"
            title="最近在做什么"
            align="center"
            subtitle="这里记录我日常做事的轨迹、认知的迭代以及新产品的研发心路历程。"
          />

          <div className="relative border-l border-border pl-6 md:pl-8 ml-3 flex flex-col gap-8 md:gap-10 mt-8">
            {growthRecords.map((log) => (
              <div key={log.id} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-white group-hover:bg-primary transition-colors flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary group-hover:bg-white" />
                </div>

                {/* Log card */}
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-primary bg-primary/5 px-2.5 py-0.5 rounded-md">
                      {log.date}
                    </span>
                    <span className="text-[10px] font-mono text-accent font-semibold tracking-wider uppercase border border-accent/20 px-1.5 py-0.5 rounded">
                      {log.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-sm md:text-base font-bold text-text-primary group-hover:text-primary transition-colors mt-2">
                    {log.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed mt-1">
                    {log.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. About Me Section */}
      <section id="about" className="py-16 md:py-24 bg-background/50 border-t border-border">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Bio Column */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full self-start">
                ABOUT ME
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">
                关于我
              </h2>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed whitespace-pre-line font-medium p-4 bg-white rounded-2xl border border-border/80 shadow-xs">
                {profile.bioDetail}
              </p>
            </div>

            {/* Skills / Abilities tags column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h3 className="text-sm font-mono font-bold tracking-wider uppercase text-text-secondary/60 flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                我的核心专业能力
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-border text-xs font-semibold text-text-primary hover:border-primary/50 hover:text-primary transition-all hover:scale-102"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {skill}
                  </span>
                ))}
              </div>

              <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-xs text-text-secondary leading-relaxed">
                <strong className="text-primary font-semibold">合作愿景：</strong>
                我倾向于追求轻资产、高效能的产品化路线。旨在解决客户的高保真、点状难点（例如：优化转化漏斗，设计高阶Prompt，PPT架构赋能），用精细交付实现最高效能。
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <ContactSection onWechatClick={onWechatClick} />

      {/* 8. FAQ Section */}
      <FAQ />
    </div>
  );
}
