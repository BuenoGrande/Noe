# BP-AI — Claude Code Context

## Project

Next.js 16 + TypeScript + Tailwind 4 + shadcn/ui dashboard connecting Penny Lane (accounting) and PayFit (HR/payroll) APIs.

## API Constraints (CRITICAL)

### Penny Lane
- **Base URL:** `https://app.pennylane.com/api/external/v2`
- **Auth:** `Authorization: Bearer $PENNYLANE_KEY`
- **MUST use v2 endpoints.** The API key has readonly scopes only. v1 endpoints require write permission and will fail with a "Scope" error.
- **Rate limit:** 4 calls/sec — enforced with 260ms delay in client
- **Endpoints:** `GET /me`, `GET /customer_invoices`, `GET /customers`

### PayFit
- **Base URL:** `https://partner-api.payfit.com`
- **Auth:** `Authorization: Bearer $PAYFIT_KEY`
- **Company ID:** `5e21d632dd5bbd76b90820df` (hardcoded in client)
- **Endpoints:** `GET /companies/{id}`, `GET /companies/{id}/collaborators`
- **Collaborators response is nested:** the API returns `{ collaborators: [...] }`, not a flat array

## Environment Variables

Only two keys needed — set in `.env.local`:
```
PENNYLANE_KEY=...
PAYFIT_KEY=...
```

## Conventions

- API responses: `{ success: true, data: T, meta?: { syncedAt } }` / `{ success: false, error: { code, message } }`
- Currency as integer cents everywhere, formatted with `formatCurrency()`
- Logging: `[PENNY-LANE]`, `[PAYFIT]`, `[API]`, `[ENV]` prefixes
- Components: PascalCase, utils: kebab-case, functions: camelCase

## File Structure

- `src/services/penny-lane/` — API client + types
- `src/services/payfit/` — API client + types
- `src/app/api/v1/` — 6 API routes (3 per integration)
- `src/components/dashboard/` — UI components
- `src/lib/` — env validation, api-response helpers, format-currency
