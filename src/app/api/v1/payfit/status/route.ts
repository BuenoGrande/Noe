import { successResponse, errorResponse } from "@/lib/api-response";
import { getCompany } from "@/services/payfit/client";

export async function GET() {
  try {
    const company = await getCompany();
    return successResponse(
      {
        connected: true,
        companyName: company.name,
      },
      { syncedAt: new Date().toISOString() }
    );
  } catch (error) {
    console.error("[API] /payfit/status:", error);
    return errorResponse(
      "PAYFIT_CONNECTION_FAILED",
      "Failed to connect to PayFit",
      502
    );
  }
}
