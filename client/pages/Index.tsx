import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  TrendingUp,
  DollarSign,
  Activity,
  Download,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  MousePointer,
  Clock,
} from "lucide-react";

export default function Index() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's what's happening with your analytics.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button size="sm">
              <ArrowUpRight className="w-4 h-4 mr-2" />
              View Report
            </Button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Users"
            value="24,567"
            change="+12.5% from last month"
            changeType="positive"
            icon={Users}
          />
          <MetricCard
            title="Revenue"
            value="$54,240"
            change="+8.2% from last month"
            changeType="positive"
            icon={DollarSign}
          />
          <MetricCard
            title="Sessions"
            value="89,432"
            change="-2.4% from last month"
            changeType="negative"
            icon={Activity}
          />
          <MetricCard
            title="Conversion Rate"
            value="3.24%"
            change="+0.5% from last month"
            changeType="positive"
            icon={TrendingUp}
          />
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          <AnalyticsChart
            title="User Growth"
            type="area"
            dataKey="users"
            className="lg:col-span-1"
          />
          <AnalyticsChart
            title="Revenue Trends"
            type="line"
            dataKey="revenue"
            className="lg:col-span-1"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <AnalyticsChart
            title="Session Analytics"
            type="bar"
            dataKey="sessions"
            className="lg:col-span-2"
          />

          {/* Top Pages */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Top Pages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { page: "/dashboard", views: 12540, change: "+15%" },
                { page: "/analytics", views: 8743, change: "+8%" },
                { page: "/users", views: 6521, change: "-2%" },
                { page: "/settings", views: 4932, change: "+12%" },
                { page: "/reports", views: 3821, change: "+5%" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                      <Eye className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.page}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.views.toLocaleString()} views
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      item.change.startsWith("+") ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {item.change}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  action: "New user registration",
                  user: "john@example.com",
                  time: "2 minutes ago",
                  icon: Users,
                },
                {
                  action: "Purchase completed",
                  user: "sarah@example.com",
                  time: "5 minutes ago",
                  icon: DollarSign,
                },
                {
                  action: "Session started",
                  user: "mike@example.com",
                  time: "8 minutes ago",
                  icon: MousePointer,
                },
                {
                  action: "Report generated",
                  user: "admin@example.com",
                  time: "12 minutes ago",
                  icon: TrendingUp,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.action}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.user}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Performance Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Page Load Speed</span>
                  <span className="font-medium">1.2s</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <p className="text-xs text-muted-foreground">Excellent</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Server Response</span>
                  <span className="font-medium">250ms</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
                <p className="text-xs text-muted-foreground">Very Good</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Uptime</span>
                  <span className="font-medium">99.9%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "99%" }}
                  ></div>
                </div>
                <p className="text-xs text-muted-foreground">Outstanding</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
