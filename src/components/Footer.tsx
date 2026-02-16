import { Code, Cpu, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 px-3 py-4 sm:px-6 sm:py-6">
      <div className="flex flex-col items-center gap-2 text-xs sm:text-sm text-muted-foreground sm:flex-row sm:justify-center sm:gap-4">
        <a
          href="https://beznproject.web.id"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 transition-colors hover:text-primary"
        >
          <Code className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          by Bezn Project
          <ExternalLink className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
        </a>
        <span className="hidden sm:inline text-border">||</span>
        <span className="flex items-center gap-1.5">
          <Cpu className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
          Build with AI
        </span>
        <span className="hidden sm:inline text-border">||</span>
        <a
          href="https://nafiurohman.pages.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 transition-colors hover:text-primary"
        >
          Dev by M. Nafiurohman
          <ExternalLink className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
