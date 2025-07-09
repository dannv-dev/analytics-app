import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";
import { Badge } from "@/components/ui/badge";

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Deep dive into your analytics data and trends.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <AnalyticsChart
              title="User Engagement"
              type="area"
              dataKey="users"
            />
            <AnalyticsChart
              title="Revenue Analysis"
              type="line"
              dataKey="revenue"
            />
          </div>

          <AnalyticsChart
            title="Session Distribution"
            type="bar"
            dataKey="sessions"
          />

          <Card>
            <CardHeader>
              <CardTitle>Analytics Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Advanced analytics features are being developed. This page will
                include detailed metrics, custom reports, and advanced data
                visualization tools.
              </p>
              <Badge className="mt-4">In Development</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
