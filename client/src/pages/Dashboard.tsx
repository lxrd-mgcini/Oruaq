import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardContent } from "@/components/dashboard-content";
import { AppSidebar } from "@/components/app-sidebar";
import { Orders } from "@/components/orders";
// import { Products } from "@/components/products";
// import { DashboardContent } from "@/components/dashboard-content";
// import { OrdersPage } from "@/components/orders-page";
// import { ProductsPage } from "@/components/products-page";
// import { CustomersPage } from "@/components/customers-page";
// import { AnalyticsPage } from "@/components/analytics-page";
// import { ReportsPage } from "@/components/reports-page";

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardContent />;
      case "orders":
        return <Orders />;
      // case "products":
      //   return <Products />;
      //   case "customers":
      //     return <CustomersPage />;
      //   case "analytics":
      //     return <AnalyticsPage />;
      //   case "reports":
      //     return <ReportsPage />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <AppSidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        {renderPage()}
      </div>
    </SidebarProvider>
  );
}
