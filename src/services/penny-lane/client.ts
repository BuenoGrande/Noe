import { env } from "@/lib/env";
import type {
  PennyLaneUser,
  PennyLaneInvoice,
  PennyLaneCustomer,
  PennyLanePaginatedResponse,
} from "./types";

const BASE_URL = "https://app.pennylane.com/api/external/v2";
const RATE_LIMIT_DELAY_MS = 260; // 4 calls/sec max

let lastCallTime = 0;

async function rateLimitedFetch(
  url: string,
  init?: RequestInit
): Promise<Response> {
  const now = Date.now();
  const elapsed = now - lastCallTime;
  if (elapsed < RATE_LIMIT_DELAY_MS) {
    await new Promise((resolve) =>
      setTimeout(resolve, RATE_LIMIT_DELAY_MS - elapsed)
    );
  }
  lastCallTime = Date.now();

  const response = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${env.PENNYLANE_KEY}`,
      Accept: "application/json",
      ...init?.headers,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    console.error(
      `[PENNY-LANE] ${response.status} ${response.statusText}: ${body}`
    );
    throw new Error(`Penny Lane API error: ${response.status}`);
  }

  return response;
}

export async function getMe(): Promise<PennyLaneUser> {
  console.log("[PENNY-LANE] Fetching /me");
  const response = await rateLimitedFetch(`${BASE_URL}/me`);
  return response.json();
}

export async function getInvoices(
  page: number = 1
): Promise<PennyLanePaginatedResponse<PennyLaneInvoice>> {
  console.log(`[PENNY-LANE] Fetching invoices page=${page}`);
  const response = await rateLimitedFetch(
    `${BASE_URL}/customer_invoices?page=${page}`
  );
  return response.json();
}

export async function getCustomers(
  page: number = 1
): Promise<PennyLanePaginatedResponse<PennyLaneCustomer>> {
  console.log(`[PENNY-LANE] Fetching customers page=${page}`);
  const response = await rateLimitedFetch(
    `${BASE_URL}/customers?page=${page}`
  );
  return response.json();
}
