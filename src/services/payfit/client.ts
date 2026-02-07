import { env } from "@/lib/env";
import type { PayFitCompany, PayFitCollaborator } from "./types";

const BASE_URL = "https://partner-api.payfit.com";

async function payFitFetch(path: string, init?: RequestInit): Promise<Response> {
  const response = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${env.PAYFIT_API_KEY}`,
      Accept: "application/json",
      ...init?.headers,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    console.error(
      `[PAYFIT] ${response.status} ${response.statusText}: ${body}`
    );
    throw new Error(`PayFit API error: ${response.status}`);
  }

  return response;
}

export async function getCompany(): Promise<PayFitCompany> {
  console.log("[PAYFIT] Fetching company info");
  const response = await payFitFetch(
    `/companies/${env.PAYFIT_COMPANY_ID}`
  );
  return response.json();
}

export async function getCollaborators(): Promise<PayFitCollaborator[]> {
  console.log("[PAYFIT] Fetching collaborators");
  const response = await payFitFetch(
    `/companies/${env.PAYFIT_COMPANY_ID}/collaborators`
  );
  return response.json();
}

export async function checkConnection(): Promise<boolean> {
  try {
    await getCompany();
    return true;
  } catch {
    return false;
  }
}
