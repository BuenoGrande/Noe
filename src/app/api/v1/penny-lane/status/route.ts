import { successResponse, errorResponse } from "@/lib/api-response";
import { getMe } from "@/services/penny-lane/client";

export async function GET() {
  try {
    const user = await getMe();
    return successResponse(
      {
        connected: true,
        companyName: user.company_name,
        email: user.email,
      },
      { syncedAt: new Date().toISOString() }
    );
  } catch (error) {
    console.error("[API] /penny-lane/status:", error);
    return errorResponse(
      "PENNY_LANE_CONNECTION_FAILED",
      "Failed to connect to Penny Lane",
      502
    );
  }
}
