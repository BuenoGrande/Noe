---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-06-innovation-skipped', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish', 'step-12-complete']
workflowCompleted: true
inputDocuments:
  - 'analysis/brainstorming-session-2026-01-26.md'
workflowType: 'prd'
documentCounts:
  briefs: 0
  research: 0
  brainstorming: 1
  projectDocs: 0
classification:
  projectType: 'SaaS B2B Platform'
  domain: 'Fintech (Financial Analytics)'
  complexity: 'High'
  projectContext: 'Greenfield'
---

# Product Requirements Document - BP-AI

**Author:** Pierre
**Date:** 2026-01-26

## Executive Summary

**Vision:** BP-AI is the "10x CFO" - an AI-powered financial analytics platform that transforms scattered financial data into instant clarity. By connecting to existing tools (Penny Lane, PayFit), it delivers a unified revenue intelligence dashboard that eliminates spreadsheet dependency.

**Core Differentiator:** Trust through recognition. Users see familiar client names, accurate numbers, and can drill from ARR down to individual invoices. The data matches reality - that's the "aha" moment.

**Target Users:**
- **CFO** - Board meeting prep, financial oversight
- **CEO** - Quick investor responses, strategic visibility
- **Accountant** - Data validation, edge case verification
- **Investor** - Due diligence, portfolio monitoring (future)

**MVP Focus:** One company, fully working. Prove that BP-AI replaces spreadsheets for daily financial reporting before scaling to multi-tenant.

## Success Criteria

### User Success

**"Time to Trust" Framework:**
- User sees complete revenue overview within 3 seconds of login
- User recognizes familiar data (client names, recent transactions) on first interaction
- User can answer "How's Q1 looking?" in under 60 seconds

**"Aha!" Moments:**
1. **First View:** Entire ARR curve visible immediately - "Finally, clarity"
2. **Quarter Projections:** Clear milestones showing revenue trajectory - "I know where we're going"
3. **Exploration:** Drill into products, geographies, clients - "This does everything"
4. **Validation:** Data matches reality when diving deep - "This actually works"

### Business Success

**MVP Validation (3 months):**
- Successfully deployed for 1 real enterprise customer
- Penny Lane integration delivering accurate invoice/revenue data
- PayFit integration delivering accurate payroll data
- User can perform core workflows without reverting to spreadsheets

**Growth Indicators (12 months):**
- Interest from VCs seeking portfolio-wide financial visibility
- Ability to onboard additional companies with minimal customization
- Foundation proven for multi-tenant scaling

### Technical Success

| Metric | Target |
|--------|--------|
| **Data Accuracy** | Within 5% variance of source systems |
| **Data Freshness** | Daily sync (MVP), real-time sync (enhancement) |
| **Load Time** | Dashboard renders in < 3 seconds |
| **Hosting** | EU data center (GDPR-compliant) |
| **Uptime** | 99% availability during business hours |

### Measurable Outcomes

- [ ] Revenue Command Center displays accurate ARR within 5% of Penny Lane source
- [ ] Quarter projections calculate correctly from historical data
- [ ] Drill-down from Revenue → Product → Client → Invoice works end-to-end
- [ ] Single test company successfully onboarded and using daily

## Product Scope

### MVP - Minimum Viable Product

**Integrations:**
- Penny Lane (invoices, payment flows, accounting)
- PayFit (payroll, job titles, org structure)

**Core Features:**
- Revenue Command Center (ARR, cash, projections, M/Q/Y toggle)
- Client-Centric View (who is paying us)
- Product-Centric View (what are we selling)
- Full drill-down: Revenue → Product → Client → Invoice
- Revenue segmentation: New Business / Renewals / Churn
- Basic BI: Sales headcount, weighted capacity, net churn, profitability

**UX Requirements:**
- Beautiful zero-setup default
- Progressive disclosure (hover/click reveals depth)
- Instant load / pre-computed data
- Quarter milestones on projection charts

### Growth Features (Post-MVP)

- One-click branded export
- Investor-ready export pack (2-3 chart summary)
- Anomaly radar (auto-detect unusual patterns)
- Event-based alerts (churn threshold, payment delays)
- Connection health dashboard
- Additional integrations beyond Penny Lane + PayFit

### Vision (Future)

- Multi-company portfolio view (for VCs)
- AI-powered insights and recommendations
- Scenario modeling ("What if we lose Client X?")
- Automated business plan generation from financial data
- Integration marketplace (QuickBooks, Xero, Stripe, etc.)

## User Journeys

### Journey 1: CFO Marie - "Board Meeting Confidence"

**Opening Scene:**
Marie is CFO of an 80-person B2B SaaS company. Her VC suggests BP-AI as part of their portfolio best practices - "every company should have this." IT sets up the Penny Lane and PayFit connections. Marie logs in for the first time, skeptical but hopeful.

**Rising Action:**
- **First View:** ARR displayed prominently - the metric that matters most. No clicking required. Marie thinks, "Okay, that looks right..."
- **Validation Test:** She clicks into the current month → expands → sees the full client list. She spots Acme Corp (her biggest client) and clicks.
- **Deep Dive:** Inside Acme's profile, she sees every invoice, payment date, current contract value. The numbers match what she knows.
- **Cash Flow Check:** She glances at cash in bank vs. contracted ARR. The distinction is clear. She nods.

**Climax:**
Marie realizes she didn't have to open a single spreadsheet. The data reflects her reality. The trust moment: "This is definitely working."

**Resolution:**
Marie screenshots the Q1 projection view, drops it into her board deck, and closes her laptop with 90 minutes saved. She presents confidently the next day.

---

### Journey 2: CEO David - "The 3-Minute Response"

**Opening Scene:**
David is CEO with back-to-back meetings all day. Between calls, his phone buzzes - an investor texts: "How's Q1 looking?" He has exactly 3 minutes before his next meeting.

**Rising Action:**
- **Phone Check:** David opens BP-AI on his phone. The app loads instantly - no spinner, no "loading your data..."
- **Immediate Answer:** Q1 projection is visible with quarter milestone marked on the revenue curve. He sees: "Q1 projected: €2.4M"
- **Quick Validation:** He taps the Q1 marker - gets an isolated quarter view showing monthly breakdown.

**Climax:**
Within 60 seconds, David has his answer. He screenshots the Q1 view and texts it to the investor: "Looking strong - €2.4M projected. Chart attached."

**Resolution:**
David walks into his next meeting confident. The investor replies with a thumbs up. No spreadsheets were opened. No CFO was interrupted.

---

### Journey 3: Accountant Thomas - "The Skeptic's Validation"

**Opening Scene:**
Thomas is the company accountant. The CFO just asked him to "validate BP-AI before we use it for board reporting." Thomas doesn't trust any tool until he's tried to break it. He opens BP-AI with crossed arms.

**Rising Action:**
- **Test #1 - Recent Change:** Thomas knows they updated Acme Corp's contract last week from €50k to €55k. He searches for Acme, opens the client profile. The new amount is there. "Okay, it caught that..."
- **Test #2 - Payment Timing:** He knows BigCo paid late last month - invoice sent 45 days before payment. He clicks into BigCo's payment history. He sees: "Invoice: Dec 1 → Paid: Jan 15 (45 days)." The delay is explicit.
- **Test #3 - Edge Case:** He checks a client who churned 2 months ago. They're correctly marked as churned, not showing in active revenue.

**Climax:**
Thomas runs out of things to catch. The edges are handled. The changes he knows about are reflected. He uncrosses his arms.

**Resolution:**
Thomas tells the CFO: "The data checks out. I'll monitor it monthly, but we can use it." BP-AI has earned the skeptic's trust.

---

### Journey 4: Investor Sarah - "30-Minute Due Diligence"

**Opening Scene:**
Sarah is a VC partner. A founder just gave her view-only access to their BP-AI dashboard for due diligence. She has 30 minutes before her partner meeting. She's seen founders cherry-pick data before - she trusts nothing.

**Rising Action:**
- **Revenue Sanity Check:** She looks at total ARR, then immediately checks revenue segmentation: €800k committed annual, €200k month-to-month. "Okay, 80% is stable - that's good."
- **Concentration Risk:** She finds client concentration view. Top 3 clients = 25% of revenue. No single client over 12%. "Healthy distribution."
- **Churn Reality:** She checks net churn: -2% (more upsell than churn). She clicks into churned clients to see who left and why amounts.
- **Growth Trajectory:** She looks at the 12-month trend. Consistent upward slope. Quarter markers show acceleration.

**Climax:**
Sarah finds nothing hidden. The data BP-AI surfaces proactively (concentration, churn, commitment breakdown) is exactly what she would have dug for. The founder has nothing to hide.

**Resolution:**
Sarah exports the 3 key charts, brings them to her partner meeting, and recommends moving forward. "Their financials are clean and they're using modern tooling - good sign."

---

### Journey 5: Admin Alex - "First-Time Setup"

**Opening Scene:**
Alex is IT/Operations at the company. The CEO heard about BP-AI from their VC and asked Alex to "get it set up." Alex has 30 minutes allocated and has the Penny Lane and PayFit admin credentials ready.

**Rising Action:**
- **Account Creation:** Alex signs up, creates company workspace. Clean onboarding - no feature tour overload.
- **Integration #1 - Penny Lane:** Alex clicks "Connect Penny Lane" → OAuth flow → authorizes access → connection status turns green. "That was easy."
- **Integration #2 - PayFit:** Same flow. Connect → Authorize → Green status.
- **Initial Sync:** BP-AI shows "Syncing your data... This may take a few minutes for initial load." Alex grabs coffee.
- **Verification:** Alex returns, dashboard is populated. Revenue numbers appear. Connection health shows both integrations green.

**Climax:**
Setup took 15 minutes, not 30. No support ticket needed. Alex sends the CFO an invite link.

**Resolution:**
Alex adds BP-AI to the monthly "check integrations" reminder and moves on. The tool maintains itself.

---

### Journey Requirements Summary

| Capability Area | Revealed By Journeys |
|-----------------|----------------------|
| Revenue Command Center (ARR, cash, projections) | Marie, David, Sarah |
| Client drill-down (list → profile → invoices) | Marie, Thomas |
| Quarter milestones & isolation view | David |
| Payment timeline with delays | Thomas |
| Revenue segmentation (committed/at-risk) | Sarah |
| Client concentration view | Sarah |
| Net churn with drill-down | Sarah |
| OAuth integration flow | Alex |
| Connection health indicators | Alex |
| Mobile-responsive, instant load | David |
| Export/screenshot-ready charts | David, Sarah |
| Search functionality | Thomas |
| Churn status tracking | Thomas |
| User invitation system | Alex |

## Domain-Specific Requirements

### Compliance & Regulatory (MVP)

| Requirement | Approach |
|-------------|----------|
| **GDPR Compliance** | Required - EU data residency |
| **Data Hosting** | OVH server in France |
| **Data Deletion** | Must delete customer data on churn (basic implementation) |

### Technical Constraints (MVP)

| Constraint | Approach |
|------------|----------|
| **Access Control** | No authentication for MVP (single-company deployment) |
| **Audit Trail** | Deferred - not for MVP |
| **Encryption** | Standard HTTPS + encrypted at rest |

### Deferred Requirements (Post-MVP)

**Security & Access:**
- Authentication and login system
- Role-based access control (RBAC)
- SSO / enterprise authentication
- Detailed audit logging (who viewed what, when)

**Business Features:**
- Subscription tiers and billing
- Multi-company portfolio view
- Additional integrations beyond Penny Lane + PayFit

**Compliance:**
- Advanced data retention policies
- Compliance certifications (SOC 2, etc.)

## SaaS B2B Specific Requirements

### Project-Type Overview

BP-AI is a B2B SaaS financial analytics platform designed for company leadership (CFOs, CEOs) and their trusted advisors (accountants, investors). The MVP prioritizes depth over breadth: one company, fully working, before scaling.

### Tenant Model

| Aspect | MVP Approach | Post-MVP |
|--------|--------------|----------|
| **Architecture** | Single-tenant focus | Multi-tenant infrastructure |
| **Data Isolation** | One company = one deployment | Logical tenant separation |
| **Onboarding** | Manual setup | Self-service provisioning |

### Access & Permissions

| Aspect | MVP Approach | Post-MVP |
|--------|--------------|----------|
| **Authentication** | None (direct access) | Login, SSO, OAuth options |
| **Authorization** | Open access | Role-based (CFO, Viewer, Admin) |
| **User Management** | Not implemented | Team management, permissions matrix |
| **Audit Trail** | Not implemented | Who viewed what, when |

### Integration Architecture

| Integration | Data Pulled | Purpose |
|-------------|-------------|---------|
| **Penny Lane** | Invoices, payments, accounting entries | Revenue, cash flow, client data |
| **PayFit** | Payroll, job titles, tenure | Sales capacity, headcount metrics |

**Integration Approach:**
- OAuth-based connection flow
- Daily sync (batch processing)
- Connection health indicators (green/orange status)
- Graceful error handling with user-friendly messages

*Compliance requirements covered in Domain-Specific Requirements section.*

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**Approach:** Problem-Solving MVP
The MVP proves that BP-AI can replace spreadsheet-based financial reporting for one real company. Success = the test company uses it daily without reverting to Excel.

**MVP Validation Criteria:**
- Data accuracy within 5% of source systems
- Core workflows complete without workarounds
- User trust established through familiar data recognition

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- CFO Marie: Board meeting prep with accurate ARR and projections
- CEO David: Quick investor response with screenshot-ready charts
- Accountant Thomas: Data validation through edge case testing

**Must-Have Capabilities:**
1. Penny Lane integration (invoices, payments, accounting)
2. PayFit integration (payroll, headcount)
3. Revenue Command Center (ARR, cash, M/Q/Y toggle)
4. Client-Centric View with drill-down to invoice level
5. Product-Centric View with revenue breakdown
6. Revenue segmentation (New/Renewal/Churn)
7. Quarter milestones on projection charts

**Explicitly Out of MVP:**
- Authentication/login system
- User management and invitations
- Export functionality
- Alerts and notifications
- Connection health dashboard (simple status only)

### Post-MVP Features

**Phase 2 (Growth):**
- Authentication and user management
- One-click branded export
- Investor-ready export pack
- Connection health dashboard
- Event-based alerts (churn threshold, payment delays)
- Anomaly radar

**Phase 3 (Expansion):**
- Multi-company portfolio view (VC use case)
- AI-powered insights and recommendations
- Scenario modeling
- Additional integrations (QuickBooks, Xero, Stripe)
- Role-based access control

### Risk Mitigation Strategy

| Risk Type | Primary Risk | Mitigation |
|-----------|--------------|------------|
| **Technical** | Penny Lane/PayFit API limitations | Validate API capabilities early; design for graceful degradation |
| **Market** | Users don't trust automated data | Build trust through familiar client names; full drill-down to source |
| **Resource** | Solo developer bandwidth | Focus ruthlessly on MVP; no auth, no export, no alerts |

## Functional Requirements

### Data Integration

- FR1: System can connect to Penny Lane via OAuth authorization flow
- FR2: System can retrieve invoices, payments, and accounting entries from Penny Lane
- FR3: System can connect to PayFit via OAuth authorization flow
- FR4: System can retrieve payroll, job titles, and tenure data from PayFit
- FR5: System can perform daily batch sync from connected sources
- FR6: System can display integration connection status (connected/error)

### Revenue Analytics

- FR7: User can view total ARR prominently on dashboard
- FR8: User can view cash collected (distinct from contracted ARR)
- FR9: User can view revenue projections based on historical data
- FR10: User can toggle between Monthly, Quarterly, and Yearly time views
- FR11: User can see quarter milestones marked on projection charts
- FR12: User can view isolated quarter view (Q1, Q2, etc.)
- FR13: User can view revenue segmented by New Business / Renewals / Churn
- FR14: User can view contracted vs. at-risk revenue distinction

### Client Analytics

- FR15: User can view list of all clients with revenue amounts
- FR16: User can view individual client profile with contract details
- FR17: User can view all invoices for a specific client
- FR18: User can view payment history with dates for a client
- FR19: User can see payment delays (days between invoice sent and payment received)
- FR20: User can see client churn status (active/churned)
- FR21: User can view client concentration (top clients as % of revenue)
- FR22: User can search for clients by name

### Product Analytics

- FR23: User can view revenue breakdown by product line
- FR24: User can drill from product to list of clients purchasing that product
- FR25: User can view product revenue trends over time periods

### Business Intelligence

- FR26: User can view sales team headcount (derived from PayFit)
- FR27: User can view weighted sales capacity (tenure-based: <6mo=0.25, 6-12mo=0.5, >12mo=1.0 FTE)
- FR28: User can view net churn rate (churn minus upsell as % of portfolio)
- FR29: User can view profitability trend direction

### Navigation & Exploration

- FR30: User can drill down through hierarchy: Revenue → Product → Client → Invoice
- FR31: User can reveal additional details through progressive disclosure (hover/click)
- FR32: User can access pre-computed dashboard with instant load (<3 seconds)
- FR33: User can use dashboard on mobile devices (responsive layout)

## Non-Functional Requirements

### Performance

| Metric | Target | Rationale |
|--------|--------|-----------|
| **Dashboard Load** | < 3 seconds | "Checking numbers is stressful - fast = reassuring" |
| **Data Pre-computation** | Background processing | Dashboard reads from pre-computed aggregates, not live queries |
| **Mobile Performance** | Responsive on 4G connection | CEO David needs quick access between meetings |

### Security & Compliance

| Requirement | Target | Rationale |
|-------------|--------|-----------|
| **Data Residency** | EU (OVH France) | GDPR compliance for EU data subjects |
| **Encryption in Transit** | HTTPS/TLS | Standard security practice |
| **Encryption at Rest** | AES-256 or equivalent | Protect stored financial data |
| **API Credentials** | Secure storage (not plaintext) | OAuth tokens from Penny Lane/PayFit |
| **Data Deletion** | Delete on customer churn | GDPR right to erasure |

*Note: Authentication deferred for MVP - single trusted deployment.*

### Integration Reliability

| Requirement | Target | Rationale |
|-------------|--------|-----------|
| **Sync Frequency** | Daily batch | Balance freshness vs. API load |
| **Sync Failure Handling** | Retry with exponential backoff | Graceful degradation |
| **Connection Status** | Visible indicator (green/orange) | User knows if data is current |
| **API Rate Limits** | Respect source system limits | Avoid getting blocked |

### Data Accuracy

| Requirement | Target | Rationale |
|-------------|--------|-----------|
| **Revenue Accuracy** | Within 5% of source systems | The core value proposition |
| **Data Freshness** | Maximum 24 hours stale | Daily sync ensures reasonable currency |
| **Audit Trail** | Transaction-level source links | Every number traceable to invoice |

### Availability

| Requirement | Target | Rationale |
|-------------|--------|-----------|
| **Uptime** | 99% during business hours (Mon-Fri, 8am-8pm CET) | When users need it |
| **Planned Maintenance** | Outside business hours | Don't interrupt work |
