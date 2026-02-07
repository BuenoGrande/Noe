"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface ConnectionState {
  connected: boolean | null;
  companyName?: string;
  error?: string;
}

function StatusDot({ connected }: { connected: boolean | null }) {
  if (connected === null) {
    return <span className="inline-block h-3 w-3 rounded-full bg-gray-300 animate-pulse" />;
  }
  return (
    <span
      className={`inline-block h-3 w-3 rounded-full ${
        connected ? "bg-green-500" : "bg-red-500"
      }`}
    />
  );
}

export function ConnectionStatus() {
  const [pennyLane, setPennyLane] = useState<ConnectionState>({ connected: null });
  const [payFit, setPayFit] = useState<ConnectionState>({ connected: null });

  useEffect(() => {
    fetch("/api/v1/penny-lane/status")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPennyLane({ connected: true, companyName: data.data.companyName });
        } else {
          setPennyLane({ connected: false, error: data.error.message });
        }
      })
      .catch(() => setPennyLane({ connected: false, error: "Network error" }));

    fetch("/api/v1/payfit/status")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPayFit({ connected: true, companyName: data.data.companyName });
        } else {
          setPayFit({ connected: false, error: data.error.message });
        }
      })
      .catch(() => setPayFit({ connected: false, error: "Network error" }));
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Integrations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <StatusDot connected={pennyLane.connected} />
              <div>
                <p className="font-medium">Penny Lane</p>
                {pennyLane.connected === null ? (
                  <Skeleton className="h-4 w-32 mt-1" />
                ) : pennyLane.connected ? (
                  <p className="text-sm text-muted-foreground">{pennyLane.companyName}</p>
                ) : (
                  <p className="text-sm text-red-500">{pennyLane.error}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <StatusDot connected={payFit.connected} />
              <div>
                <p className="font-medium">PayFit</p>
                {payFit.connected === null ? (
                  <Skeleton className="h-4 w-32 mt-1" />
                ) : payFit.connected ? (
                  <p className="text-sm text-muted-foreground">{payFit.companyName}</p>
                ) : (
                  <p className="text-sm text-red-500">{payFit.error}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
