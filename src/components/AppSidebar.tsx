import {
  Home,
  Settings,
  FileText,
  Link,
  Search,
  BarChart3,
  CheckSquare,
  Wrench,
  Globe,
  Bot,
  Smartphone,
  Shield,
  Menu,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const navSections = [
  {
    label: "Mulai",
    items: [
      { title: "Beranda", url: "/", icon: Home },
    ],
  },
  {
    label: "Dasar SEO",
    items: [
      { title: "Technical SEO", url: "/technical-seo", icon: Settings },
      { title: "On-Page SEO", url: "/on-page-seo", icon: FileText },
      { title: "Off-Page SEO", url: "/off-page-seo", icon: Link },
    ],
  },
  {
    label: "Tools & Analytics",
    items: [
      { title: "Google Search Console", url: "/google-search-console", icon: Search },
      { title: "Google Analytics", url: "/google-analytics", icon: BarChart3 },
    ],
  },
  {
    label: "Lanjutan",
    items: [
      { title: "Mobile & PWA SEO", url: "/mobile-seo", icon: Smartphone },
      { title: "AI & Voice Search", url: "/ai-voice-seo", icon: Bot },
      { title: "International SEO", url: "/international-seo", icon: Globe },
      { title: "Keamanan & Trust", url: "/security-trust", icon: Shield },
    ],
  },
  {
    label: "Referensi",
    items: [
      { title: "SEO Checklist", url: "/seo-checklist", icon: CheckSquare },
      { title: "Tools & Resources", url: "/tools-resources", icon: Wrench },
    ],
  },
];

const AppSidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed left-4 top-4 z-50 rounded-lg bg-card p-2 text-foreground shadow-lg lg:hidden"
        aria-label="Toggle menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-border/50 bg-sidebar transition-transform lg:sticky lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 border-b border-border/50 px-5 py-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Search className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-foreground">SEO Setup</h1>
            <p className="text-[10px] text-muted-foreground">Panduan Lengkap</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {navSections.map((section) => (
            <div key={section.label} className="mb-4">
              <p className="mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                {section.label}
              </p>
              <ul className="space-y-0.5">
                {section.items.map((item) => (
                  <li key={item.url}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground"
                      activeClassName="bg-primary/10 text-primary font-medium"
                      onClick={() => setOpen(false)}
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      <span>{item.title}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default AppSidebar;
