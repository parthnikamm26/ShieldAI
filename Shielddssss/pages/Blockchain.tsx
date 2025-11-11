import { useEffect, useState } from "react";
import { Link2, Shield, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlockchainRecord {
  id: string;
  blockNumber: number;
  action: string;
  timestamp: string;
  hash: string;
  status: "Verified" | "Pending";
}

const Blockchain = () => {
  const [blocks, setBlocks] = useState<BlockchainRecord[]>([
    {
      id: "BLK10000",
      blockNumber: 10000,
      action: "System Scan Completed",
      timestamp: new Date().toISOString(),
      hash: "0x742d35cc6634c0532925a3b844bc9e7fe644e3e6",
      status: "Verified",
    },
    {
      id: "BLK10001",
      blockNumber: 10001,
      action: "IP 203.45.67.89 Blocked",
      timestamp: new Date(Date.now() - 300000).toISOString(),
      hash: "0x8f3c26d7b1ea9df54c3a8f2e96c4b7d3e5a6f1c2",
      status: "Verified",
    },
  ]);

  useEffect(() => {
    // Simulate new blockchain records
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        const actions = [
          "Attack Mitigated",
          "IP Blocked",
          "System Scan Completed",
          "Rate Limit Applied",
          "Threat Neutralized",
        ];

        const newBlock: BlockchainRecord = {
          id: `BLK${10000 + blocks.length}`,
          blockNumber: 10000 + blocks.length,
          action: actions[Math.floor(Math.random() * actions.length)],
          timestamp: new Date().toISOString(),
          hash: `0x${Math.random().toString(16).substring(2, 42)}`,
          status: "Verified",
        };

        setBlocks((prev) => [newBlock, ...prev]);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [blocks.length]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Blockchain Audit Log</h2>
        <p className="text-muted-foreground">Immutable record of all security actions</p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-primary/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Blocks</CardTitle>
            <Link2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{blocks.length}</div>
            <p className="text-xs text-muted-foreground">Security events recorded</p>
          </CardContent>
        </Card>

        <Card className="border-success/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chain Integrity</CardTitle>
            <Shield className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100%</div>
            <p className="text-xs text-muted-foreground">All blocks verified</p>
          </CardContent>
        </Card>

        <Card className="border-secondary/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Encryption</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">SHA-256</div>
            <p className="text-xs text-muted-foreground">Cryptographic algorithm</p>
          </CardContent>
        </Card>
      </div>

      {/* Blockchain Records */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Blockchain Records</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {blocks.map((block, index) => (
              <div
                key={block.id}
                className="rounded-lg border border-primary/30 bg-card p-4 glow-primary transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-primary text-primary">
                      {block.id}
                    </Badge>
                    <Badge variant="secondary">Block #{block.blockNumber}</Badge>
                  </div>
                  <Badge variant={block.status === "Verified" ? "default" : "secondary"}>
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    {block.status}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">Action:</span>
                    <span className="text-sm text-muted-foreground">{block.action}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">Timestamp:</span>
                    <span className="text-sm text-muted-foreground">
                      {new Date(block.timestamp).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-sm font-semibold">Hash:</span>
                    <code className="text-xs text-muted-foreground font-mono break-all bg-muted px-2 py-1 rounded">
                      {block.hash}
                    </code>
                  </div>

                  {index === 0 && (
                    <div className="mt-3 flex items-center gap-2 text-xs text-success">
                      <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                      <span>Latest Block - Verified & Immutable</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chain Information */}
      <Card>
        <CardHeader>
          <CardTitle>Blockchain Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Network Type</h4>
              <p className="text-sm text-muted-foreground">Private Permissioned Blockchain</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Consensus Mechanism</h4>
              <p className="text-sm text-muted-foreground">Proof of Authority (PoA)</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Average Block Time</h4>
              <p className="text-sm text-muted-foreground">~8 seconds</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Data Retention</h4>
              <p className="text-sm text-muted-foreground">Permanent & Immutable</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blockchain;