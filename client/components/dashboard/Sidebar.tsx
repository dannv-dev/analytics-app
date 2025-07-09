import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BarChart3,
  Users,
  TrendingUp,
  PieChart,
  Activity,
  Settings,
  Home,
  Calendar,
  FileText,
  Target,
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

const navigation = [
  {
    name: "Overview",
    href: "/",
    icon: Home,
    current: true,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
    current: false,
  },
  {
    name: "Users",
    href: "/users",
    icon: Users,
    current: false,
  },
  {
    name: "Performance",
    href: "/performance",
    icon: TrendingUp,
    current: false,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: PieChart,
    current: false,
  },
  {
    name: "Activity",
    href: "/activity",
    icon: Activity,
    current: false,
  },
  {
    name: "Goals",
    href: "/goals",
    icon: Target,
    current: false,
  },
  {
    name: "Events",
    href: "/events",
    icon: Calendar,
    current: false,
  },
  {
    name: "Documents",
    href: "/documents",
    icon: FileText,
    current: false,
  },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("flex flex-col h-full", className)}>
      <div className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">Analytics</h1>
            <p className="text-xs text-muted-foreground">Dashboard</p>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 px-3">
        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.name}
                variant={item.current ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 px-3 py-2 text-sm font-medium",
                  item.current
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                )}
                asChild
              >
                <a href={item.href}>
                  <Icon className="w-4 h-4" />
                  {item.name}
                </a>
              </Button>
            );
          })}
        </nav>
      </ScrollArea>

      <div className="p-3 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 px-3 py-2 text-sm"
        >
          <Settings className="w-4 h-4" />
          Settings
        </Button>
      </div>
    </div>
  );
}
