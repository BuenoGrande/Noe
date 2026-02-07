import { successResponse, errorResponse } from "@/lib/api-response";
import { getCollaborators } from "@/services/payfit/client";

export async function GET() {
  try {
    const collaborators = await getCollaborators();
    return successResponse(
      {
        collaborators,
        totalCollaborators: collaborators.length,
      },
      { syncedAt: new Date().toISOString() }
    );
  } catch (error) {
    console.error("[API] /payfit/collaborators:", error);
    return errorResponse(
      "COLLABORATORS_FETCH_FAILED",
      "Failed to fetch collaborators from PayFit"
    );
  }
}
