import { navigationLinks } from "../data/navigation";
import { profile } from "../data/profile";

interface FooterProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Footer({ currentPath, onNavigate }: FooterProps) {
  const handleLinkClick = (url: string, isAnchor?: boolean) => {
    if (isAnchor) {
      if (currentPath !== "/") {
        onNavigate(url);
      } else {
        const elementId = url.split("#")[1];
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      onNavigate(url);
    }
  };

  return (
    <footer id="main-footer" className="bg-[#1c221e] text-white/90 border-t border-white/10 py-12 md:py-16">
      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-10">
          {/* Brand Intro Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-mono text-base font-bold">
                LF
              </div>
              <div>
                <span className="block text-sm font-bold tracking-tight text-white">
                  {profile.laboratoryName}
                </span>
                <span className="block text-[9px] font-mono text-white/50 tracking-wider uppercase">
                  Personal Product Laboratory
                </span>
              </div>
            </div>
            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              {profile.subtitle}
            </p>
            <p className="text-xs font-serif italic text-accent font-medium mt-1">
              “{profile.slogan}”
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white/40">
              快速导航
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.url, link.isAnchor)}
                    className="text-xs text-white/70 hover:text-white transition-colors cursor-pointer text-left focus:outline-hidden"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Slogan and Experiment Notice Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white/40">
              长期主义实验
            </h4>
            <p className="text-xs text-white/60 leading-relaxed">
              这是一个真实的个人品牌和产品化迭代橱窗。我不等完美，而是持续打磨，在实践中发现问题、亲自解决，进而转化为服务与工具。
            </p>
            <div className="text-[10px] font-mono text-white/30 mt-1">
              当前系统时间: 2026-07-02 UTC
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 w-full mb-8" />

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/40 font-mono">
          <div>
            © 2026 {profile.name}的个人产品实验室. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Powered by Astro Architecture</span>
            <span className="text-white/20">|</span>
            <span>Design with Warm Forest Aesthetic</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
