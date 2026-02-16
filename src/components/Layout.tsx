import { ReactNode, useState, useEffect } from "react";
import AppSidebar from "./AppSidebar";
import Footer from "./Footer";
import { GlobalSearch } from "./GlobalSearch";
import { ScrollToTop } from "./ScrollToTop";
import { useTheme } from "./ThemeProvider";
import { Search, Moon, Sun } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center justify-end gap-2 border-b border-border/50 bg-background/95 px-3 py-2.5 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-4 sm:py-3 lg:px-8">
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-1.5 sm:gap-2 rounded-lg border border-border/50 bg-card px-2 py-1.5 sm:px-3 text-xs sm:text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
          >
            <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Cari...</span>
            <kbd className="hidden rounded bg-muted px-1.5 py-0.5 text-xs sm:inline">⌘K</kbd>
          </button>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-lg border border-border/50 bg-card p-1.5 sm:p-2 transition-colors hover:border-primary/30 hover:text-primary"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
          </button>
        </header>
        <main className="flex-1 overflow-y-auto px-3 py-6 sm:px-4 sm:py-8 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-4xl">{children}</div>
        </main>
        <Footer />
      </div>
      <GlobalSearch open={searchOpen} onOpenChange={setSearchOpen} />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
