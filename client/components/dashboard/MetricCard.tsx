import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  className?: string;
}

export function MetricCard({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  className,
}: MetricCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p
          className={cn(
            "text-xs flex items-center gap-1 mt-1",
            changeType === "positive" && "text-green-600",
            changeType === "negative" && "text-red-600",
            changeType === "neutral" && "text-muted-foreground",
          )}
        >
          <span
            className={cn(
              "inline-block w-0 h-0 border-l-[3px] border-r-[3px] border-l-transparent border-r-transparent",
              changeType === "positive" && "border-b-[4px] border-b-green-600",
              changeType === "negative" && "border-t-[4px] border-t-red-600",
            )}
          />
          {change}
        </p>
      </CardContent>
    </Card>
  );
}
