import { NextResponse } from "next/server";

interface SuccessResponse<T> {
  success: true;
  data: T;
  meta?: { syncedAt: string };
}

interface ErrorResponse {
  success: false;
  error: { code: string; message: string };
}

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

export function successResponse<T>(data: T, meta?: { syncedAt: string }) {
  const body: SuccessResponse<T> = { success: true, data };
  if (meta) body.meta = meta;
  return NextResponse.json(body);
}

export function errorResponse(
  code: string,
  message: string,
  status: number = 500
) {
  const body: ErrorResponse = { success: false, error: { code, message } };
  return NextResponse.json(body, { status });
}
