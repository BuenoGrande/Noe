---
stepsCompleted: [1, 2, 3, 4]
inputDocuments: []
session_topic: 'BP-AI MVP Feature Set & Technical Architecture'
session_goals: 'Thorough MVP feature list, Technical architecture possibilities'
selected_approach: 'AI-Recommended'
techniques_used: ['Question Storming', 'Role Playing', 'Cross-Pollination']
ideas_generated: 24
session_active: false
workflow_completed: true
---

# Brainstorming Session Results

**Facilitator:** Pierre
**Date:** 2026-01-26

## Session Overview

**Topic:** BP-AI MVP Feature Set & Technical Architecture

**Goals:**
1. Thorough MVP feature list - validate and expand existing vision
2. Technical architecture possibilities - how to build this

### Product Context

**Core Concept:** AI-powered "10x/100x CFO" - financial analysis platform that connects to existing financial tools via API, with AI agents fetching data to power intelligent dashboards with drill-down capabilities.

### Initial Revenue Tracking Features Identified:

| Category | Feature |
|----------|---------|
| **Temporal Views** | Revenue across time, ARR vs. cash in bank |
| **Revenue Types** | Software, Services, Subventions, etc. |
| **Client Categories** | New Business, Renewals, Churn, Contract certainty (committed vs. at-risk) |
| **Projections** | Historical extrapolation, seasonality, sales efficiency modeling |
| **Sales Weighting** | <6mo = 0.25 FTE, 6-12mo = 0.5 FTE, >12mo = 1.0 FTE |
| **Geographic** | Client location mapping, regional performance |
| **Product Lines** | Revenue by business unit (via GL accounting codes) |
| **Churn Analysis** | Gross churn, upsell/expansion, net churn |

### UX Core Principle
Multi-dimensional data pivoting - view by client, by product, by time, by geography. Zoom in/out. Superior to spreadsheet navigation.

---

## Technique Selection

**Approach:** AI-Recommended Techniques
**Analysis Context:** BP-AI MVP Feature Set & Technical Architecture

**Recommended Techniques:**
1. **Question Storming** (Deep) - Generate questions before answers to reveal gaps and validate thinking
2. **Role Playing** (Collaborative) - Embody CFO, accountant, CEO, investor perspectives
3. **Cross-Pollination** (Creative) - Learn from Stripe, Bloomberg, Plaid, Notion patterns

**AI Rationale:** User has strong existing vision - techniques chosen to stress-test assumptions, ensure stakeholder completeness, and incorporate proven industry patterns.

---

## Technique Execution Results

### Technique 1: Question Storming

**Focus Areas Explored:**
- User intent and workflow
- Data conflicts and resolution

**Key Questions Surfaced:**
- Is BP-AI a "dig in" tool or an "export and share" tool?
- What if the user is technically savvy but new to the company?
- What happens when a user finds something alarming - what's their next action?
- What if a client uses two invoicing tools and neither is "source of truth"?
- What happens when CRM says deal closed but accounting hasn't recorded payment?
- How do you avoid double-counting when client connects QuickBooks AND Stripe?
- Who is "right" when there's a discrepancy - BP-AI or the source system?

**Breakthrough: Data Philosophy Defined**

| Principle | Implication |
|-----------|-------------|
| **Opinionated surface, transparent depth** | Clean dashboard, click for "why" |
| **Contract ≠ Cash is VISIBLE** | Not hidden in details - front and center |
| **Payment delay = explicit metric** | "Invoice sent 45 days ago, unpaid" |
| **Transaction = ground truth** | Bank wins over CRM, always |
| **Self-describing dashboard** | Labels must prevent misinterpretation |

---

### Technique 2: Role Playing

**Personas Explored:**

#### CFO Marie (Board meeting in 48 hours)
**Needs:**
- Revenue curve immediately visible
- ARR + cash collected this month
- Top clients recognizable (trust anchor)
- One-click depth into any number

**Deal Breakers:**
- Any inconsistency with known data
- Can't find biggest client
- Too complicated / not intuitive

**Features Generated:**
1. Revenue Command Center
2. Trust Through Recognition (familiar clients visible)
3. One-Click Depth

---

#### Accountant Thomas (Skeptical validator)
**Validation Method:**
- Checks RECENT KNOWN CHANGES - did price update show? Did payment appear? Did churn register?
- Tests the edges, not the totals

**Needs:**
- Per-client monthly payment history
- Exact payment dates
- Payment delays visible

**Features Generated:**
4. Change Detection / Audit Trail
5. Client Payment Timeline

---

#### CEO David (3 minutes between meetings)
**Needs:**
- Answer "How's Q1 looking?" in 3 minutes
- Screenshot-ready quarter view
- Instant load - no spinners

**Insight:** Checking numbers is stressful. Fast = reassuring. Slow = panic amplified.

**Features Generated:**
6. Quarter Milestones on Projection
7. One-Click Quarter View (screenshot-ready)
8. Instant Load / Pre-Computed

---

#### Investor Sarah (Due diligence, trusts nothing)
**Looks For:**
- Revenue security: committed annual vs month-to-month at risk
- Client concentration (red flag if top 3 = 60%)
- What founder might be hiding

**Needs:**
- 2-3 charts that tell the full story for partner meeting

**Features Generated:**
9. Revenue Security Segmentation
10. Client Concentration View
11. Investor-Ready Export Pack

---

### Technique 3: Cross-Pollination

#### From Stripe Dashboard
- **Adopted:** Dual real-time ticker (contracts + cash), one-click branded export, anomaly radar
- **Rejected:** Developer-friendly API (this is for business people)

**Features Generated:**
12. Dual Real-Time Ticker
13. One-Click Branded Export
14. Anomaly Radar

**Design Principle:** BP-AI is Read-Only - a lens, not a lever. No sandbox needed.

---

#### From Bloomberg Terminal
- **Adopted:** Event-based alerts, comparison views
- **Rejected:** High density, keyboard shortcuts, command line (users won't live in this app)

**Features Generated:**
15. Event-Based Alerts
16. Product Comparison View

**Design Principle:** Occasional Use, Perfect Defaults. Don't expect customization.

---

#### From Plaid
- **Adopted:** Connection health visibility, smart error diagnosis, proactive notifications

**Features Generated:**
17. Connection Health Dashboard
18. Smart Error Diagnosis
19. Proactive Break Notification

**MVP Scope Decision:** Start with PayFit + Penny Lane only.

---

#### From Notion
- **Adopted:** Beautiful defaults, progressive disclosure, consistent frame, time toggle, full depth trail
- **Rejected:** Customizable dashboards (users won't modify - our job is perfect defaults)

**Features Generated:**
20. Beautiful Zero-Setup Default
21. Progressive Disclosure on Hover/Click
22. Consistent Frame, Changing Focus
23. M/Q/Y Time Toggle
24. Full Depth Trail: Revenue → Product → Client → Invoice

**Design Principle:** Same View, Different Lens - time periods, not separate templates.

---

## Idea Organization by Theme

### Theme 1: Core Dashboard Experience
| # | Feature | Source |
|---|---------|--------|
| 1 | Revenue Command Center | CFO Marie |
| 20 | Beautiful Zero-Setup Default | Notion |
| 8 | Instant Load / Pre-Computed | CEO David |
| 12 | Dual Real-Time Ticker | Stripe |
| 23 | M/Q/Y Time Toggle | Notion |
| 6 | Quarter Milestones on Projection | CEO David |

### Theme 2: Trust & Transparency
| # | Feature | Source |
|---|---------|--------|
| 2 | Trust Through Recognition | CFO Marie |
| 3 | One-Click Depth | CFO Marie |
| 4 | Change Detection / Audit Trail | Accountant Thomas |
| 24 | Full Depth Trail | Notion |
| 9 | Revenue Security Segmentation | Investor Sarah |
| 10 | Client Concentration View | Investor Sarah |

### Theme 3: Export & Sharing
| # | Feature | Source |
|---|---------|--------|
| 7 | One-Click Quarter View | CEO David |
| 13 | One-Click Branded Export | Stripe |
| 11 | Investor-Ready Export Pack | Investor Sarah |

### Theme 4: Proactive Intelligence
| # | Feature | Source |
|---|---------|--------|
| 14 | Anomaly Radar | Stripe |
| 15 | Event-Based Alerts | Bloomberg |
| 19 | Proactive Break Notification | Plaid |

### Theme 5: Integration Health
| # | Feature | Source |
|---|---------|--------|
| 17 | Connection Health Dashboard | Plaid |
| 18 | Smart Error Diagnosis | Plaid |

### Theme 6: UX Principles
| # | Feature | Source |
|---|---------|--------|
| 21 | Progressive Disclosure | Notion |
| 22 | Consistent Frame, Changing Focus | Notion |
| 16 | Product Comparison View | Bloomberg |
| 5 | Client Payment Timeline | Accountant Thomas |

---

## MVP Prioritization

### Tier 1: Foundation (Without This, Nothing Works)

**Data Ingestion:**
- Penny Lane integration → invoices, payment flows, accounting
- PayFit integration → payroll, job titles, org structure

**Source Logic:**
- Transaction = ground truth
- Contract vs. Cash distinction visible

---

### Tier 2: Revenue Command Center (The Main Event)

| Feature | Description |
|---------|-------------|
| **Revenue Overview** | Total revenue, ARR, cash in bank - visible immediately |
| **Revenue Breakdown** | New Business / Renewals / Churn |
| **Revenue by Type** | SaaS, Services, Subsidies |
| **Time Navigation** | M/Q/Y toggle + Quarter milestones on projection |
| **Stacked Bar View** | Monthly: what's new vs. recurring |

---

### Tier 3: Dual Pivot Views (Core UX)

| View | Purpose |
|------|---------|
| **Client-Centric** | Who is paying us? Top clients, drill into each |
| **Product-Centric** | What are we selling? Revenue by product line |

Switchable effortlessly between the two.

---

### Tier 4: Full Depth Trail

Revenue → Product → Client → Invoice → Payment Status

Every number clickable. Granularity from monthly aggregate down to individual invoice.

---

### Tier 5: Business Intelligence

| Metric | Logic |
|--------|-------|
| **Sales Headcount** | From PayFit payroll |
| **Weighted Sales Capacity** | <6mo = 0.25, 6-12mo = 0.5, >12mo = 1.0 FTE |
| **Growth per Sale** | Revenue generated per weighted FTE |
| **Net Churn** | (Churn - Upsell) / Total Portfolio Value |
| **Profitability** | Are we losing money? At what speed? Trend direction? |

---

### Tier 6: UX Principles (Baked In)

- Beautiful zero-setup default
- Progressive disclosure (hover/click reveals depth)
- Consistent frame, changing focus (no jarring page jumps)
- Instant load / pre-computed

---

### Deferred (Post-MVP)

| Feature | Why Later |
|---------|-----------|
| Branded export | Nice but not core |
| Investor export pack | Cool for fundraising, not day-1 |
| Anomaly radar | Requires baseline data first |
| Connection health dashboard | Complexity for 2-integration MVP |
| Alerts & notifications | Phase 2 |

---

## MVP Summary

**BP-AI MVP = Revenue Intelligence Dashboard**

**Integrations:** Penny Lane + PayFit

**Core Views:**
1. Revenue Command Center (overview, breakdown, projections)
2. Client-Centric View (who pays us)
3. Product-Centric View (what we sell)

**Key Capabilities:**
- Full drill-down: Revenue → Product → Client → Invoice
- M/Q/Y time toggle with quarter milestones
- New/Renewal/Churn segmentation
- Weighted sales capacity & growth metrics
- Profitability trend

**UX:** Beautiful defaults, progressive disclosure, instant load

---

## Session Summary

**Key Achievements:**
- 24 concrete features identified from 3 brainstorming techniques
- Clear data philosophy established (opinionated surface, transparent depth)
- MVP scope defined with 6 priority tiers
- Post-MVP roadmap items identified
- UX principles crystallized from best-in-class products

**Breakthrough Insights:**
1. **Trust is earned through recognition** - users trust data when they see familiar client names
2. **Checking numbers is stressful** - speed = reassurance
3. **Contract ≠ Cash must be VISIBLE** - not buried in details
4. **Occasional use, perfect defaults** - users won't customize, so nail the defaults
5. **Accountants test the edges** - they validate via recent changes, not totals

**Next Steps:**
1. Begin PRD workflow with this feature set as input
2. Architecture decisions: Penny Lane + PayFit integration approach
3. UX wireframes for Revenue Command Center
4. Define data model for revenue segmentation logic

---

*Session completed: 2026-01-26*
*Techniques: Question Storming, Role Playing, Cross-Pollination*
*Output: 24 features, 7 design principles, prioritized MVP scope*
