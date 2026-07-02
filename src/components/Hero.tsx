import { ArrowRight, MessageSquare, Book, Laptop, Layers, Compass } from "lucide-react";
import { profile } from "../data/profile";

interface HeroProps {
  onNavigate: (path: string) => void;
  onWechatClick: () => void;
}

export default function Hero({ onNavigate, onWechatClick }: HeroProps) {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-accent/5 rounded-full blur-2xl -z-10" />

      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5 md:gap-6">
            
            {/* Laboratory Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {profile.laboratoryName}
            </span>

            {/* Slogan */}
            <h1 className="text-3xl sm:text-4xl md:text-[2.65rem] font-bold leading-tight tracking-tight text-text-primary">
              把经验变成<span className="text-primary border-b-4 border-accent/20">产品</span>，<br />
              把能力变成<span className="text-accent border-b-4 border-primary/20">收入</span>。
            </h1>

            {/* Subtitle / Pitch */}
            <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-xl">
              {profile.subtitle}
            </p>

            {/* Supplementary Intro */}
            <p className="text-xs md:text-sm text-text-secondary/80 border-l-2 border-border pl-4 max-w-lg italic">
              {profile.description}
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap gap-3.5 w-full sm:w-auto mt-2">
              <button
                id="hero-btn-products"
                onClick={() => onNavigate("/works")}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-primary-hover active:scale-98 transition-all cursor-pointer w-full sm:w-auto"
              >
                <span>查看我的产品</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                id="hero-btn-contact"
                onClick={handleContactClick}
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-text-primary hover:bg-background active:scale-98 transition-all cursor-pointer w-full sm:w-auto"
              >
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>找我合作</span>
              </button>
            </div>
          </div>

          {/* Right Visual Workbench Panel */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl bg-white border border-border p-6 shadow-md relative group hover:shadow-lg transition-all duration-300">
              
              {/* Card Window Title Bar */}
              <div className="flex items-center justify-between border-b border-background pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-xs font-mono text-text-secondary/70 ml-2">linfeng-workspace.sh</span>
                </div>
                <Compass className="w-4 h-4 text-primary/60 animate-spin-slow" />
              </div>

              {/* Workbench Tasks */}
              <div className="flex flex-col gap-4.5">
                
                {/* Writing Task */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background border border-border/40 hover:border-primary/20 transition-all">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e0f2fe] text-[#0369a1] shrink-0">
                    <Book className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-text-secondary/70 uppercase">正在写</span>
                    <span className="text-xs font-bold text-text-primary">穿越古代经营小说《庶子登天记》</span>
                    <span className="block text-[10px] text-text-secondary mt-0.5">连载状态，以商业思维写故事。</span>
                  </div>
                </div>

                {/* Doing Task */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background border border-border/40 hover:border-accent/20 transition-all">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fef3c7] text-[#b45309] shrink-0">
                    <Layers className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-text-secondary/70 uppercase">正在做</span>
                    <span className="text-xs font-bold text-text-primary">个人能力产品化与变现实验</span>
                    <span className="block text-[10px] text-text-secondary mt-0.5">梳理独立开发者闭环商业闭环。</span>
                  </div>
                </div>

                {/* Researching Task */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background border border-border/40 hover:border-primary/20 transition-all">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f3e8ff] text-[#6b21a8] shrink-0">
                    <Laptop className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-text-secondary/70 uppercase">正在研究</span>
                    <span className="text-xs font-bold text-text-primary">AI Agent 与 MCP 实战场景落地</span>
                    <span className="block text-[10px] text-text-secondary mt-0.5">如何用 AI 辅助提效与小工具研发。</span>
                  </div>
                </div>
              </div>

              {/* Bottom tag list */}
              <div className="mt-5 pt-4 border-t border-background flex items-center justify-between flex-wrap gap-2 text-[10px] font-mono text-text-secondary/60">
                <span>位置: 杭州 · 独立空间</span>
                <span className="text-primary font-bold">● 提供邮件、PPT与原型顾问服务</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
