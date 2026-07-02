import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IndexPage from "./pages/index";
import WorksPage from "./pages/works";
import WechatModal from "./components/WechatModal";
import { profile } from "./data/profile";

export default function App() {
  // Simple custom pathname-based router
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isWechatOpen, setIsWechatOpen] = useState(false);
  const [pendingHash, setPendingHash] = useState<string | null>(null);

  // Monitor popstate events (for browser back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Handle page path changes and check for pending hash scrolls
  useEffect(() => {
    if (currentPath === "/" && pendingHash) {
      const element = document.getElementById(pendingHash);
      if (element) {
        // Wait a tiny fraction for rendering to complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          setPendingHash(null);
        }, 100);
      }
    }
  }, [currentPath, pendingHash]);

  // Handle page path and anchor navigation
  const navigate = (to: string) => {
    const [pathname, hashWithHash] = to.split("#");
    const hash = hashWithHash || null;

    if (pathname !== window.location.pathname) {
      // Different page navigation
      window.history.pushState({}, "", to);
      setCurrentPath(pathname);
      if (hash) {
        setPendingHash(hash);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // Same page anchor scroll
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const renderActivePage = () => {
    if (currentPath.startsWith("/works")) {
      return <WorksPage onWechatClick={() => setIsWechatOpen(true)} />;
    }
    return (
      <IndexPage
        onNavigate={navigate}
        onWechatClick={() => setIsWechatOpen(true)}
      />
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      {/* Dynamic Navigation Header */}
      <Header currentPath={currentPath} onNavigate={navigate} />

      {/* Main Content Viewport */}
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      {/* Footer Branding Area */}
      <Footer currentPath={currentPath} onNavigate={navigate} />

      {/* Shared Overlay Wechat QR Modal */}
      <WechatModal
        isOpen={isWechatOpen}
        onClose={() => setIsWechatOpen(false)}
        wechatId={profile.contact.wechatId}
      />
    </div>
  );
}
