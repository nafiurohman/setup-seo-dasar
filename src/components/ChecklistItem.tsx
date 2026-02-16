import { useState } from "react";
import { Check, Circle } from "lucide-react";

interface ChecklistItemProps {
  label: string;
  description?: string;
  defaultChecked?: boolean;
}

const ChecklistItem = ({ label, description, defaultChecked = false }: ChecklistItemProps) => {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <button
      onClick={() => setChecked(!checked)}
      className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left transition-all ${
        checked
          ? "border-primary/30 bg-primary/5"
          : "border-border/50 bg-card hover:border-border"
      }`}
    >
      <div className="mt-0.5 shrink-0">
        {checked ? (
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
            <Check className="h-3 w-3 text-primary-foreground" />
          </div>
        ) : (
          <Circle className="h-5 w-5 text-muted-foreground/50" />
        )}
      </div>
      <div>
        <p className={`text-sm font-medium ${checked ? "text-primary line-through" : "text-foreground"}`}>
          {label}
        </p>
        {description && (
          <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
        )}
      </div>
    </button>
  );
};

export default ChecklistItem;
