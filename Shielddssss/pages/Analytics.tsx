import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const Analytics = () => {
  const attackTypeData = [
    { name: "UDP Flood", value: 35 },
    { name: "SYN Flood", value: 28 },
    { name: "HTTP Flood", value: 18 },
    { name: "Slowloris", value: 12 },
    { name: "Botnet", value: 7 },
  ];

  const performanceData = [
    { time: "00:00", accuracy: 98, falsePositives: 2 },
    { time: "04:00", accuracy: 97, falsePositives: 3 },
    { time: "08:00", accuracy: 99, falsePositives: 1 },
    { time: "12:00", accuracy: 98, falsePositives: 2 },
    { time: "16:00", accuracy: 96, falsePositives: 4 },
    { time: "20:00", accuracy: 99, falsePositives: 1 },
  ];

  const COLORS = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">AI Analytics</h2>
        <p className="text-muted-foreground">Advanced threat analysis and detection performance</p>
      </div>

      {/* Attack Type Distribution */}
      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle>Attack Type Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={attackTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {attackTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Detection Performance */}
      <Card className="border-secondary/50">
        <CardHeader>
          <CardTitle>Detection Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
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
              <Legend />
              <Bar dataKey="accuracy" fill="hsl(var(--primary))" name="Detection Accuracy %" />
              <Bar dataKey="falsePositives" fill="hsl(var(--accent))" name="False Positives" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Current Metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Detection Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">98.5%</div>
            <p className="text-xs text-muted-foreground mt-1">+2.3% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Anomaly Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-warning">6.2/10</div>
            <p className="text-xs text-muted-foreground mt-1">Moderate threat level</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success">250ms</div>
            <p className="text-xs text-muted-foreground mt-1">Within optimal range</p>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle>AI-Generated Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border border-primary/50 bg-primary/10 p-4">
              <h4 className="font-semibold mb-2">Spike in SYN Floods Detected</h4>
              <p className="text-sm text-muted-foreground">
                Unusual increase in SYN flood attacks detected at 14:30 UTC. Mitigation response time averaged 250ms. 
                Source IPs primarily originating from Eastern European regions. Auto-blocking rules successfully applied.
              </p>
            </div>

            <div className="rounded-lg border border-secondary/50 bg-secondary/10 p-4">
              <h4 className="font-semibold mb-2">Pattern Recognition Alert</h4>
              <p className="text-sm text-muted-foreground">
                Recurring attack pattern identified: coordinated UDP floods followed by HTTP floods. 
                Predictive models have been updated to anticipate this sequence. Enhanced monitoring activated.
              </p>
            </div>

            <div className="rounded-lg border border-success/50 bg-success/10 p-4">
              <h4 className="font-semibold mb-2">System Optimization Recommendation</h4>
              <p className="text-sm text-muted-foreground">
                Current load balancing efficiency at 94%. Consider implementing additional rate limiting rules 
                for IP ranges 198.51.100.0/24 based on historical attack patterns.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;