import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@/lib/api-response";
import { getCustomers } from "@/services/penny-lane/client";

export async function GET(request: NextRequest) {
  try {
    const page = Number(request.nextUrl.searchParams.get("page") ?? "1");
    const data = await getCustomers(page);
    return successResponse(
      {
        customers: data.customers ?? [],
        totalPages: data.total_pages,
        currentPage: data.current_page,
        totalCustomers: data.total_customers ?? 0,
      },
      { syncedAt: new Date().toISOString() }
    );
  } catch (error) {
    console.error("[API] /penny-lane/customers:", error);
    return errorResponse(
      "CUSTOMERS_FETCH_FAILED",
      "Failed to fetch customers from Penny Lane"
    );
  }
}
