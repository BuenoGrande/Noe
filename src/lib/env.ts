import { z } from "zod";

const envSchema = z.object({
  PENNY_LANE_API_KEY: z.string().min(1, "PENNY_LANE_API_KEY is required"),
  PAYFIT_API_KEY: z.string().min(1, "PAYFIT_API_KEY is required"),
  PAYFIT_COMPANY_ID: z.string().min(1, "PAYFIT_COMPANY_ID is required"),
});

type Env = z.infer<typeof envSchema>;

let _env: Env | null = null;

function getEnv(): Env {
  if (_env) return _env;

  const result = envSchema.safeParse({
    PENNY_LANE_API_KEY: process.env.PENNY_LANE_API_KEY,
    PAYFIT_API_KEY: process.env.PAYFIT_API_KEY,
    PAYFIT_COMPANY_ID: process.env.PAYFIT_COMPANY_ID,
  });

  if (!result.success) {
    const formatted = result.error.issues
      .map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`)
      .join("\n");
    console.error(
      `[ENV] Missing or invalid environment variables:\n${formatted}\n\nSee .env.example for instructions.`
    );
    throw new Error("Invalid environment variables");
  }

  _env = result.data;
  return _env;
}

/** Lazily validated environment — throws on first access if vars are missing. */
export const env = new Proxy({} as Env, {
  get(_, prop: string) {
    return getEnv()[prop as keyof Env];
  },
});
