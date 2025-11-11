import { useEffect, useState } from "react";
import { Activity, Shield, Cpu, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  glowClass?: string;
}

const MetricCard = ({ title, value, icon, trend, glowClass }: MetricCardProps) => (
  <Card className={glowClass}>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      {trend && <p className="text-xs text-muted-foreground mt-1">{trend}</p>}
    </CardContent>
  </Card>
);

const Overview = () => {
  const [trafficData, setTrafficData] = useState<Array<{ time: string; requests: number }>>([]);
  const [activeAttacks, setActiveAttacks] = useState(0);
  const [mitigatedToday, setMitigatedToday] = useState(247);

  useEffect(() => {
    // Initialize traffic data
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      time: `${i}s`,
      requests: Math.floor(Math.random() * 1000) + 500,
    }));
    setTrafficData(initialData);

    // Update traffic data every 2 seconds
    const interval = setInterval(() => {
      setTrafficData((prev) => {
        const newData = [...prev.slice(1)];
        newData.push({
          time: `${prev.length}s`,
          requests: Math.floor(Math.random() * 1000) + 500,
        });
        return newData;
      });

      // Randomly update active attacks
      if (Math.random() > 0.7) {
        setActiveAttacks((prev) => Math.max(0, prev + (Math.random() > 0.5 ? 1 : -1)));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
        <p className="text-muted-foreground">Real-time system status and metrics</p>
      </div>

      {/* Metric Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Attacks"
          value={activeAttacks}
          icon={<Shield className="h-4 w-4 text-destructive" />}
          trend={activeAttacks > 0 ? "Mitigating..." : "All clear"}
          glowClass={activeAttacks > 0 ? "border-destructive/50 glow-accent" : ""}
        />
        <MetricCard
          title="Mitigated Today"
          value={mitigatedToday}
          icon={<Activity className="h-4 w-4 text-success" />}
          trend="+12% from yesterday"
          glowClass="border-success/50"
        />
        <MetricCard
          title="CPU Usage"
          value="34%"
          icon={<Cpu className="h-4 w-4 text-primary" />}
          trend="Normal range"
          glowClass="border-primary/50"
        />
        <MetricCard
          title="System Health"
          value="Healthy"
          icon={<TrendingUp className="h-4 w-4 text-success" />}
          trend="All systems operational"
          glowClass="border-success/50"
        />
      </div>

      {/* Live Traffic Monitor */}
      <Card className="border-primary/50 glow-primary">
        <CardHeader>
          <CardTitle>Live Traffic Monitor</CardTitle>
          <p className="text-sm text-muted-foreground">Requests per second over the last 60 seconds</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="requests"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Additional Metrics */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Bandwidth Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Current</span>
                <span className="font-medium">245 MB/s</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-full w-[65%] rounded-full bg-primary" />
              </div>
              <p className="text-xs text-muted-foreground">65% of total capacity</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Network Latency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Average Response Time</span>
                <span className="font-medium">12ms</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-full w-[12%] rounded-full bg-success" />
              </div>
              <p className="text-xs text-success-foreground">Optimal performance</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;