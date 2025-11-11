import { Shield, Activity, Link2, Globe2, ArrowRight, Lock, Brain, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-4 py-2 text-sm glow-primary">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Next-Gen DDoS Protection</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              Shield <span className="text-primary text-glow">IntelliChain</span>
            </h1>
            
            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              AI-Powered DDoS Protection secured by Blockchain
            </p>
            
            <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-time monitoring, intelligent threat detection, and immutable audit trails. 
              Protect your infrastructure with cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto glow-primary"
                onClick={() => navigate("/login")}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Advanced Security Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive protection powered by cutting-edge technology
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:glow-primary">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Real-Time Monitoring</h3>
              <p className="text-muted-foreground">
                Visualize incoming requests per second with live traffic analysis and instant alerts.
              </p>
            </div>

            <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-secondary/50 hover:glow-secondary">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">AI Threat Detection</h3>
              <p className="text-muted-foreground">
                Detect and classify attack types including UDP floods, SYN floods, and Slowloris attacks.
              </p>
            </div>

            <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/50 hover:glow-accent">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Link2 className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Blockchain Audit</h3>
              <p className="text-muted-foreground">
                Immutable logging of all security actions in an unalterable blockchain ledger.
              </p>
            </div>

            <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:glow-primary">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Globe2 className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Global Visualization</h3>
              <p className="text-muted-foreground">
                Interactive world map showing geographic origins and patterns of detected attacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-y border-border bg-card/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="mb-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Trusted by Leading Organizations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <div className="text-2xl font-bold text-muted-foreground/50">TechCorp</div>
              <div className="text-2xl font-bold text-muted-foreground/50">SecureNet</div>
              <div className="text-2xl font-bold text-muted-foreground/50">DataShield</div>
              <div className="text-2xl font-bold text-muted-foreground/50">CloudGuard</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">99.99%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-secondary">10M+</div>
              <div className="text-muted-foreground">Threats Blocked</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-accent">24/7</div>
              <div className="text-muted-foreground">Active Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Shield IntelliChain</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Next-generation DDoS protection powered by AI and secured by blockchain.
              </p>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Shield IntelliChain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;