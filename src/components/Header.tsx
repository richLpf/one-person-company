import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigationLinks, callToAction } from "../data/navigation";
import { profile } from "../data/profile";

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add light shadow and background shift when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (url: string, isAnchor?: boolean) => {
    setIsMobileMenuOpen(false);
    
    if (isAnchor) {
      if (currentPath !== "/") {
        // If not on homepage, navigate to homepage with the anchor
        onNavigate(url);
      } else {
        // If already on homepage, just scroll smoothly to the anchor
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
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="logo-btn"
            onClick={() => handleLinkClick("/")}
            className="group flex items-center gap-2.5 text-left cursor-pointer focus:outline-hidden"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-mono text-lg font-bold group-hover:scale-105 transition-transform duration-300 shadow-xs">
              LF
            </div>
            <div>
              <span className="block text-sm font-bold tracking-tight text-text-primary group-hover:text-primary transition-colors">
                {profile.name}
              </span>
              <span className="block text-[10px] font-mono text-text-secondary tracking-wider uppercase">
                Product Lab
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => {
              const isActive =
                link.url === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(link.url);
              return (
                <button
                  id={`nav-link-${link.label}`}
                  key={link.label}
                  onClick={() => handleLinkClick(link.url, link.isAnchor)}
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer relative py-1 focus:outline-hidden ${
                    isActive ? "text-primary font-semibold" : "text-text-secondary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Call to action on the right */}
          <div className="hidden md:flex items-center">
            <button
              id="cta-desktop-btn"
              onClick={() => handleLinkClick(callToAction.url, true)}
              className="flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-white shadow-xs hover:bg-primary-hover active:scale-98 transition-all cursor-pointer focus:outline-hidden"
            >
              {callToAction.label}
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-text-primary hover:bg-background transition-colors focus:outline-hidden"
            aria-label={isMobileMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden fixed inset-x-0 top-[65px] bg-white border-b border-border shadow-lg p-5 z-40 flex flex-col gap-4 fade-in"
        >
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider mb-1 px-2">
              导航菜单
            </span>
            {navigationLinks.map((link) => {
              const isActive =
                link.url === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(link.url);
              return (
                <button
                  id={`mobile-nav-link-${link.label}`}
                  key={link.label}
                  onClick={() => handleLinkClick(link.url, link.isAnchor)}
                  className={`text-left text-base font-medium py-2.5 px-3 rounded-lg transition-colors cursor-pointer focus:outline-hidden ${
                    isActive
                      ? "bg-background text-primary font-bold"
                      : "text-text-secondary hover:bg-background/50 hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="h-px bg-border my-1" />

          <button
            id="mobile-cta-btn"
            onClick={() => handleLinkClick(callToAction.url, true)}
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-hover transition-colors"
          >
            {callToAction.label}
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
