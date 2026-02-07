import { ConnectionStatus } from "@/components/dashboard/connection-status";
import { PennyLaneData } from "@/components/dashboard/penny-lane-data";
import { PayFitData } from "@/components/dashboard/payfit-data";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            <span style={{ color: "#8B5CF6" }}>BP-AI</span> Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Penny Lane & PayFit integration status
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <aside className="lg:col-span-1">
            <ConnectionStatus />
          </aside>

          <section className="lg:col-span-2 space-y-12">
            <PennyLaneData />
            <PayFitData />
          </section>
        </div>
      </div>
    </main>
  );
}
