import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "info";
}

const variantClasses = {
  default: "border-border/50 bg-card",
  primary: "border-primary/20 bg-primary/5",
  success: "border-success/20 bg-success/5",
  warning: "border-warning/20 bg-warning/5",
  info: "border-info/20 bg-info/5",
};

const iconVariantClasses = {
  default: "text-muted-foreground",
  primary: "text-primary",
  success: "text-success",
  warning: "text-warning",
  info: "text-info",
};

const InfoCard = ({ icon: Icon, title, children, variant = "default" }: InfoCardProps) => {
  return (
    <div className={`rounded-xl border p-4 sm:p-5 ${variantClasses[variant]} animate-fade-in`}>
      <div className="mb-2.5 sm:mb-3 flex items-center gap-2">
        <Icon className={`h-4 w-4 sm:h-5 sm:w-5 shrink-0 ${iconVariantClasses[variant]}`} />
        <h3 className="text-sm sm:text-base font-semibold text-foreground">{title}</h3>
      </div>
      <div className="text-xs sm:text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
};

export default InfoCard;
