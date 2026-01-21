import {
  BarChart3,
  Package,
  ShoppingCart,
  Users,
  Settings,
  Home,
  TrendingUp,
  FileText,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    id: "dashboard",
    icon: Home,
  },
  {
    title: "Orders",
    id: "orders",
    icon: ShoppingCart,
  },
  {
    title: "Products",
    id: "products",
    icon: Package,
  },
  {
    title: "Customers",
    id: "customers",
    icon: Users,
  },
  {
    title: "Analytics",
    id: "analytics",
    icon: BarChart3,
  },
  {
    title: "Reports",
    id: "reports",
    icon: FileText,
  },
];

const settingsItems = [
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar({
  currentPage,
  onPageChange,
}: {
  currentPage: string;
  onPageChange: (page: string) => void;
}) {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-primary-foreground">
            <TrendingUp className="h-4 w-4 bg-black" />
          </div>
          <span className="text-lg font-semibold text-black">Sisipe Admin</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={currentPage === item.id}>
                    <button
                      onClick={() => onPageChange(item.id)}
                      className="flex w-full items-center gap-3"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button className="flex w-full items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
            <span className="text-sm font-medium">A</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">Admin</p>
            <p className="truncate text-xs text-muted-foreground">
              dorcas@sisipe.com
            </p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
