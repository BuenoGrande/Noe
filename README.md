# BP-AI

Dashboard connecting **Penny Lane** (accounting) and **PayFit** (HR/payroll) to display business data in one place.

Built with Next.js 16, TypeScript, Tailwind 4, and shadcn/ui.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Then edit .env.local with your real API keys (see below)

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Only two keys are needed in `.env.local`:

| Variable | Where to get it |
|----------|----------------|
| `PENNYLANE_KEY` | [Penny Lane](https://app.pennylane.com) > Settings > Integrations > API tokens |
| `PAYFIT_KEY` | PayFit partner portal |

## API Integrations

### Penny Lane (Accounting)

| Endpoint | Route | Description |
|----------|-------|-------------|
| `GET /api/v1/penny-lane/status` | Connection test via `/me` | |
| `GET /api/v1/penny-lane/invoices` | List customer invoices | Supports `?page=N` |
| `GET /api/v1/penny-lane/customers` | List customers | Supports `?page=N` |

- Base URL: `https://app.pennylane.com/api/external/v2`
- **Must use v2 endpoints** — our API key has readonly scopes only
- Rate limited to 4 calls/sec (handled automatically)

### PayFit (HR/Payroll)

| Endpoint | Route | Description |
|----------|-------|-------------|
| `GET /api/v1/payfit/status` | Connection test | |
| `GET /api/v1/payfit/company` | Company info | |
| `GET /api/v1/payfit/collaborators` | List employees | |

- Base URL: `https://partner-api.payfit.com`
- Company ID: `5e21d632dd5bbd76b90820df` (hardcoded)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                     # Root layout (Inter font)
│   ├── page.tsx                       # Dashboard page
│   ├── globals.css                    # Tailwind + shadcn tokens
│   └── api/v1/
│       ├── penny-lane/               # 3 routes: status, invoices, customers
│       └── payfit/                    # 3 routes: status, company, collaborators
├── components/
│   ├── dashboard/                     # Dashboard-specific components
│   │   ├── connection-status.tsx      # Green/red dots per integration
│   │   ├── metric-card.tsx            # Reusable metric card
│   │   ├── penny-lane-data.tsx        # Invoice & customer display
│   │   └── payfit-data.tsx            # Employee & company display
│   └── ui/                            # shadcn/ui components (card, badge, skeleton)
├── services/
│   ├── penny-lane/
│   │   ├── client.ts                  # HTTP client with rate limiter
│   │   └── types.ts
│   └── payfit/
│       ├── client.ts                  # HTTP client
│       └── types.ts
└── lib/
    ├── env.ts                         # Zod validation of env vars
    ├── api-response.ts                # Standardized { success, data } / { success, error }
    ├── format-currency.ts             # Integer cents to EUR string
    └── utils.ts                       # cn() helper (shadcn)
```

## Conventions

- **API responses** always use: `{ success: true, data, meta? }` or `{ success: false, error: { code, message } }`
- **Currency** stored as integer cents, formatted with `formatCurrency()`
- **Logging** uses prefixed format: `[PENNY-LANE]`, `[PAYFIT]`, `[API]`, `[ENV]`
- **Naming**: Components PascalCase, utilities kebab-case, functions camelCase
