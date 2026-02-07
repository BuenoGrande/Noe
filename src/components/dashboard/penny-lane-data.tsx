"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { MetricCard } from "./metric-card";
import { formatCurrency } from "@/lib/format-currency";

interface Invoice {
  id: number;
  invoice_number: string;
  label: string;
  status: string;
  date: string;
  amount: number;
  currency: string;
}

interface Customer {
  id: number;
  name: string;
  email: string | null;
}

export function PennyLaneData() {
  const [invoices, setInvoices] = useState<Invoice[] | null>(null);
  const [customers, setCustomers] = useState<Customer[] | null>(null);
  const [totalInvoices, setTotalInvoices] = useState<number | null>(null);
  const [totalCustomers, setTotalCustomers] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/v1/penny-lane/invoices")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setInvoices(data.data.invoices);
          setTotalInvoices(data.data.totalInvoices);
        } else {
          setError(data.error.message);
        }
      })
      .catch(() => setError("Failed to load invoices"));

    fetch("/api/v1/penny-lane/customers")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCustomers(data.data.customers);
          setTotalCustomers(data.data.totalCustomers);
        }
      })
      .catch(() => {});
  }, []);

  if (error) {
    return (
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle>Penny Lane</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-500">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Penny Lane</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <MetricCard
          title="Total Invoices"
          value={totalInvoices}
          subtitle="From customer_invoices"
        />
        <MetricCard
          title="Total Customers"
          value={totalCustomers}
          subtitle="From customers"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          {invoices === null ? (
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          ) : invoices.length === 0 ? (
            <p className="text-muted-foreground">No invoices found.</p>
          ) : (
            <div className="space-y-3">
              {invoices.slice(0, 10).map((inv) => (
                <div
                  key={inv.id}
                  className="flex items-center justify-between py-2 border-b last:border-0"
                >
                  <div>
                    <p className="font-medium">{inv.invoice_number}</p>
                    <p className="text-sm text-muted-foreground">
                      {inv.label || "No label"} &middot; {inv.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{inv.status}</Badge>
                    <span className="font-mono text-sm">
                      {formatCurrency(Math.round(inv.amount * 100))}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Customers</CardTitle>
        </CardHeader>
        <CardContent>
          {customers === null ? (
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-8 w-full" />
              ))}
            </div>
          ) : customers.length === 0 ? (
            <p className="text-muted-foreground">No customers found.</p>
          ) : (
            <div className="space-y-2">
              {customers.slice(0, 10).map((cust) => (
                <div
                  key={cust.id}
                  className="flex items-center justify-between py-2 border-b last:border-0"
                >
                  <p className="font-medium">{cust.name}</p>
                  <p className="text-sm text-muted-foreground">{cust.email ?? "—"}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
