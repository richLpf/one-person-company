import { useEffect } from "react";
import { X, Copy, Check } from "lucide-react";
import { useState } from "react";

interface WechatModalProps {
  isOpen: boolean;
  onClose: () => void;
  wechatId: string;
}

export default function WechatModal({ isOpen, onClose, wechatId }: WechatModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(wechatId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy WeChat ID:", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="wechat-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 fade-in"
      onClick={(e) => {
        if (e.target instanceof HTMLElement && e.target.id === "wechat-modal-overlay") {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-border text-center flex flex-col items-center">
        {/* Close Button */}
        <button
          id="close-wechat-modal"
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-text-primary p-1.5 rounded-full hover:bg-background transition-colors"
          aria-label="关闭弹窗"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-[#e8f5e9] text-[#2e7d32] text-xs font-mono rounded-full font-medium mb-2">
            微信扫一扫
          </span>
          <h3 className="text-lg font-bold text-text-primary">添加一人公司实践的微信</h3>
          <p className="text-xs text-text-secondary mt-1">
            探讨合作机会，获取最新项目进展或领取工具模板
          </p>
        </div>

        {/* Pure SVG Custom QR Code Placeholder */}
        <div className="relative w-48 h-48 bg-background p-3 rounded-xl border border-border flex items-center justify-center mb-4 select-none">
          {/* Inner QR Code Mock Visual */}
          <svg
            className="w-full h-full text-primary"
            viewBox="0 0 100 100"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Position markers (top left, top right, bottom left) */}
            <path d="M5 5h18v18H5V5zm4 4v10h10V9H9z" />
            <rect x="11" y="11" width="6" height="6" />
            
            <path d="M77 5h18v18H77V5zm4 4v10h10V9H81z" />
            <rect x="83" y="11" width="6" height="6" />
            
            <path d="M5 77h18v18H5V77zm4 4v10h10V81H9z" />
            <rect x="11" y="83" width="6" height="6" />

            {/* Simulated QR Code pixels */}
            <path d="M30 5h6v6h-6zm12 0h6v6h-6zm18 0h6v6h-6zm6 6h6v6h-6zm6 6h6v6h-6zM30 17h6v6h-6zm12 0h6v6h-6zm12 0h6v6h-6zm12 12h6v6h-6zm12 0h6v6h-6z" />
            <path d="M5 30h6v6H5zm12 0h6v6h-6zm12 0h6v6h-6zm12 0h6v6h-6zm12 0h6v6h-6zm18 0h6v6h-6zm12 0h6v6h-6zm6 6h6v6h-6zm-36 6h6v6h-6zm12 0h6v6h-6zm12 0h6v6h-6z" />
            <path d="M30 48h6v6h-6zm12 0h6v6h-6zm18 0h6v6h-6zm18 0h6v6h-6zm12 6h6v6h-6zm-48 6h6v6h-6zm12 0h6v6h-6zm18 0h6v6h-6zm12 0h6v6h-6z" />
            <path d="M5 65h6v6H5zm12 0h6v6h-6zm18 0h6v6h-6zm12 0h6v6h-6zm12 0h6v6h-6zm18 0h6v6h-6zm-42 6h6v6h-6zm12 0h6v6h-6zm12 0h6v6h-6zm18 0h6v6h-6z" />
            <path d="M30 77h6v6h-6zm12 0h6v6h-6zm12 0h6v6h-6zm12 0h6v6h-6zm12 6h6v6h-6zm6 6h6v6h-6z" />

            {/* WeChat bubble center logo */}
            <rect x="42" y="42" width="16" height="16" rx="3" fill="#ffffff" stroke="currentColor" strokeWidth="1" />
            <path d="M47 48c0-1.8 1.8-3.2 4-3.2s4 1.4 4 3.2c0 1.8-1.8 3.2-4 3.2-.4 0-.8 0-1.2-.2l-1.3.7.3-1.1c-1.1-.6-1.8-1.5-1.8-2.6zm7.2 4.2c1.7 0 3-.1 3-1.8s-1.3-1.8-3-1.8c-1.7 0-3 .1-3 1.8s1.3 1.8 3 1.8zm-5.7-3.4c.5 0 .8-.3.8-.8s-.3-.8-.8-.8-.8.3-.8.8.3.8.8.8zm3 0c.5 0 .8-.3.8-.8s-.3-.8-.8-.8-.8.3-.8.8.3.8.8.8z" fill="currentColor" transform="scale(0.8) translate(12, 12)" />
          </svg>
          {/* Subtle scanning corners */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
        </div>

        {/* WeChat ID copy bar */}
        <div className="w-full bg-background rounded-lg border border-border p-2.5 flex items-center justify-between gap-2 mb-2">
          <div className="text-left">
            <span className="block text-[10px] text-text-secondary font-mono uppercase tracking-wider">微信号</span>
            <span className="text-sm font-mono font-semibold text-text-primary">{wechatId}</span>
          </div>
          <button
            id="copy-wechat-id-btn"
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              copied
                ? "bg-[#e8f5e9] text-[#2e7d32]"
                : "bg-primary text-white hover:bg-primary-hover active:scale-95"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                已复制
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                复制ID
              </>
            )}
          </button>
        </div>
        <span className="text-[10px] text-text-secondary">
          若无法成功扫码，可复制微信号手动添加
        </span>
      </div>
    </div>
  );
}
