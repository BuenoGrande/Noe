"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { MetricCard } from "./metric-card";

interface Company {
  id: string;
  name: string;
  siret: string;
  address: string;
  city: string;
  nbActiveContracts: number;
}

interface Collaborator {
  id: string;
  firstName: string;
  lastName: string;
  emails: { email: string; type: string }[];
  teamName: string | null;
  contracts: { id: string; startDate: string; endDate: string | null; status: string }[];
}

export function PayFitData() {
  const [company, setCompany] = useState<Company | null>(null);
  const [collaborators, setCollaborators] = useState<Collaborator[] | null>(null);
  const [totalCollaborators, setTotalCollaborators] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/v1/payfit/company")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCompany(data.data);
        } else {
          setError(data.error.message);
        }
      })
      .catch(() => setError("Failed to load company info"));

    fetch("/api/v1/payfit/collaborators")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCollaborators(data.data.collaborators);
          setTotalCollaborators(data.data.totalCollaborators);
        }
      })
      .catch(() => {});
  }, []);

  if (error) {
    return (
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle>PayFit</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-500">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">PayFit</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <MetricCard
          title="Employees"
          value={totalCollaborators}
          subtitle="Active collaborators"
        />
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Company
            </CardTitle>
          </CardHeader>
          <CardContent>
            {company === null ? (
              <Skeleton className="h-8 w-40" />
            ) : (
              <div>
                <p className="text-lg font-bold" style={{ color: "#8B5CF6" }}>
                  {company.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  SIRET: {company.siret} &middot; {company.city}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Employees</CardTitle>
        </CardHeader>
        <CardContent>
          {collaborators === null ? (
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          ) : collaborators.length === 0 ? (
            <p className="text-muted-foreground">No employees found.</p>
          ) : (
            <div className="space-y-3">
              {collaborators.map((collab) => (
                <div
                  key={collab.id}
                  className="flex items-center justify-between py-2 border-b last:border-0"
                >
                  <div>
                    <p className="font-medium">
                      {collab.firstName} {collab.lastName}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {collab.emails?.[0]?.email ?? "No email"} &middot;{" "}
                      {collab.teamName || "No team"}
                    </p>
                  </div>
                  <Badge variant="outline">
                    {collab.contracts?.[0]?.status ?? "unknown"}
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
