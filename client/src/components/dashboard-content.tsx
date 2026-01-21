
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DollarSign,
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$4 231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Orders",
    value: "2 350",
    change: "+180.1%",
    trend: "up",
    icon: ShoppingCart,
  },
  {
    title: "Products",
    value: "123",
    change: "+19%",
    trend: "up",
    icon: Package,
  },
  {
    title: "Active Customers",
    value: "573",
    change: "+201",
    trend: "up",
    icon: Users,
  },
];

const recentOrders = [
  {
    id: "#3210",
    customer: "Olivia Martin",
    email: "olivia.martin@email.com",
    status: "Fulfilled",
    amount: "$42.25",
  },
  {
    id: "#3209",
    customer: "Jackson Lee",
    email: "jackson.lee@email.com",
    status: "Fulfilled",
    amount: "$74.99",
  },
  {
    id: "#3208",
    customer: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    status: "Pending",
    amount: "$99.99",
  },
  {
    id: "#3207",
    customer: "William Kim",
    email: "will@email.com",
    status: "Fulfilled",
    amount: "$39.95",
  },
  {
    id: "#3206",
    customer: "Sofia Davis",
    email: "sofia.davis@email.com",
    status: "Processing",
    amount: "$139.99",
  },
];

export function DashboardContent() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-6">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
      </header>

      <main className="flex-1 space-y-6 p-6">
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  )}
                  <span
                    className={
                      stat.trend === "up" ? "text-green-500" : "text-red-500"
                    }
                  >
                    {stat.change}
                  </span>
                  {" from last month"}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              You have {recentOrders.length} orders this week.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{order.customer}</span>
                        <span className="text-sm text-muted-foreground">
                          {order.email}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.status === "Fulfilled"
                            ? "default"
                            : order.status === "Processing"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {order.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks to manage your store.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button>Add Product</Button>
              <Button variant="outline">View All Orders</Button>
              <Button variant="outline">Export Data</Button>
              <Button variant="outline">Manage Inventory</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
