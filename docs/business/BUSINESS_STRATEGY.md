# SkillScout Business Strategy

> **Document Version:** 1.0
> **Last Updated:** March 7, 2026
> **Author:** Business Agent (Strategy Lead)
> **Status:** Active

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Market Analysis](#2-market-analysis)
3. [Competitive Analysis](#3-competitive-analysis)
4. [Target Customer Profiles](#4-target-customer-profiles)
5. [Pricing Strategy](#5-pricing-strategy)
6. [Go-to-Market Strategy](#6-go-to-market-strategy)
7. [Sales Process](#7-sales-process)
8. [Revenue Projections](#8-revenue-projections)
9. [Marketing Strategy](#9-marketing-strategy)
10. [Risk Analysis](#10-risk-analysis)
11. [90-Day Launch Plan](#11-90-day-launch-plan)
12. [Key Metrics & KPIs](#12-key-metrics--kpis)
13. [Team & Hiring Plan](#13-team--hiring-plan)
14. [Funding Strategy](#14-funding-strategy)

---

## 1. Executive Summary

### Vision

Become the standard infrastructure for purpose-built AI business automation delivered through messaging platforms, making terminal-grade power accessible via the interfaces businesses already use.

### Mission

Empower small and mid-market businesses with AI chatbot automation that goes beyond Q&A — giving them file management, terminal operations, and workflow automation through WhatsApp and Telegram, at a price point that doesn't require enterprise budgets.

### Elevator Pitch

> "SkillScout builds purpose-built AI chatbots for WhatsApp and Telegram that don't just answer questions — they read files, run commands, and automate workflows. Think of it as giving your business a junior operations employee that works 24/7 inside your team's chat app, for $200-$1,500/month instead of $25K+ custom builds."

### Unique Value Proposition

| Dimension | SkillScout | Typical Chatbot Platforms |
|-----------|-----------|--------------------------|
| File Access | Read/write files, parse documents, generate reports | Text-only responses |
| Terminal Access | Execute commands, manage deployments, run scripts | No system interaction |
| Delivery Channel | WhatsApp & Telegram (where teams already work) | Web widget or standalone app |
| AI Model | Claude API (state-of-the-art reasoning) | GPT wrappers or basic NLP |
| Pricing | $200-$1,500/mo (mid-market) | $15/mo (toy) or $25K+ (custom) |
| Compliance | Purpose-built bots (Meta-compliant post Jan 2026) | Many violate new Meta policies |

### Why Now

Three converging forces create a narrow window of opportunity:

1. **Meta's WhatsApp ban on general-purpose AI bots (January 2026)** wiped out hundreds of GPT-wrapper chatbots overnight. Businesses that relied on them need compliant, purpose-built replacements immediately.
2. **File and terminal access via messaging is nearly unserved.** No major platform offers this combination at a reasonable price.
3. **The pricing gap is enormous.** Between $15/mo "chatbot builder" tools and $25K+ custom development, there is a wide-open mid-market at $200-$1,500/mo that nobody is seriously targeting.

---

## 2. Market Analysis

### 2.1 Market Sizing

| Metric | Value | Methodology |
|--------|-------|-------------|
| **TAM** (Total Addressable Market) | $28.6B | Global chatbot market projected 2027 (Grand View Research, Mordor Intelligence) |
| **SAM** (Serviceable Addressable Market) | $3.2B | Purpose-built business bots on WhatsApp/Telegram, English-speaking markets |
| **SOM** (Serviceable Obtainable Market) | $4.8M | 0.15% of SAM — 400 customers at avg $1,000/mo ARR within 3 years |

### 2.2 Market Trends

| Trend | Impact on SkillScout | Timing |
|-------|---------------------|--------|
| Meta bans general AI chatbots | Eliminates GPT-wrapper competitors; creates demand for purpose-built bots | Already happened (Jan 2026) |
| WhatsApp Business API expansion | Opens SMB channel; easier onboarding for smaller companies | Ongoing |
| AI agent adoption in SMBs | Businesses expect chat-based AI that takes actions, not just answers | Accelerating 2025-2027 |
| Regulatory tightening (GDPR, AI Act) | Raises barrier for casual entrants; rewards compliant platforms | 2025-2028 |
| n8n and open-source automation growth | Reduces our infrastructure cost; expands integration ecosystem | Ongoing |
| Claude and frontier model improvements | Better reasoning = better bots with less prompt engineering | Every 3-6 months |

### 2.3 WhatsApp Ban Impact Analysis

**What happened:** In January 2026, Meta updated its WhatsApp Business Platform policies to prohibit general-purpose AI chatbot experiences. Only purpose-built bots serving a specific business function (customer support, order tracking, appointment scheduling, etc.) are allowed.

**Who was affected:**
- GPT-wrapper chatbot services (ChatGPT-in-WhatsApp clones) — **shut down**
- Generic "AI assistant" bots — **must pivot or shut down**
- Multi-purpose chatbot platforms without vertical focus — **compliance risk**

**Why this helps SkillScout:**
- Our bots are purpose-built by design (one bot = one business function)
- Each deployment is configured for a specific use case with defined capabilities
- We can position as the compliant alternative for businesses losing their existing bots
- Estimated 50,000+ businesses globally need to replace banned bots — immediate demand

### 2.4 Chatbot Market Landscape

```
Price vs. Capability Matrix

$25K+ │                                    ● Custom Dev Agencies
      │                                   (Accenture, Deloitte Digital)
      │
$5K   │                         ● Voiceflow Enterprise
      │                        ● Botpress Cloud Pro
      │
$1.5K │              ▓▓▓▓▓▓▓▓▓ SkillScout Business ▓▓▓▓▓▓▓▓▓
      │
$500  │         ▓▓▓▓ SkillScout Professional ▓▓▓▓
      │                    ● Landbot Pro
$200  │    ▓▓▓▓ SkillScout Starter ▓▓▓▓
      │              ● Tidio AI        ● Intercom Starter
$50   │    ● ManyChat Pro
      │    ● Chatfuel
$15   │ ● ManyChat Free
      │ ● Botpress Free
      └──────────────────────────────────────────────────
        Text-only    Workflows    File Access    Terminal+File
                                                  Access
```

SkillScout occupies the gap: mid-market pricing with terminal/file capabilities that only exist at enterprise custom-build prices.

---

## 3. Competitive Analysis

### 3.1 Direct Competitors

| Competitor | Pricing | WhatsApp | File Access | Terminal | AI Model | Weakness |
|-----------|---------|----------|-------------|----------|----------|----------|
| **Botpress** | Free-$500/mo | Yes | No | No | GPT/Claude | No file/terminal; complex builder UI |
| **Landbot** | $40-$400/mo | Yes | No | No | GPT-4 | No file/terminal; limited AI depth |
| **ManyChat** | $15-$100/mo | Yes | No | No | Basic NLP | Marketing-focused; no real AI agent capability |
| **Voiceflow** | $50-$625/mo | Via integration | No | No | GPT/Claude | Designer-focused; no infrastructure access |
| **Tidio** | $29-$394/mo | No | No | No | Lyro AI | Web-widget only; no messaging platforms |
| **Intercom** | $74-$500/mo | Limited | No | No | Fin AI | Customer support only; expensive per seat |

### 3.2 Indirect Competitors

| Competitor | Overlap | Why We Win |
|-----------|---------|-----------|
| Custom dev agencies | Build bespoke bots ($25K+) | We deliver 80% of the value at 2-6% of the cost |
| Zapier/Make + ChatGPT | DIY automation + AI | We provide a managed, integrated experience; no assembly required |
| In-house dev teams | Build internally | Most SMBs can't hire AI engineers; we're the outsourced alternative |
| Slack/Teams AI bots | Internal workplace AI | We operate on customer-facing channels (WhatsApp/Telegram) |

### 3.3 Competitive Matrix

| Capability | SkillScout | Botpress | ManyChat | Voiceflow | Custom Build |
|-----------|:----------:|:--------:|:--------:|:---------:|:------------:|
| Purpose-built bots | Yes | Partial | No | Partial | Yes |
| WhatsApp (Meta-compliant) | Yes | Yes | Yes | Via API | Yes |
| Telegram support | Yes | No | No | No | Yes |
| File read/write | Yes | No | No | No | Yes |
| Terminal/command execution | Yes | No | No | No | Yes |
| Claude API integration | Yes | Optional | No | Optional | Optional |
| Custom AI training | Yes | Yes | No | Yes | Yes |
| Webhook integrations | Yes | Yes | Yes | Yes | Yes |
| No-code setup | Partial | Yes | Yes | Yes | No |
| SLA guarantee | Business tier | Enterprise | No | Enterprise | Negotiated |
| Mid-market pricing | Yes | Sort of | No (too cheap) | Sort of | No (too expensive) |

### 3.4 SkillScout's Unfair Advantages

1. **File + terminal access via chat** — No chatbot platform offers this. Custom builds do, but cost $25K+.
2. **Post-ban compliant by design** — Every bot is purpose-built for a specific function. No pivot required.
3. **Claude API as the AI backbone** — Superior reasoning for complex tasks (legal document analysis, logistics routing, medical intake parsing).
4. **Self-hosted n8n** — No per-execution fees. Margins improve as volume grows. Full control over workflows.
5. **Hetzner + Coolify stack** — Infrastructure cost is ~$30/mo, not $300/mo. This margin advantage is structural.
6. **Solo founder speed** — No committees, no board approvals. Ship weekly.

---

## 4. Target Customer Profiles

### 4.1 ICP: Legal (Law Firms & Legal Tech)

| Attribute | Detail |
|-----------|--------|
| **Company Size** | 5-50 attorneys; boutique to mid-size firms |
| **Decision Maker** | Managing Partner, Operations Director, or Legal Tech Lead |
| **Annual Revenue** | $2M-$50M |
| **Pain Points** | Document review is manual and slow; client intake is inefficient; paralegals spend 40% of time on admin; case file access requires being at the office |
| **Use Case** | Bot reads case files (PDF/DOCX), summarizes depositions, extracts key dates, auto-generates intake forms, sends reminders via WhatsApp |
| **Value Created** | 10-15 hours/week saved per paralegal; faster client response time; reduced malpractice risk from missed deadlines |
| **Willingness to Pay** | $500-$1,500/mo (replaces $60K/yr paralegal time partially) |
| **Sales Cycle** | 3-6 weeks; needs compliance assurance, data security review |

### 4.2 ICP: Real Estate (Brokerages & Property Management)

| Attribute | Detail |
|-----------|--------|
| **Company Size** | 10-100 agents; independent brokerages or regional firms |
| **Decision Maker** | Broker/Owner, Operations Manager |
| **Annual Revenue** | $1M-$20M |
| **Pain Points** | Lead response time averages 6+ hours; listing data scattered across MLS, CRM, spreadsheets; showing coordination is manual; clients expect instant responses |
| **Use Case** | Bot answers listing inquiries on WhatsApp, pulls property data from files/CRM, schedules showings, generates comparative market analyses from spreadsheet data |
| **Value Created** | Lead response time drops to <2 minutes; 20-30% more leads converted; agents focus on closings, not admin |
| **Willingness to Pay** | $200-$500/mo per office |
| **Sales Cycle** | 1-3 weeks; fast decision if demo is compelling |

### 4.3 ICP: Healthcare (Clinics & Medical Practices)

| Attribute | Detail |
|-----------|--------|
| **Company Size** | 3-20 providers; private practices, specialty clinics, urgent care |
| **Decision Maker** | Practice Manager, Office Administrator, or Physician Owner |
| **Annual Revenue** | $1M-$15M |
| **Pain Points** | No-show rates of 15-30%; patient intake forms are paper-based; staff spends 2+ hours/day on phone scheduling; patients can't access records easily |
| **Use Case** | Bot handles appointment scheduling via Telegram/WhatsApp, sends reminders, processes intake forms (file upload), answers insurance/billing FAQs, routes urgent messages |
| **Value Created** | No-show reduction by 30-50%; 2+ FTE hours saved daily; improved patient satisfaction scores |
| **Willingness to Pay** | $500-$1,500/mo (replaces $40K/yr receptionist workload partially) |
| **Sales Cycle** | 4-8 weeks; HIPAA compliance review required; needs BAA |

### 4.4 ICP: Logistics (Freight Brokers & 3PLs)

| Attribute | Detail |
|-----------|--------|
| **Company Size** | 10-200 employees; regional freight brokers, third-party logistics |
| **Decision Maker** | Operations Manager, VP of Logistics, CTO |
| **Annual Revenue** | $5M-$100M |
| **Pain Points** | Shipment tracking is fragmented; driver communication is chaotic (calls, texts, emails); BOL and POD documents require manual processing; rate quotes take hours |
| **Use Case** | Bot on Telegram for driver check-ins, automated BOL/POD document processing (file upload + OCR), shipment status queries, rate calculation from spreadsheet data, terminal commands for TMS integration |
| **Value Created** | 50% reduction in dispatcher call volume; document processing time drops from 15 min to 2 min; faster rate quotes = more won loads |
| **Willingness to Pay** | $500-$1,500/mo |
| **Sales Cycle** | 3-6 weeks; needs integration proof with existing TMS |

### 4.5 ICP: E-commerce (DTC Brands & Shopify Stores)

| Attribute | Detail |
|-----------|--------|
| **Company Size** | $500K-$20M annual GMV; 2-30 employees |
| **Decision Maker** | Founder, Head of Operations, Customer Experience Lead |
| **Annual Revenue** | $500K-$20M |
| **Pain Points** | Customer support volume scaling with revenue; order status inquiries are 40-60% of tickets; returns processing is manual; inventory data is siloed |
| **Use Case** | WhatsApp bot for order tracking, returns initiation (file upload for damage photos), inventory queries, customer FAQ, abandoned cart recovery, post-purchase upsells |
| **Value Created** | 60-80% of support tickets automated; returns processed 3x faster; higher customer satisfaction = better retention |
| **Willingness to Pay** | $200-$500/mo |
| **Sales Cycle** | 1-2 weeks; can demo with Shopify test store |

---

## 5. Pricing Strategy

### 5.1 Current Tier Structure

| | Starter | Professional | Business |
|---|---------|-------------|----------|
| **Monthly Price** | $200 | $500 | $1,500 |
| **Annual Price** (20% discount) | $160/mo ($1,920/yr) | $400/mo ($4,800/yr) | $1,200/mo ($14,400/yr) |
| **Bots Included** | 1 | 3 | Unlimited |
| **File Access** | Read-only | Full read/write | Full + infrastructure |
| **Terminal Access** | No | Yes | Yes + custom environments |
| **Messages/month** | 500 | 5,000 | Unlimited |
| **AI Training** | Pre-built templates | Custom training | Custom + fine-tuning |
| **Support** | Email (48hr) | Priority Slack (4hr) | Dedicated account manager (1hr) |
| **Integrations** | 3 standard | Webhook + API | Custom + SSO/SAML |
| **SLA** | No | 99.5% uptime | 99.9% uptime |

### 5.2 Unit Economics

**Cost per customer per month (estimated):**

| Cost Component | Starter | Professional | Business |
|---------------|---------|-------------|----------|
| Claude API (~$0.02/msg avg) | $10.00 | $100.00 | $300.00 (est. 15K msgs) |
| n8n compute (shared) | $2.00 | $5.00 | $15.00 |
| Hetzner VPS allocation | $3.00 | $8.00 | $25.00 |
| Supabase (free tier → Pro) | $0.50 | $2.00 | $8.00 |
| WhatsApp Business API msgs | $0.00 (Telegram MVP) | $15.00 | $50.00 |
| Support labor (amortized) | $5.00 | $20.00 | $100.00 |
| **Total COGS** | **$20.50** | **$150.00** | **$498.00** |
| **Gross Margin** | **$179.50 (89.8%)** | **$350.00 (70.0%)** | **$1,002.00 (66.8%)** |

**Blended gross margin target:** 70-75%

### 5.3 Cost Structure (Infrastructure)

| Infrastructure | Monthly Cost | Notes |
|---------------|-------------|-------|
| Hetzner VPS (CX31) | $14.00 | 4 vCPU, 8GB RAM — handles ~50 customers |
| Hetzner VPS (CX41) upgrade | $28.00 | 8 vCPU, 16GB RAM — handles ~200 customers |
| Coolify (self-hosted) | $0.00 | Open source |
| Traefik (self-hosted) | $0.00 | Open source |
| n8n (self-hosted) | $0.00 | Open source (Community Edition) |
| Supabase (free tier) | $0.00 | Up to 500MB, 50K MAU |
| Supabase (Pro) | $25.00 | When free tier exceeded |
| Domain + DNS | $1.50 | Annual amortized |
| SSL (Let's Encrypt) | $0.00 | Auto-managed by Traefik |
| **Total (early stage)** | **~$16/mo** | Before first customer |
| **Total (at 50 customers)** | **~$70/mo** | Infrastructure only |

This is a structural advantage. Competitors on AWS/GCP pay 10-20x more for equivalent infrastructure.

### 5.4 Pricing Evolution Roadmap

| Phase | Timeline | Change | Rationale |
|-------|----------|--------|-----------|
| Launch | Q1 2026 | Current tiers, 30-day free trial | Reduce friction for first 20 customers |
| Traction | Q3 2026 | Add "Growth" tier at $800/mo | Bridge gap between Pro and Business |
| Scale | Q1 2027 | Usage-based pricing component (overage at $0.03/msg) | Align revenue with value delivered |
| Enterprise | Q3 2027 | Custom enterprise contracts ($3K-$10K/mo) | Larger accounts, multi-department deployments |
| Maturity | 2028 | Platform fee + marketplace (third-party bot templates) | Ecosystem revenue |

---

## 6. Go-to-Market Strategy

### Phase 1: Telegram MVP (March-June 2026)

**Goal:** First 10 paying customers. Validate product-market fit.

| Activity | Detail | Timeline |
|----------|--------|----------|
| Build 3 industry-specific demo bots | Legal intake, Real Estate leads, E-commerce support | Weeks 1-4 |
| Launch portfolio website | Show capabilities, pricing, demo videos | Weeks 2-4 |
| Telegram-first delivery | Lower barrier (no Meta approval needed) | Week 1 onward |
| Cold outreach to 100 prospects | LinkedIn + email; target legal and real estate | Weeks 3-8 |
| Offer 30-day free trial | Starter tier, no credit card required | Week 4 onward |
| Collect 5 case studies | Document results, get testimonials | Weeks 8-16 |

**Key metric:** 10 paying customers by end of Phase 1.

### Phase 2: WhatsApp Expansion (July-December 2026)

**Goal:** 50 paying customers. Expand to WhatsApp Business API.

| Activity | Detail | Timeline |
|----------|--------|----------|
| WhatsApp Business API integration | Apply for Meta approval as purpose-built provider | Month 4-5 |
| Launch healthcare and logistics verticals | Expand from legal/real estate | Month 5-6 |
| Content marketing engine | 2 blog posts/week, 1 case study/month | Month 4 onward |
| Partnership program | n8n consultants, Supabase partners, Telegram bot directories | Month 5-6 |
| Referral program | 20% commission for 6 months | Month 6 onward |
| Hire first support contractor | Part-time, handle onboarding and tickets | Month 6 |

**Key metric:** 50 paying customers, $15K+ MRR by end of Phase 2.

### Phase 3: Enterprise & Scale (January-December 2027)

**Goal:** 200+ customers. $50K+ MRR. Enterprise contracts.

| Activity | Detail | Timeline |
|----------|--------|----------|
| Enterprise tier launch | Custom SLAs, SSO/SAML, dedicated infrastructure | Q1 2027 |
| SOC 2 Type I certification | Required for enterprise sales | Q1-Q2 2027 |
| HIPAA compliance (BAA) | Unlock healthcare enterprise | Q2 2027 |
| Sales hire (first full-time) | Outbound enterprise sales | Q2 2027 |
| Channel partnerships | Reseller agreements with IT consultancies | Q2-Q3 2027 |
| International expansion | UK, Canada, Australia (English-speaking, WhatsApp-heavy) | Q4 2027 |

**Key metric:** 200+ customers, $50K+ MRR by end of Phase 3.

### Distribution Channels (Ranked by Priority)

| Channel | Cost | Expected CAC | Timeline to Results |
|---------|------|-------------|-------------------|
| LinkedIn outbound (founder-led) | $0 (time only) | $50-$100 | 2-4 weeks |
| SEO / blog content | $0 (time only) | $80-$150 | 3-6 months |
| Telegram bot directories | $0 | $30-$60 | 1-2 months |
| n8n community / templates | $0 | $40-$80 | 1-3 months |
| Reddit (r/chatbots, r/smallbusiness, r/legaltech) | $0 | $60-$120 | 2-4 weeks |
| YouTube tutorials / demos | $0 (time only) | $100-$200 | 3-6 months |
| Google Ads (branded + "WhatsApp bot for [industry]") | $500-$2K/mo | $150-$300 | Immediate |
| Referral program (20% rev share) | Variable | $0 (funded by revenue) | 1-2 months |
| Partnership (n8n, Supabase ecosystem) | $0 | $50-$100 | 2-4 months |

---

## 7. Sales Process

### 7.1 Lead Generation Funnel

```
                    Awareness
                 (Blog, LinkedIn, SEO)
                   ~5,000 visitors/mo
                        │
                    ┌────▼────┐
                    │ Website │ 3-5% conversion
                    └────┬────┘
                        │
                  ┌─────▼─────┐
                  │ Free Trial │ ~150-250 signups/mo
                  │ or Demo    │
                  └─────┬─────┘
                        │
                  ┌─────▼──────┐
                  │ Onboarding │ 30-40% activation
                  │ (7 days)   │
                  └─────┬──────┘
                        │
                  ┌─────▼──────┐
                  │ Paying     │ 20-30% trial→paid
                  │ Customer   │
                  └─────┬──────┘
                        │
                  ┌─────▼──────┐
                  │ Expansion  │ 15-20% upgrade/yr
                  │ (Upsell)   │
                  └────────────┘
```

### 7.2 Qualification Framework (BANT + Fit)

| Criteria | Qualifying Questions |
|----------|---------------------|
| **Budget** | Do you currently spend on chatbot tools, virtual assistants, or customer support software? ($200+/mo range) |
| **Authority** | Are you the decision maker for operations/technology tools? |
| **Need** | Do your team members need to access files, documents, or systems while communicating with clients? |
| **Timeline** | Are you looking to implement within the next 30-60 days? |
| **Fit** | Are you in legal, real estate, healthcare, logistics, or e-commerce? Do you use WhatsApp or Telegram? |

### 7.3 Demo Flow (30 minutes)

| Segment | Duration | Content |
|---------|----------|---------|
| Discovery | 5 min | Confirm pain points, current tools, budget |
| Live demo | 15 min | Show industry-specific bot: send a message, upload a file, get AI response, show terminal action |
| ROI discussion | 5 min | Calculate hours saved, cost comparison to alternatives |
| Close / next steps | 5 min | Free trial signup, set onboarding call, introduce Slack/email support |

### 7.4 Onboarding Process (7-14 days)

| Day | Activity |
|-----|----------|
| 0 | Welcome email + Telegram/WhatsApp bot access credentials |
| 1 | Kickoff call (30 min): configure bot persona, connect data sources, set file permissions |
| 3 | Bot goes live in test mode; customer tests with team |
| 5 | Review call (15 min): adjust prompts, fix edge cases |
| 7 | Bot goes live in production; customer starts using with real clients/data |
| 14 | Check-in call (15 min): review analytics, gather feedback, discuss expansion |

### 7.5 Retention Strategy

| Tactic | Frequency | Goal |
|--------|-----------|------|
| Monthly analytics report (automated) | Monthly | Show value delivered (messages handled, time saved) |
| Quarterly business review | Quarterly | Discuss ROI, identify expansion opportunities |
| Feature release announcements | Bi-weekly | Keep customers engaged with improvements |
| NPS survey | Quarterly | Identify at-risk accounts (score < 7) |
| Usage-based alerts | Real-time | Flag accounts with declining usage for proactive outreach |

---

## 8. Revenue Projections

### 8.1 Year 1: Month-by-Month (March 2026 - February 2027)

| Month | New Customers | Total Customers | Starter | Pro | Business | MRR | Cumulative Revenue |
|-------|:------------:|:--------------:|:-------:|:---:|:--------:|----:|---------:|
| Mar 2026 | 2 | 2 | 2 | 0 | 0 | $400 | $400 |
| Apr 2026 | 3 | 5 | 4 | 1 | 0 | $1,300 | $1,700 |
| May 2026 | 3 | 8 | 5 | 3 | 0 | $2,500 | $4,200 |
| Jun 2026 | 4 | 11 | 6 | 4 | 1 | $4,700 | $8,900 |
| Jul 2026 | 5 | 15 | 8 | 5 | 2 | $7,100 | $16,000 |
| Aug 2026 | 5 | 19 | 10 | 6 | 3 | $9,500 | $25,500 |
| Sep 2026 | 6 | 24 | 12 | 8 | 4 | **$12,400** | $37,900 |
| Oct 2026 | 7 | 30 | 14 | 10 | 6 | $16,800 | $54,700 |
| Nov 2026 | 7 | 36 | 16 | 12 | 8 | $21,400 | $76,100 |
| Dec 2026 | 8 | 42 | 18 | 14 | 10 | $26,600 | $102,700 |
| Jan 2027 | 8 | 48 | 20 | 16 | 12 | $32,000 | $134,700 |
| Feb 2027 | 10 | 55 | 22 | 18 | 15 | $39,900 | $174,600 |

**Assumptions:**
- 1-2% monthly churn (included in net new customer count)
- Customers upgrade tiers over time (modeled as mix shift)
- No annual prepay discount impact in Year 1

**Key milestones:**
- **$10K MRR:** Month 7 (September 2026)
- **$25K MRR:** Month 10 (December 2026)
- **$100K cumulative revenue:** Month 10 (December 2026)

### 8.2 Years 2-3: Quarterly

| Quarter | Total Customers | Avg Revenue/Customer | MRR | ARR Run Rate |
|---------|:--------------:|:-------------------:|-----:|-----:|
| Q1 2027 (Y2-Q1) | 75 | $620 | $46,500 | $558K |
| Q2 2027 | 110 | $650 | $71,500 | $858K |
| Q3 2027 | 155 | $680 | **$105,400** | $1.26M |
| Q4 2027 | 200 | $720 | $144,000 | $1.73M |
| Q1 2028 (Y3-Q1) | 250 | $750 | $187,500 | $2.25M |
| Q2 2028 | 310 | $780 | $241,800 | $2.90M |
| Q3 2028 | 370 | $810 | $299,700 | $3.60M |
| Q4 2028 | 420 | $850 | $357,000 | $4.28M |

**Key milestones:**
- **$50K MRR:** Q1 2027 (Month 13)
- **$100K MRR:** Q3 2027 (Month 19)
- **$1M ARR:** Q2 2027 (Month 16)

### 8.3 Revenue Mix Evolution

| Period | Starter % | Professional % | Business % | Enterprise % |
|--------|:---------:|:--------------:|:----------:|:------------:|
| Year 1 | 45% | 35% | 20% | 0% |
| Year 2 | 30% | 35% | 25% | 10% |
| Year 3 | 20% | 30% | 30% | 20% |

The revenue mix shifts upmarket over time as the product matures, enterprise features are built, and customer success drives upgrades.

---

## 9. Marketing Strategy

### 9.1 Brand Positioning

**Positioning statement:** For small and mid-market businesses that need AI automation beyond basic chatbots, SkillScout is the only platform that delivers purpose-built bots with file and terminal access through WhatsApp and Telegram, at 1/50th the cost of custom development.

**Brand voice:** Technical but approachable. Confident but not arrogant. We explain complex capabilities in simple terms. Gen Z design aesthetic signals modernity and innovation.

### 9.2 Content Pillars

| Pillar | Content Types | Frequency | Goal |
|--------|--------------|-----------|------|
| **AI Automation Education** | Blog posts, tutorials, explainers | 2x/week | SEO traffic, thought leadership |
| **Industry Use Cases** | Case studies, ROI analyses, demo videos | 1x/month per vertical | Convert prospects by showing relevance |
| **WhatsApp/Telegram Best Practices** | Platform guides, compliance updates, tips | 1x/week | Capture search traffic from ban aftermath |
| **Behind the Build** | Technical deep-dives, architecture posts, founder updates | 1x/week | Build trust, attract technical buyers |

### 9.3 SEO Strategy

**Priority keywords (search volume estimates):**

| Keyword | Monthly Volume | Difficulty | Priority |
|---------|:-------------:|:----------:|:--------:|
| "WhatsApp chatbot for business" | 12,000 | Medium | High |
| "purpose-built WhatsApp bot" | 800 | Low | High |
| "WhatsApp bot alternative after ban" | 2,400 | Low | High |
| "AI chatbot for law firms" | 1,600 | Medium | High |
| "Telegram bot for business" | 4,800 | Low | Medium |
| "AI file access chatbot" | 400 | Low | High |
| "chatbot with terminal access" | 200 | Low | High |
| "n8n chatbot tutorial" | 1,200 | Low | Medium |
| "WhatsApp bot for real estate" | 900 | Low | High |
| "automated document processing chatbot" | 700 | Medium | Medium |

### 9.4 Social Media Strategy

| Platform | Content Type | Frequency | Purpose |
|----------|-------------|-----------|---------|
| **LinkedIn** | Thought leadership, case studies, founder journey | 5x/week | B2B lead generation (primary channel) |
| **X (Twitter)** | Quick tips, product updates, industry news commentary | Daily | Developer/tech community awareness |
| **YouTube** | Demo videos, tutorials, customer stories | 2x/month | Long-form trust building, SEO |
| **Reddit** | Helpful answers in niche communities | 3-5x/week | Organic discovery, credibility |
| **TikTok** | Short demo clips, "build with me" content | 3x/week | Gen Z founder audience, virality potential |

### 9.5 Lead Magnets

| Lead Magnet | Format | Target Audience |
|-------------|--------|-----------------|
| "WhatsApp Bot Compliance Checklist (Post-Ban)" | PDF | Any business using WhatsApp bots |
| "ROI Calculator: AI Chatbot vs. Hiring" | Interactive web tool | Decision makers evaluating automation |
| "5 Telegram Bot Templates for [Industry]" | Template pack + video | Industry-specific prospects |
| "How to Replace Your Banned WhatsApp Bot in 7 Days" | Email course (5 emails) | Businesses affected by Meta ban |
| "AI Automation Readiness Assessment" | Quiz / scorecard | Cold leads, top of funnel |

---

## 10. Risk Analysis

### 10.1 Risk Matrix

| Risk | Probability | Impact | Severity | Mitigation |
|------|:----------:|:------:|:--------:|-----------|
| Meta changes WhatsApp Business API terms again | Medium | High | **High** | Multi-channel strategy (Telegram always available); abstract messaging layer so channel is swappable |
| Claude API pricing increases significantly | Medium | Medium | **Medium** | Build model-agnostic architecture; test Llama, Mistral as fallbacks; negotiate volume pricing |
| n8n changes licensing (restricts self-hosting) | Low | High | **Medium** | Pin to current version; evaluate Temporal/Windmill as alternatives; contribute to community edition |
| Competitor builds file/terminal access | Medium | Medium | **Medium** | Move fast on enterprise features; build switching costs through integrations and training data |
| Security breach / data leak | Low | Critical | **High** | Sandboxed execution environments; SOC 2 certification; encryption at rest and in transit; regular pen testing |
| Customer churn exceeds 5%/month | Medium | High | **High** | Proactive customer success; monthly value reports; early warning system on usage decline |
| Solo founder burnout | High | High | **Critical** | Hire first support contractor by Month 6; automate everything possible; maintain sustainable pace |
| Slow initial adoption | Medium | Medium | **Medium** | Extend free trial; pivot messaging; try different verticals; lower Starter price temporarily |

### 10.2 Platform Risk Deep Dive

**n8n CVE-2026-1470 (CVSS 9.9 — Critical):**
- The Execute Command node has a remote code execution vulnerability
- **Mitigation:** Never use Execute Command node. All system interactions go through the Code node with task runners (sandboxed)
- This is enforced at the architecture level — the Execute Command node is disabled in our n8n configuration

**Meta WhatsApp Policy Risk:**
- Current policy allows purpose-built business bots (we comply)
- Future risk: Meta could require per-bot approval, add fees, or restrict API access
- **Mitigation:** Telegram is always the fallback channel. Our architecture abstracts the messaging layer — swapping WhatsApp for Telegram (or any future platform) requires zero changes to bot logic

### 10.3 Technical Risks

| Risk | Mitigation |
|------|-----------|
| Single VPS failure | Automated backups to Hetzner Object Storage; restore procedure documented and tested; upgrade to multi-node at 100+ customers |
| Claude API downtime | Queue messages and retry; show "processing" status to end users; cache common responses |
| n8n workflow corruption | Version control all workflows in Git; automated export/backup every 6 hours |
| File system access security | Chroot jails per customer; read-only by default; write access requires explicit opt-in; no access to system directories |
| Terminal command injection | Allowlist of permitted commands per customer; sandboxed execution; no root access; all commands logged and auditable |

---

## 11. 90-Day Launch Plan

### Weeks 1-2: Foundation (March 7-20, 2026)

| Day | Task | Deliverable |
|-----|------|-------------|
| 1-2 | Finalize n8n workflow architecture for first bot template | Architecture diagram + base workflow JSON |
| 3-4 | Set up Supabase schema (users, bots, messages, files, billing) | Database ready |
| 5-6 | Build Telegram bot integration in n8n | Working Telegram bot that responds to messages |
| 7-8 | Implement file upload/read capability via Telegram | Bot can receive, store, and read files |
| 9-10 | Implement Claude API integration with conversation context | Bot gives intelligent, context-aware responses |
| 11-12 | Build legal industry demo bot (document intake + summarization) | Fully working legal intake bot |
| 13-14 | Launch portfolio website v1 (Next.js + Tailwind) | Live site with pricing, demo videos, signup |

### Weeks 3-4: First Vertical + Outreach (March 21 - April 3, 2026)

| Day | Task | Deliverable |
|-----|------|-------------|
| 15-16 | Build real estate demo bot (listing inquiries + file access) | Second vertical demo ready |
| 17-18 | Record 3 demo videos (overview, legal use case, real estate use case) | YouTube + website content |
| 19-20 | Set up billing (Stripe integration via Supabase) | Payment processing ready |
| 21-22 | Write 5 LinkedIn posts + 2 blog posts | Content pipeline started |
| 23-24 | Begin cold outreach: 20 law firms, 20 real estate brokerages | 40 prospects contacted |
| 25-26 | Set up analytics (PostHog or Plausible) + CRM (Attio or HubSpot free) | Tracking ready |
| 27-28 | Launch free trial program | First trial users onboarding |

### Weeks 5-8: First Customers (April 4 - May 1, 2026)

| Week | Goals |
|------|-------|
| Week 5 | Close first 2 paying customers (Starter tier); continue outreach (20 prospects/week) |
| Week 6 | Iterate on bot based on customer feedback; fix top 3 pain points; publish first case study |
| Week 7 | Build e-commerce demo bot (3rd vertical); reach 5 paying customers |
| Week 8 | Implement automated onboarding flow; launch "WhatsApp Bot Compliance Checklist" lead magnet |

### Weeks 9-12: Growth + WhatsApp Prep (May 2 - May 29, 2026)

| Week | Goals |
|------|-------|
| Week 9 | Apply for WhatsApp Business API access; reach 8 paying customers |
| Week 10 | Launch referral program (20% rev share); build healthcare demo bot (4th vertical) |
| Week 11 | Hit 10 paying customers milestone; begin WhatsApp integration development |
| Week 12 | Compile 90-day retrospective; plan Phase 2; publish 3 case studies; target $5K+ MRR |

### 90-Day Success Criteria

| Metric | Target |
|--------|--------|
| Paying customers | 10+ |
| MRR | $3,000-$5,000 |
| Demo bots built | 4 (legal, real estate, e-commerce, healthcare) |
| Website traffic | 2,000+ visitors/month |
| Blog posts published | 15+ |
| Case studies | 3+ |
| Free trial signups | 30+ |
| Trial-to-paid conversion | 25%+ |
| Customer NPS | 8+ |
| WhatsApp API application | Submitted |

---

## 12. Key Metrics & KPIs

### 12.1 North Star Metric

**Monthly Recurring Revenue (MRR)** — the single metric that best captures business health.

### 12.2 KPI Dashboard

| Category | Metric | Target (Year 1) | Measurement |
|----------|--------|:---------------:|-------------|
| **Revenue** | MRR | $10K by M6, $30K by M12 | Stripe dashboard |
| **Revenue** | ARR Run Rate | $360K by M12 | MRR x 12 |
| **Revenue** | Revenue Growth (MoM) | 15-25% | (Current MRR - Prior MRR) / Prior MRR |
| **Customers** | Total paying customers | 55 by M12 | Supabase users table |
| **Customers** | Net new customers/month | 5-10 | Signups - churns |
| **Retention** | Monthly churn rate | <3% | Churned customers / total customers |
| **Retention** | Net Revenue Retention | >110% | (Starting MRR + Expansion - Contraction - Churn) / Starting MRR |
| **Acquisition** | Customer Acquisition Cost (CAC) | <$300 | Total sales & marketing spend / new customers |
| **Acquisition** | CAC Payback Period | <3 months | CAC / avg monthly revenue per customer |
| **Unit Economics** | Lifetime Value (LTV) | >$3,000 | ARPU / monthly churn rate |
| **Unit Economics** | LTV:CAC Ratio | >5:1 | LTV / CAC |
| **Product** | Messages processed/month | 100K+ by M12 | n8n execution logs |
| **Product** | Avg response time | <3 seconds | n8n + Supabase logs |
| **Product** | Bot uptime | 99.5%+ | Uptime monitoring (Better Stack) |
| **Satisfaction** | NPS Score | 40+ | Quarterly survey |
| **Satisfaction** | Support ticket resolution time | <4 hours (Pro), <1 hour (Business) | Help desk metrics |

### 12.3 Leading vs. Lagging Indicators

| Leading (Predict Future) | Lagging (Confirm Past) |
|--------------------------|----------------------|
| Website traffic | MRR |
| Free trial signups | Total customers |
| Demo requests | Churn rate |
| Blog post views | LTV |
| LinkedIn engagement | NPS |
| Onboarding completion rate | Revenue per customer |

---

## 13. Team & Hiring Plan

### 13.1 Current State: Solo Founder

The founder handles all functions: product development, sales, marketing, support, and infrastructure. This is sustainable through ~20 customers with heavy automation.

### 13.2 Hiring Triggers & Sequence

| Hire | Trigger | Role | Type | Monthly Cost |
|------|---------|------|------|:------------:|
| **#1** | 15+ customers OR support >10 hrs/week | Customer Support / Onboarding Specialist | Part-time contractor | $1,500-$2,500 |
| **#2** | $15K MRR | Content Marketing Lead | Part-time contractor | $2,000-$3,000 |
| **#3** | $30K MRR | Full-stack Developer (n8n + Next.js) | Full-time | $5,000-$8,000 |
| **#4** | $50K MRR | Sales Development Rep (SDR) | Full-time | $4,000-$6,000 + commission |
| **#5** | $75K MRR | Customer Success Manager | Full-time | $5,000-$7,000 |
| **#6** | $100K MRR | Senior Engineer (security + infrastructure) | Full-time | $8,000-$12,000 |

### 13.3 Roles NOT to Hire Early

| Role | Why Wait |
|------|----------|
| CFO / Finance | Use accounting software (Wave, Xero) until $500K ARR |
| HR | Not needed until 10+ employees |
| Designer | Use Figma templates, AI tools, and contractor for one-off needs |
| Product Manager | Founder is the PM until $1M ARR |
| Legal counsel | Use a startup-friendly law firm on retainer ($500/mo) instead of in-house |

### 13.4 Founder Time Allocation (Current)

| Activity | Hours/Week | % of Time |
|----------|:----------:|:---------:|
| Product development | 25 | 50% |
| Sales & outreach | 8 | 16% |
| Marketing & content | 5 | 10% |
| Customer support | 4 | 8% |
| Infrastructure & ops | 4 | 8% |
| Strategy & planning | 2 | 4% |
| Learning & upskilling | 2 | 4% |
| **Total** | **50** | **100%** |

---

## 14. Funding Strategy

### 14.1 Bootstrap Path (Recommended)

SkillScout's cost structure makes bootstrapping not just viable but strategically advantageous.

**Why bootstrap:**
- Infrastructure costs are ~$16-70/mo (Hetzner + open-source stack)
- Gross margins are 70-90%
- No inventory, no physical goods, no manufacturing
- Solo founder = no payroll until revenue supports it
- Maintaining 100% equity maximizes long-term value

**Bootstrap financial runway:**

| Month Range | Revenue | Costs | Net | Cumulative |
|-------------|--------:|------:|----:|-----------:|
| Months 1-3 | $4,200 | $2,500 | $1,700 | $1,700 |
| Months 4-6 | $21,300 | $5,000 | $16,300 | $18,000 |
| Months 7-9 | $48,700 | $12,000 | $36,700 | $54,700 |
| Months 10-12 | $100,200 | $25,000 | $75,200 | $129,900 |

**Break-even point:** Month 1 (infrastructure costs are so low that even 2 Starter customers cover them).

**Founder salary feasibility:** Sustainable $5K/mo personal draw starting Month 5-6 ($10K+ MRR).

### 14.2 When Fundraising Makes Sense

Fundraising should only be considered if one of these conditions is true:

| Condition | Why | Raise Amount |
|-----------|-----|:------------:|
| Need to hire 3+ people simultaneously to capture a time-sensitive market window | Can't wait for organic revenue growth | $250K-$500K (pre-seed) |
| Enterprise customers require SOC 2 + HIPAA + dedicated infrastructure NOW | Compliance certifications cost $30-50K and take 6 months | $200K-$400K |
| A large competitor announces file/terminal chatbot features | Need to accelerate feature development and sales to maintain lead | $500K-$1M (seed) |
| Path to $1M ARR is proven and want to accelerate to $5M | Growth capital, not survival capital | $1M-$3M (seed) |

### 14.3 Funding Options (If Needed)

| Source | Amount | Dilution | Timeline | Best For |
|--------|:------:|:--------:|----------|----------|
| Revenue (bootstrap) | $0-$130K Y1 | 0% | Immediate | Default path |
| Friends & family | $25K-$100K | 5-15% | 2-4 weeks | Early gap funding |
| Indie.vc / Calm Fund / Earnest Capital | $100K-$500K | 5-15% + rev share | 4-8 weeks | Bootstrapper-friendly capital |
| Angel investors (AI/SaaS focus) | $100K-$500K | 10-20% | 4-12 weeks | Strategic advice + capital |
| Y Combinator / Techstars | $500K | 7% | 3-6 months (application cycle) | Network + credibility |
| Pre-seed VC | $500K-$2M | 15-25% | 2-4 months | Only if scaling fast |

### 14.4 Recommendation

**Bootstrap for the first 12 months.** The cost structure supports it, and proving revenue traction before fundraising dramatically improves terms. If fundraising becomes necessary, target bootstrapper-friendly investors (Calm Fund, Earnest Capital) who offer revenue-based financing rather than traditional equity dilution.

**Key thesis:** At $30K+ MRR with 70%+ gross margins and low churn, SkillScout becomes a highly attractive investment on founder-friendly terms — or a profitable lifestyle business that funds itself indefinitely.

---

## Appendix A: Key Assumptions

| Assumption | Value | Source / Rationale |
|-----------|-------|-------------------|
| Avg Claude API cost per message | $0.02 | Based on Claude 3.5 Sonnet pricing with avg 500 input + 300 output tokens |
| Monthly churn rate | 2-3% | SaaS industry benchmark for SMB |
| Trial-to-paid conversion | 25-30% | Conservative for product-led growth |
| CAC (blended) | $150-$300 | Founder-led sales + content marketing |
| Time to onboard a customer | 7-14 days | Based on bot complexity |
| Messages per Starter customer | 300-500/mo | Conservative usage pattern |
| Messages per Pro customer | 2,000-5,000/mo | Active business usage |
| Hetzner VPS capacity | ~50 customers per CX31 | Based on n8n execution benchmarks |
| WhatsApp Business API cost | $0.005-$0.08/msg | Meta conversation-based pricing (varies by country and category) |

## Appendix B: Competitor Pricing Comparison

| Platform | Free Tier | Lowest Paid | Mid Tier | Enterprise | File Access | Terminal |
|----------|:---------:|:-----------:|:--------:|:----------:|:-----------:|:--------:|
| SkillScout | 30-day trial | $200/mo | $500/mo | $1,500/mo | Yes | Yes |
| Botpress | Yes (1K msgs) | $50/mo | $500/mo | Custom | No | No |
| Landbot | Yes (limited) | $40/mo | $200/mo | $400/mo | No | No |
| ManyChat | Yes (limited) | $15/mo | $45/mo | $100/mo | No | No |
| Voiceflow | Yes (limited) | $50/mo | $625/mo | Custom | No | No |
| Tidio | Yes (limited) | $29/mo | $59/mo | $394/mo | No | No |
| Intercom | No | $74/mo | $153/mo | Custom | No | No |
| Custom Dev | N/A | $10K one-time | $25K+ | $50K-$200K | Yes | Yes |

## Appendix C: Revenue Scenario Analysis

### Bear Case (Slow Adoption)

| Milestone | Timeline |
|-----------|----------|
| 10 customers | Month 6 |
| $10K MRR | Month 10 |
| $50K MRR | Month 24 |
| $100K MRR | Month 36 |

### Base Case (Expected)

| Milestone | Timeline |
|-----------|----------|
| 10 customers | Month 4 |
| $10K MRR | Month 7 |
| $50K MRR | Month 13 |
| $100K MRR | Month 19 |

### Bull Case (Strong Product-Market Fit)

| Milestone | Timeline |
|-----------|----------|
| 10 customers | Month 3 |
| $10K MRR | Month 5 |
| $50K MRR | Month 10 |
| $100K MRR | Month 14 |

---

*This is a living document. Review and update monthly as market conditions, customer feedback, and financial results provide new data.*
