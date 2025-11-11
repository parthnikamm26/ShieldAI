import { useState } from "react";
import { User, Bell, Shield, Key, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [autoBlock, setAutoBlock] = useState(true);
  const [rateLimiting, setRateLimiting] = useState(true);
  const { toast } = useToast();

  const handleSaveAccount = () => {
    toast({
      title: "Settings Saved",
      description: "Your account settings have been updated successfully.",
    });
  };

  const handleGenerateKey = () => {
    const newKey = `sk_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
    toast({
      title: "API Key Generated",
      description: `New key: ${newKey}`,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your account and system preferences</p>
      </div>

      {/* Account Information */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            <CardTitle>Account Information</CardTitle>
          </div>
          <CardDescription>Update your account details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="admin" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="admin@shieldintellichain.com" />
          </div>
          <Button onClick={handleSaveAccount} className="glow-primary">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-secondary" />
            <CardTitle>Notifications</CardTitle>
          </div>
          <CardDescription>Configure how you receive alerts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Receive security alerts via email</p>
            </div>
            <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Push Notifications</p>
              <p className="text-sm text-muted-foreground">Browser notifications for critical events</p>
            </div>
            <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-success" />
            <CardTitle>Security Settings</CardTitle>
          </div>
          <CardDescription>Configure automated security responses</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Auto-Block Threats</p>
              <p className="text-sm text-muted-foreground">Automatically block detected attacks</p>
            </div>
            <Switch checked={autoBlock} onCheckedChange={setAutoBlock} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Rate Limiting</p>
              <p className="text-sm text-muted-foreground">Enable adaptive rate limiting for suspicious IPs</p>
            </div>
            <Switch checked={rateLimiting} onCheckedChange={setRateLimiting} />
          </div>
        </CardContent>
      </Card>

      {/* API Configuration */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Key className="h-5 w-5 text-accent" />
            <CardTitle>API Configuration</CardTitle>
          </div>
          <CardDescription>Manage API keys for integrations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key</Label>
            <div className="flex gap-2">
              <Input
                id="apiKey"
                type="password"
                value="sk_********************************"
                readOnly
                className="font-mono"
              />
              <Button onClick={handleGenerateKey} variant="outline">
                Generate New Key
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Use this key to integrate Shield IntelliChain with your applications
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive/50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle className="text-destructive">Danger Zone</CardTitle>
          </div>
          <CardDescription>Irreversible actions - proceed with caution</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border border-destructive/30 bg-destructive/10 p-4">
            <div>
              <p className="font-medium">Reset All Settings</p>
              <p className="text-sm text-muted-foreground">Restore default configuration</p>
            </div>
            <Button variant="destructive" onClick={() => {
              toast({
                title: "Settings Reset",
                description: "All settings restored to defaults",
              });
            }}>
              Reset Settings
            </Button>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-destructive/30 bg-destructive/10 p-4">
            <div>
              <p className="font-medium">Clear Blockchain Log</p>
              <p className="text-sm text-muted-foreground">Remove all audit records</p>
            </div>
            <Button variant="destructive" onClick={() => {
              toast({
                title: "Action Required",
                description: "Please confirm this action",
                variant: "destructive",
              });
            }}>
              Clear Log
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;