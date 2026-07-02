import { useState, useEffect } from "react";
import { ListFilter, BookOpen, Layers, Award, Hammer, HelpCircle } from "lucide-react";
import { products, ProductCategory } from "../data/products";
import ProductCard from "../components/ProductCard";

interface WorksPageProps {
  onWechatClick: () => void;
}

export default function WorksPage({ onWechatClick }: WorksPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Dynamic SEO Setup
  useEffect(() => {
    document.title = "我的作品与产品 ｜ 个人产品实验室";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "查看我的小说、课程、模板工具和个人服务。");
  }, []);

  // Filter categories array
  const categories = [
    { id: "all", label: "全部产品", icon: ListFilter },
    { id: "novel", label: "故事小说", icon: BookOpen },
    { id: "course", label: "实战课程", icon: Award },
    { id: "tool", label: "提效工具", icon: Hammer },
    { id: "service", label: "顾问服务", icon: Layers },
  ];

  // Parse URL query parameter 'category' on mount and when URL changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category");
    if (categoryParam && ["novel", "course", "tool", "service"].includes(categoryParam)) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory("all");
    }
  }, [window.location.search]);

  // Handle manual category change
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Dynamically update URL without refreshing the page
    const newUrl = categoryId === "all" ? "/works" : `/works?category=${categoryId}`;
    window.history.pushState({}, "", newUrl);
  };

  // Filter products based on activeCategory
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div id="works-page" className="pt-24 pb-16 md:pt-32 md:pb-24 fade-in">
      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        
        {/* Page Header */}
        <div className="flex flex-col gap-3.5 mb-10 md:mb-14 max-w-3xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full self-start">
            PRODUCT CATALOGUE
          </span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            我的作品与产品库
          </h1>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            这里集中展示我已经完成、正在创作和准备开发的作品、课程、工具与服务。秉承长期主义，先发布可用版本，并在后续真实反馈中持续打磨迭代。
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-col gap-4 mb-8">
          <span className="text-[10px] font-mono text-text-secondary/60 uppercase tracking-wider font-semibold">
            按产品分类筛选
          </span>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  data-category={cat.id}
                  id={`filter-btn-${cat.id}`}
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 focus:outline-hidden ${
                    isActive
                      ? "bg-primary text-white shadow-sm border border-primary scale-102"
                      : "bg-white text-text-secondary border border-border hover:border-primary/40 hover:text-text-primary"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-300">
            {filteredProducts.map((product) => (
              <div key={product.id} className="fade-in">
                <ProductCard
                  product={product}
                  onWechatClick={onWechatClick}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-border rounded-2xl bg-white max-w-md mx-auto">
            <HelpCircle className="w-10 h-10 text-text-secondary/40 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-text-primary">未找到该分类的产品</h3>
            <p className="text-xs text-text-secondary mt-1">此分类的产品正在紧锣密鼓规划中，敬请期待！</p>
            <button
              onClick={() => handleCategoryChange("all")}
              className="mt-4 inline-flex items-center gap-1 bg-primary text-white rounded-lg px-4 py-2 text-xs font-semibold hover:bg-primary-hover transition-colors"
            >
              返回全部产品
            </button>
          </div>
        )}

        {/* Footnote statement */}
        <div className="mt-16 text-center border-t border-border pt-10 text-xs text-text-secondary/60 leading-relaxed max-w-lg mx-auto">
          部分尚未发布的产品以“大纲设定中”或“即将上线”形式陈列。如对这些开发中的方向感兴趣，或希望提前锁定内部体验资格，欢迎添加微信进行深入交流。
        </div>

      </div>
    </div>
  );
}
