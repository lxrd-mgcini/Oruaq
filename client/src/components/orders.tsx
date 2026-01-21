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
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";

const orders = [
  {
    id: "#3210",
    customer: "Olivia Martin",
    email: "olivia.martin@email.com",
    status: "Fulfilled",
    amount: "$42.25",
    date: "2024-01-15",
    items: 2,
  },
  {
    id: "#3209",
    customer: "Jackson Lee",
    email: "jackson.lee@email.com",
    status: "Fulfilled",
    amount: "$74.99",
    date: "2024-01-14",
    items: 1,
  },
  {
    id: "#3208",
    customer: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    status: "Pending",
    amount: "$99.99",
    date: "2024-01-14",
    items: 3,
  },
  {
    id: "#3207",
    customer: "William Kim",
    email: "will@email.com",
    status: "Fulfilled",
    amount: "$39.95",
    date: "2024-01-13",
    items: 1,
  },
  {
    id: "#3206",
    customer: "Sofia Davis",
    email: "sofia.davis@email.com",
    status: "Processing",
    amount: "$139.99",
    date: "2024-01-13",
    items: 4,
  },
  {
    id: "#3205",
    customer: "Michael Chen",
    email: "michael.chen@email.com",
    status: "Cancelled",
    amount: "$89.50",
    date: "2024-01-12",
    items: 2,
  },
];

export function Orders() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-6">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Orders</h1>
        </div>
      </header>

      <main className="flex-1 space-y-6 p-6">
        {/* Search and Filter Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search orders..."
                className="w-[300px] pl-8"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
          <Button>Create Order</Button>
        </div>

        {/* Orders Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Orders</CardTitle>
            <CardDescription>
              Manage and track all customer orders.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
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
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.status === "Fulfilled"
                            ? "default"
                            : order.status === "Processing"
                              ? "secondary"
                              : order.status === "Pending"
                                ? "outline"
                                : "destructive"
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell className="text-right font-medium">
                      {order.amount}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Order
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Cancel Order
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
