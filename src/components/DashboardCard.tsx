
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    label: string;
    positive: boolean;
  };
  className?: string;
}

export function DashboardCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  className
}: DashboardCardProps) {
  return (
    <Card className={cn(
      "relative overflow-hidden bg-gradient-to-br from-card via-card to-card/95 border-2 border-border hover:border-foreground/20 rounded-3xl backdrop-blur-sm transition-all duration-500 group hover:shadow-large hover:-translate-y-1",
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {title}
        </CardTitle>
        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:via-primary/20 group-hover:to-primary/10 transition-all duration-300 shadow-soft border border-primary/20">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-4xl font-bold font-display text-foreground mb-2">{value}</div>
        {description && (
          <p className="text-sm text-muted-foreground font-medium">
            {description}
          </p>
        )}
        {trend && (
          <div className="flex items-center">
            <div className={cn(
              "inline-flex items-center px-3 py-1.5 rounded-2xl text-xs font-bold shadow-soft backdrop-blur-sm border-2",
              trend.positive 
                ? "bg-gradient-to-r from-success/20 to-success/10 text-success border-success/30" 
                : "bg-gradient-to-r from-destructive/20 to-destructive/10 text-destructive border-destructive/30"
            )}>
              <span className="mr-1.5 text-sm">{trend.positive ? "↗" : "↘"}</span>
              {Math.abs(trend.value)}%
            </div>
            <span className="text-xs text-muted-foreground ml-3 font-medium">
              {trend.label}
            </span>
          </div>
        )}
      </CardContent>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none rounded-3xl" />
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none shadow-glow" />
    </Card>
  );
}
