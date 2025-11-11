import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Shield, Activity, AlertTriangle, LineChart, Globe2, Link2, Settings, Menu, X, User } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { to: "/dashboard", icon: Activity, label: "Overview", end: true },
    { to: "/dashboard/threats", icon: AlertTriangle, label: "Threats" },
    { to: "/dashboard/analytics", icon: LineChart, label: "AI Analytics" },
    { to: "/dashboard/geo-map", icon: Globe2, label: "Geo Map" },
    { to: "/dashboard/blockchain", icon: Link2, label: "Blockchain" },
    { to: "/dashboard/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-card transition-all duration-300",
          sidebarOpen ? "w-64" : "w-16"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold">Shield IC</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="ml-auto"
          >
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        <nav className="flex-1 space-y-1 p-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              activeClassName="bg-primary/10 text-primary border-l-2 border-primary"
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {sidebarOpen && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="border-t border-border p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <User className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 text-sm">
                <div className="font-medium">Admin User</div>
                <div className="text-xs text-muted-foreground">admin@shield.com</div>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className={cn("flex flex-1 flex-col transition-all duration-300", sidebarOpen ? "ml-64" : "ml-16")}>
        <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-sm">
              <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="text-success-foreground">System Active</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;