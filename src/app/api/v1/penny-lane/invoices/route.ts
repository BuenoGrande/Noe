import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@/lib/api-response";
import { getInvoices } from "@/services/penny-lane/client";

export async function GET(request: NextRequest) {
  try {
    const page = Number(request.nextUrl.searchParams.get("page") ?? "1");
    const data = await getInvoices(page);
    return successResponse(
      {
        invoices: data.invoices ?? [],
        totalPages: data.total_pages,
        currentPage: data.current_page,
        totalInvoices: data.total_invoices ?? 0,
      },
      { syncedAt: new Date().toISOString() }
    );
  } catch (error) {
    console.error("[API] /penny-lane/invoices:", error);
    return errorResponse(
      "INVOICES_FETCH_FAILED",
      "Failed to fetch invoices from Penny Lane"
    );
  }
}
