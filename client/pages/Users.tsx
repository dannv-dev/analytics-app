import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Users() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">
            Manage and analyze your user base.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>User Management Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              User management features are being developed. This page will
              include user profiles, activity tracking, segmentation, and user
              analytics.
            </p>
            <Badge className="mt-4">In Development</Badge>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
