import React from "react";
import { ArrowUpRight, Lock, BookOpen, Download, UserCheck, Mail, QrCode } from "lucide-react";
import { Product, ProductCategory } from "../data/products";

interface ProductCardProps {
  product: Product;
  onWechatClick: () => void;
  key?: string | number;
}

export default function ProductCard({ product, onWechatClick }: ProductCardProps) {
  // Category badge translation and coloring
  const getCategoryMeta = (category: ProductCategory) => {
    switch (category) {
      case "novel":
        return { label: "故事小说", color: "bg-[#e0f2fe] text-[#0369a1]", icon: BookOpen };
      case "course":
        return { label: "实战课程", color: "bg-[#fef3c7] text-[#b45309]", icon: Lock };
      case "tool":
        return { label: "提效工具", color: "bg-[#f3e8ff] text-[#6b21a8]", icon: Download };
      case "service":
        return { label: "顾问服务", color: "bg-[#d1fae5] text-[#065f46]", icon: UserCheck };
    }
  };

  const categoryMeta = getCategoryMeta(product.category);
  const CategoryIcon = categoryMeta.icon;

  // Render main action button according to actionType
  const renderActionButton = () => {
    const commonClass =
      "flex items-center justify-center gap-1.5 w-full rounded-xl py-3 px-4 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer focus:outline-hidden ";

    if (product.actionType === "comingSoon") {
      return (
        <button
          id={`btn-coming-${product.id}`}
          disabled
          className={`${commonClass} bg-background text-text-secondary/60 border border-border cursor-not-allowed`}
        >
          <span>即将上线</span>
        </button>
      );
    }

    if (product.actionType === "wechat") {
      return (
        <button
          id={`btn-wechat-${product.id}`}
          onClick={onWechatClick}
          className={`${commonClass} bg-primary text-white hover:bg-primary-hover active:scale-98 shadow-xs`}
        >
          <span>{product.actionText}</span>
          <QrCode className="w-3.5 h-3.5 opacity-80" />
        </button>
      );
    }

    if (product.actionType === "email") {
      const mailtoUrl = `mailto:linfeng@productlab.net?subject=咨询服务: ${product.title}&body=林风，你好：%0A%0A我对你的“${product.title}”服务很感兴趣。我的基本情况和面临的问题是：%0A%0A期待你的回复！`;
      return (
        <a
          id={`btn-email-${product.id}`}
          href={mailtoUrl}
          className={`${commonClass} bg-primary text-white hover:bg-primary-hover active:scale-98 shadow-xs text-center`}
        >
          <span>{product.actionText}</span>
          <Mail className="w-3.5 h-3.5 opacity-80" />
        </a>
      );
    }

    // Default to external link
    return (
      <a
        id={`btn-external-${product.id}`}
        href={product.actionUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={`${commonClass} bg-primary text-white hover:bg-primary-hover active:scale-98 shadow-xs text-center`}
      >
        <span>{product.actionText}</span>
        <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
      </a>
    );
  };

  return (
    <div
      id={`product-card-${product.id}`}
      className="flex flex-col h-full rounded-2xl bg-white border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 overflow-hidden group"
    >
      {/* Top Graphic Bar or Indicator Area */}
      <div className="h-2 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />

      <div className="p-5 md:p-6 flex flex-col flex-grow justify-between gap-5">
        {/* Upper content */}
        <div className="flex flex-col gap-3">
          {/* Category & Status header */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium font-mono ${categoryMeta.color}`}
            >
              <CategoryIcon className="w-3 h-3" />
              {categoryMeta.label}
            </span>

            <span className="text-[11px] font-mono font-medium text-text-secondary bg-background px-2 py-0.5 rounded border border-border/60">
              {product.statusText}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="text-base md:text-lg font-bold text-text-primary tracking-tight group-hover:text-primary transition-colors">
            {product.title}
          </h3>

          {/* Product Description */}
          <p className="text-xs md:text-sm text-text-secondary leading-relaxed line-clamp-3">
            {product.description}
          </p>

          {/* Optional fields: Audience, Updated time */}
          {product.audience && (
            <div className="mt-1 pt-3 border-t border-background text-[11px] text-text-secondary/80 leading-relaxed">
              <strong className="text-text-primary font-medium">适合人群:</strong> {product.audience}
            </div>
          )}
        </div>

        {/* Bottom Price & Call To Action Bar */}
        <div className="flex flex-col gap-3.5 pt-3 border-t border-background">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-mono text-text-secondary/60 uppercase tracking-wider">
              状态 / 价格
            </span>
            <span className={`text-sm font-mono font-bold ${product.price?.includes("¥") ? "text-accent" : "text-primary"}`}>
              {product.price || "免费"}
            </span>
          </div>

          {renderActionButton()}
        </div>
      </div>
    </div>
  );
}
