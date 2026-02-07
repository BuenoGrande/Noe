import { successResponse, errorResponse } from "@/lib/api-response";
import { getCompany } from "@/services/payfit/client";

export async function GET() {
  try {
    const company = await getCompany();
    return successResponse(company, {
      syncedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[API] /payfit/company:", error);
    return errorResponse(
      "COMPANY_FETCH_FAILED",
      "Failed to fetch company info from PayFit"
    );
  }
}
