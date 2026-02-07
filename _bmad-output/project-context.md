---
project_name: 'BP-AI'
date: '2026-02-02'
last_updated: '2026-02-02'
---

# Project Context for AI Agents

_Critical rules and patterns for implementing BP-AI. Read this before writing any code._

---

## Technology Stack & Versions

| Technology | Version | Notes |
|------------|---------|-------|
| Next.js | 16.x | App Router, Server Components |
| TypeScript | 5.x | Strict mode enabled |
| Node.js | 20+ LTS | Runtime |
| PostgreSQL | 16.x | Primary database |
| Drizzle ORM | 0.29+ | Type-safe ORM |
| Tailwind CSS | 4.x | Utility-first styling |
| shadcn/ui | latest | Copy-paste components |
| Tremor | 3.x | Chart components |
| Zustand | 5.x | Client state only |
| TanStack Query | 5.x | Server state + cache |
| Zod | 3.x | Runtime validation |

---

## Critical Implementation Rules

### Currency & Financial Data

- **ALWAYS store currency as integer cents** - never use floats for money
- Database: `amount_cents INTEGER` not `amount DECIMAL`
- API: `{ "amountCents": 285000 }` not `{ "amount": 2850.00 }`
- UI: Format with `formatCurrency(cents)` → `€2,850.00`

### API Response Format

**All endpoints MUST use this exact wrapper:**

```typescript
// Success
{ success: true, data: T, meta?: { syncedAt: string } }

// Error
{ success: false, error: { code: string, message: string } }
```

Never return unwrapped data or different error formats.

### Database Naming

- Tables: `snake_case`, plural → `sync_invoices`, `analytics_arr`
- Columns: `snake_case` → `client_id`, `created_at`
- Foreign keys: `{table_singular}_id` → `invoice_id`
- **Always include** `created_at` and `updated_at` timestamps

### Code Naming

- Components: `PascalCase` → `MetricCard.tsx`
- Utilities: `kebab-case` → `format-currency.ts`
- Functions/variables: `camelCase` → `getClientById`
- Constants: `SCREAMING_SNAKE` → `API_BASE_URL`
- Zod schemas: `camelCase` + Schema → `clientSchema`

### Component Boundaries

| Component | Can Import | Cannot Import |
|-----------|------------|---------------|
| `app/` pages | `components/`, `lib/`, `hooks/`, `stores/` | `services/`, `db/` |
| `components/ui/` | `lib/utils` only | Other components |
| `api/` routes | `services/`, `db/`, `lib/` | `components/`, `hooks/` |
| `services/` | `db/`, `lib/` | `components/`, `app/` |

### Data Architecture

- **`sync_*` tables**: Raw data from integrations (normalized)
- **`analytics_*` tables**: Pre-computed aggregates (denormalized)
- Dashboard reads from `analytics_*` (fast)
- Drill-down reads from `sync_*` (detailed)
- **Never query `sync_*` for dashboard metrics**

### State Management

- **Server Components**: All dashboard data fetching
- **Zustand**: UI state only (time period toggle, filters)
- **TanStack Query**: Client-side cache for drill-downs

```typescript
// Query key pattern - ALWAYS use factory
const queryKeys = {
  clients: ['clients'] as const,
  client: (id: string) => ['clients', id] as const,
}
```

### Error Handling

```typescript
// API routes - ALWAYS wrap in try-catch
export async function GET() {
  try {
    const data = await fetchData()
    return Response.json({ success: true, data })
  } catch (error) {
    console.error('[API] /endpoint:', error)
    return Response.json(
      { success: false, error: { code: 'FETCH_FAILED', message: 'Failed' } },
      { status: 500 }
    )
  }
}
```

### Logging Format

```typescript
// Always prefix with [AREA]
console.log('[SYNC] Starting Penny Lane sync')
console.error('[API] /clients/[id]:', error)
console.warn('[AUTH] OAuth token expiring')
```

---

## Testing Rules

- Tests in `__tests__/` mirroring `src/` structure
- Name pattern: `ComponentName.test.tsx`
- Use fixtures from `__tests__/fixtures/`
- Mock external APIs, never call real endpoints

---

## Security Rules

- **OAuth tokens**: AES-256 encrypted in database
- **Never log** tokens, credentials, or PII
- **CORS**: Production domain only
- **Rate limiting**: 100 req/min per IP

---

## Anti-Patterns to Avoid

| Don't | Do Instead |
|-------|------------|
| `amount: 2850.00` | `amountCents: 285000` |
| Return raw data from API | Use success/error wrapper |
| Query `sync_*` for dashboard | Query `analytics_*` tables |
| Import `db/` in components | Call API routes |
| Store tokens in plaintext | Encrypt with AES-256 |
| Use `any` type | Define proper TypeScript types |
| Create ad-hoc query keys | Use query key factory |

---

## File Locations

| What | Where |
|------|-------|
| Dashboard components | `src/components/dashboard/` |
| Client components | `src/components/clients/` |
| shadcn/ui components | `src/components/ui/` |
| API routes | `src/app/api/v1/` |
| Database schema | `src/db/schema/` |
| Integration services | `src/services/penny-lane/`, `services/payfit/` |
| Zustand stores | `src/stores/` |
| Utility functions | `src/lib/` |

---

**Remember:** This is a financial application. Accuracy and consistency are critical. When in doubt, check the architecture document at `_bmad-output/planning-artifacts/architecture.md`.
