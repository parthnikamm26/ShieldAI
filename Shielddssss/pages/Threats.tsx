import { useState, useEffect } from "react";
import { Shield, AlertTriangle, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface Threat {
  id: string;
  type: string;
  severity: "Low" | "Medium" | "High";
  status: "Active" | "Mitigated";
  ip: string;
  timestamp: string;
}

const Threats = () => {
  const [threats, setThreats] = useState<Threat[]>([
    {
      id: "THR-001",
      type: "UDP Flood",
      severity: "High",
      status: "Active",
      ip: "203.45.67.89",
      timestamp: new Date().toISOString(),
    },
    {
      id: "THR-002",
      type: "SYN Flood",
      severity: "Medium",
      status: "Mitigated",
      ip: "198.51.100.42",
      timestamp: new Date(Date.now() - 300000).toISOString(),
    },
  ]);

  const { toast } = useToast();

  const activeThreats = threats.filter((t) => t.status === "Active").length;
  const mitigatedThreats = threats.filter((t) => t.status === "Mitigated").length;

  const handleMitigate = (threatId: string) => {
    setThreats((prev) =>
      prev.map((threat) =>
        threat.id === threatId ? { ...threat, status: "Mitigated" as const } : threat
      )
    );
    toast({
      title: "Threat Mitigated",
      description: `Successfully mitigated threat ${threatId}`,
    });
  };

  useEffect(() => {
    // Simulate new threats appearing
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const attackTypes = ["UDP Flood", "SYN Flood", "HTTP Flood", "Slowloris", "Botnet"];
        const severities: Array<"Low" | "Medium" | "High"> = ["Low", "Medium", "High"];
        
        const newThreat: Threat = {
          id: `THR-${String(threats.length + 1).padStart(3, "0")}`,
          type: attackTypes[Math.floor(Math.random() * attackTypes.length)],
          severity: severities[Math.floor(Math.random() * severities.length)],
          status: "Active",
          ip: `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
          timestamp: new Date().toISOString(),
        };

        setThreats((prev) => [newThreat, ...prev]);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [threats.length]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "destructive";
      case "Medium":
        return "warning";
      case "Low":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Threat Detection</h2>
        <p className="text-muted-foreground">Monitor and mitigate security threats in real-time</p>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-destructive/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Threats</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeThreats}</div>
          </CardContent>
        </Card>

        <Card className="border-success/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mitigated</CardTitle>
            <Shield className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mitigatedThreats}</div>
          </CardContent>
        </Card>

        <Card className="border-primary/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Detected</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{threats.length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Threats List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Security Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {threats.map((threat) => (
              <div
                key={threat.id}
                className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
              >
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{threat.type}</h4>
                    <Badge variant={getSeverityColor(threat.severity) as any}>
                      {threat.severity}
                    </Badge>
                    <Badge variant={threat.status === "Active" ? "destructive" : "default"}>
                      {threat.status}
                    </Badge>
                  </div>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>ID: {threat.id}</span>
                    <span>IP: {threat.ip}</span>
                    <span>{new Date(threat.timestamp).toLocaleTimeString()}</span>
                  </div>
                </div>
                {threat.status === "Active" && (
                  <Button
                    onClick={() => handleMitigate(threat.id)}
                    className="glow-primary"
                  >
                    Mitigate Now
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Threats;