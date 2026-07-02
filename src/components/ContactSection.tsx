import { CheckCircle2, QrCode, Mail, MessageSquare, Github, Bookmark } from "lucide-react";
import { profile } from "../data/profile";

interface ContactSectionProps {
  onWechatClick: () => void;
}

export default function ContactSection({ onWechatClick }: ContactSectionProps) {
  const mailtoUrl = `mailto:${profile.contact.email}?subject=探讨合作咨询&body=林风，你好：%0A%0A我看到了你的个人产品实验室网站。我目前正在面临以下问题，希望能够探讨合作或获取你的建议：%0A%0A1. 场景/痛点描述：%0A2. 期望目标：%0A3. 预算或时间规划：%0A%0A我的联系方式：`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#eae8e1]/40 border-y border-border">
      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        
        {/* Section Title */}
        <div className="flex flex-col gap-3 mb-12 max-w-2xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full self-start">
            GET IN TOUCH
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">
            你正在解决什么问题？
          </h2>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            你可以把当前的问题和目标告诉我。如果恰好是我擅长的方向，我会告诉你可以怎么做，以及我能够提供什么帮助。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Collaboration Directions */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-border p-6 md:p-8 shadow-sm">
            <h3 className="text-base md:text-lg font-bold text-text-primary mb-5 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full" />
              我擅长协助的合作方向
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.contact.directions.map((direction, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-background transition-colors border border-transparent hover:border-border/50"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-xs md:text-sm font-medium text-text-primary">{direction}</span>
                    <span className="text-[10px] text-text-secondary mt-0.5">一对一顾问、量身定制</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-background border border-border/60 text-xs text-text-secondary leading-relaxed">
              <strong className="text-text-primary">合作方式：</strong>
              首个 15 分钟免费沟通诊断。确认能够解决后提供阶段性方案报价。长期合作采取顾问机制（按月/季收费），确保成果深度落地。
            </div>
          </div>

          {/* Right Side: QR Scan & Contact Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Interactive QR Code Display Card */}
            <div
              onClick={onWechatClick}
              className="rounded-2xl bg-white border border-border p-5 shadow-sm text-center flex flex-col items-center cursor-pointer group hover:border-primary/50 hover:shadow-md transition-all duration-300"
            >
              <div className="relative w-36 h-36 bg-background p-2.5 rounded-xl border border-border flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <svg
                  className="w-full h-full text-text-secondary group-hover:text-primary transition-colors"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer corner marks */}
                  <path d="M5 5h14v14H5V5zm4 4v6h6V9H9zM77 5h18v18H77V5zm4 4v10h10V9H81zM5 77h18v18H5V77zm4 4v10h10V81H9z" />
                  {/* Dotted structure */}
                  <rect x="30" y="10" width="6" height="6" />
                  <rect x="42" y="20" width="6" height="6" />
                  <rect x="54" y="30" width="6" height="6" />
                  <rect x="65" y="15" width="6" height="6" />
                  <rect x="15" y="30" width="6" height="6" />
                  <rect x="35" y="45" width="6" height="6" />
                  <rect x="45" y="55" width="6" height="6" />
                  <rect x="10" y="50" width="6" height="6" />
                  <rect x="60" y="65" width="6" height="6" />
                  <rect x="75" y="45" width="6" height="6" />
                  {/* WeChat core */}
                  <circle cx="50" cy="50" r="10" fill="#ffffff" />
                  <circle cx="50" cy="50" r="8" fill="currentColor" />
                </svg>
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                  <span className="bg-primary text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <QrCode className="w-3 h-3" /> 点击放大
                  </span>
                </div>
              </div>

              <span className="block text-sm font-bold text-text-primary">点击扫描或添加微信号</span>
              <span className="block text-xs font-mono text-primary font-semibold mt-1">
                {profile.contact.wechatId}
              </span>
              <span className="block text-[10px] text-text-secondary mt-1.5 leading-relaxed">
                扫码一键添加，请备注“姓名-合作意向”
              </span>
            </div>

            {/* Direct Channel Buttons & Social */}
            <div className="rounded-2xl bg-white border border-border p-5 shadow-sm flex flex-col gap-4">
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-text-secondary/60">
                其他联系通路
              </h4>

              <div className="flex flex-col gap-2.5">
                {/* WeChat trigger button */}
                <button
                  id="contact-wechat-btn"
                  onClick={onWechatClick}
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold py-3 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>添加微信好友</span>
                </button>

                {/* Email link */}
                <a
                  id="contact-email-btn"
                  href={mailtoUrl}
                  className="flex items-center justify-center gap-2 rounded-xl border border-border bg-white hover:bg-background text-text-primary text-sm font-semibold py-3 transition-colors text-center"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span>给我发送邮件</span>
                </a>
              </div>

              {/* Extra profiles */}
              <div className="flex items-center justify-around border-t border-background pt-4 mt-1 text-xs text-text-secondary">
                <a
                  id="contact-github-link"
                  href={profile.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-border">|</span>
                <div className="flex items-center gap-1.5">
                  <Bookmark className="w-4 h-4 text-accent" />
                  <span>公众号: <strong className="text-text-primary">{profile.contact.officialAccount}</strong></span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
