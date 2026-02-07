import { z } from "zod";

const envSchema = z.object({
  PENNYLANE_KEY: z.string().min(1, "PENNYLANE_KEY is required"),
  PAYFIT_KEY: z.string().min(1, "PAYFIT_KEY is required"),
});

type Env = z.infer<typeof envSchema>;

let _env: Env | null = null;

function getEnv(): Env {
  if (_env) return _env;

  const result = envSchema.safeParse({
    PENNYLANE_KEY: process.env.PENNYLANE_KEY,
    PAYFIT_KEY: process.env.PAYFIT_KEY,
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
