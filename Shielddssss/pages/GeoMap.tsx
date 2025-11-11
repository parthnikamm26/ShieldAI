import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const GeoMap = () => {
  const attackDistribution = [
    { name: "India", value: 28, color: "hsl(var(--chart-1))" },
    { name: "USA", value: 22, color: "hsl(var(--chart-2))" },
    { name: "Russia", value: 18, color: "hsl(var(--chart-3))" },
    { name: "China", value: 15, color: "hsl(var(--chart-4))" },
    { name: "Others", value: 17, color: "hsl(var(--chart-5))" },
  ];

  const topSources = [
    { country: "India", attacks: 1432, percentage: 28 },
    { country: "USA", attacks: 1127, percentage: 22 },
    { country: "Russia", attacks: 921, percentage: 18 },
    { country: "China", attacks: 768, percentage: 15 },
    { country: "Brazil", attacks: 512, percentage: 10 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Geographic Attack Map</h2>
        <p className="text-muted-foreground">Global distribution of detected threats</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Attack Distribution Pie Chart */}
        <Card className="border-primary/50">
          <CardHeader>
            <CardTitle>Attack Distribution by Region</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={attackDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {attackDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Attack Sources Bar Chart */}
        <Card className="border-secondary/50">
          <CardHeader>
            <CardTitle>Top Attack Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topSources} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                <YAxis dataKey="country" type="category" stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="attacks" fill="hsl(var(--secondary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Live Attack Map Placeholder */}
      <Card className="border-primary/50 glow-primary">
        <CardHeader>
          <CardTitle>Live Attack Map</CardTitle>
          <p className="text-sm text-muted-foreground">Real-time visualization of global threats</p>
        </CardHeader>
        <CardContent>
          <div className="relative h-[400px] rounded-lg bg-muted/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
            <div className="relative z-10 text-center space-y-4">
              <div className="flex items-center justify-center gap-8">
                <div className="space-y-2">
                  <div className="h-3 w-3 rounded-full bg-destructive animate-pulse mx-auto" />
                  <p className="text-xs text-muted-foreground">Active Attack</p>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-3 rounded-full bg-warning animate-pulse-slow mx-auto" />
                  <p className="text-xs text-muted-foreground">Monitoring</p>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-3 rounded-full bg-success mx-auto" />
                  <p className="text-xs text-muted-foreground">Mitigated</p>
                </div>
              </div>
              <div className="max-w-md mx-auto">
                <p className="text-sm text-muted-foreground">
                  Interactive world map showing attack origins with animated arcs and pulses. 
                  Real-time updates show geographic distribution and threat intensity.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Attack Statistics by Country */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Country Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topSources.map((source, index) => (
              <div key={source.country} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold">{source.country}</h4>
                    <p className="text-sm text-muted-foreground">{source.attacks.toLocaleString()} attacks detected</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{source.percentage}%</div>
                  <p className="text-xs text-muted-foreground">of total</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeoMap;