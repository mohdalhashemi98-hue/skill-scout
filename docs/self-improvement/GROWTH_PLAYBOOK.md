# SkillScout Growth Playbook

> A living document for the solo founder building an AI automation business.
> Review daily. Update weekly. Refine monthly.

---

## Table of Contents

1. [Personal Mission & Vision](#1-personal-mission--vision)
2. [Skills Assessment Matrix](#2-skills-assessment-matrix)
3. [90-Day Learning Roadmap](#3-90-day-learning-roadmap)
4. [Technical Learning Path](#4-technical-learning-path)
5. [Design Learning Path](#5-design-learning-path)
6. [Business & Marketing Skills](#6-business--marketing-skills)
7. [Daily Habits & Routines](#7-daily-habits--routines)
8. [Productivity Systems](#8-productivity-systems)
9. [Mental Health & Resilience](#9-mental-health--resilience)
10. [Networking Strategy](#10-networking-strategy)
11. [Content Creation Strategy](#11-content-creation-strategy)
12. [Financial Planning](#12-financial-planning)
13. [Accountability Framework](#13-accountability-framework)
14. [Recommended Resources](#14-recommended-resources)
15. [Milestone Tracker](#15-milestone-tracker)

---

## 1. Personal Mission & Vision

### Your "Why" Statement

Write it here. Revisit it every quarter. It will change, and that is fine.

> **My mission:** _______________________________________________________________
>
> **I am building SkillScout because:** __________________________________________
>
> **The problem I solve:** _______________________________________________________
>
> **Who I solve it for:** ________________________________________________________

### Vision Timeline

| Timeframe | Vision | Measurable Outcome |
|-----------|--------|--------------------|
| **6 months** | ________________________________ | ________________________________ |
| **1 year** | ________________________________ | ________________________________ |
| **3 years** | ________________________________ | ________________________________ |
| **5 years** | ________________________________ | ________________________________ |

### Vision Prompts

Answer these when filling in the table above:

- **6 months:** What does a typical Tuesday look like? How many customers do you have? What is your MRR?
- **1 year:** Are you full-time? Do you have help? What is the product known for?
- **3 years:** What industry are you dominant in? How big is the team? What is revenue?
- **5 years:** What have you built that matters? What do people say about SkillScout?

### Core Values (pick 3-5)

- [ ] Autonomy
- [ ] Craftsmanship
- [ ] Speed
- [ ] Transparency
- [ ] Customer obsession
- [ ] Simplicity
- [ ] Resilience
- [ ] ________________________________
- [ ] ________________________________

---

## 2. Skills Assessment Matrix

Rate yourself honestly: **1** = beginner, **2** = can follow tutorials, **3** = can build independently, **4** = proficient, **5** = expert.

Update this monthly. The "Target" column is where you want to be in 12 months.

### Technical Skills

| Skill | Current | Target (12mo) | Priority | Gap |
|-------|:-------:|:--------------:|:--------:|:---:|
| **TypeScript** | _/5 | _/5 | High | _ |
| **Next.js / React** | _/5 | _/5 | High | _ |
| **Tailwind CSS** | _/5 | _/5 | High | _ |
| **Node.js** | _/5 | _/5 | High | _ |
| **n8n workflows** | _/5 | _/5 | Critical | _ |
| **Supabase (Postgres, Auth, Storage)** | _/5 | _/5 | High | _ |
| **Claude API / LLM prompting** | _/5 | _/5 | Critical | _ |
| **Docker & containers** | _/5 | _/5 | Medium | _ |
| **Linux server admin** | _/5 | _/5 | Medium | _ |
| **CI/CD (Coolify, Traefik)** | _/5 | _/5 | Medium | _ |
| **Git & GitHub** | _/5 | _/5 | High | _ |
| **REST APIs** | _/5 | _/5 | High | _ |
| **WebSockets** | _/5 | _/5 | Low | _ |
| **Testing (Vitest, Playwright)** | _/5 | _/5 | Medium | _ |

### Design Skills

| Skill | Current | Target (12mo) | Priority | Gap |
|-------|:-------:|:--------------:|:--------:|:---:|
| **UI design fundamentals** | _/5 | _/5 | High | _ |
| **UX / information architecture** | _/5 | _/5 | High | _ |
| **Figma** | _/5 | _/5 | Medium | _ |
| **Animation (Framer Motion, GSAP)** | _/5 | _/5 | High | _ |
| **3D (Spline)** | _/5 | _/5 | Medium | _ |
| **3D (React Three Fiber)** | _/5 | _/5 | Low | _ |
| **Color theory & typography** | _/5 | _/5 | Medium | _ |
| **Brand & identity design** | _/5 | _/5 | Medium | _ |

### Business Skills

| Skill | Current | Target (12mo) | Priority | Gap |
|-------|:-------:|:--------------:|:--------:|:---:|
| **Sales (outbound, calls, closing)** | _/5 | _/5 | Critical | _ |
| **Copywriting** | _/5 | _/5 | High | _ |
| **Marketing (content, SEO, ads)** | _/5 | _/5 | High | _ |
| **Pricing & packaging** | _/5 | _/5 | High | _ |
| **Negotiation** | _/5 | _/5 | Medium | _ |
| **Financial management** | _/5 | _/5 | Medium | _ |
| **Customer support** | _/5 | _/5 | High | _ |
| **Public speaking / demos** | _/5 | _/5 | Medium | _ |
| **Written communication** | _/5 | _/5 | High | _ |
| **Networking** | _/5 | _/5 | Medium | _ |

### How to Use This Matrix

1. Fill it in right now with honest self-assessments
2. Calculate the gap (Target minus Current) for each skill
3. Focus learning time on **Critical** and **High** priority skills with the largest gaps
4. Revisit on the 1st of every month
5. Celebrate when numbers go up

---

## 3. 90-Day Learning Roadmap

Start date: ______________ | End date: ______________

### Phase 1: Ship the MVP (Weeks 1-4)

**Goal:** Working Telegram bot + portfolio site live on production.

#### Week 1: Foundation

- [ ] Set up Supabase project (schema, auth, RLS policies)
- [ ] Set up n8n on Hetzner VPS via Coolify
- [ ] Build first n8n workflow: simple Telegram echo bot
- [ ] Scaffold Next.js portfolio project with Tailwind + shadcn/ui
- **Learn:** n8n docs (2h), Supabase quickstart (1h), Next.js app router docs (2h)
- **Ship:** Echo bot responding on Telegram

#### Week 2: Core Bot Logic

- [ ] Integrate Claude API into n8n via LangChain nodes
- [ ] Build conversation memory (Supabase as vector store or chat history)
- [ ] Add file handling: receive a document on Telegram, process it, return result
- [ ] Portfolio: hero section, about, services page structure
- **Learn:** Claude API prompt engineering guide (2h), n8n LangChain nodes (2h)
- **Ship:** Bot that can answer questions with context

#### Week 3: Bot Features + Portfolio Design

- [ ] Add terminal command execution via n8n Code node (NOT Execute Command)
- [ ] Implement sandboxing and rate limiting
- [ ] Portfolio: dark glassmorphism styling, animations with Framer Motion
- [ ] Portfolio: case study / demo section showing bot capabilities
- **Learn:** GSAP ScrollTrigger basics (2h), Framer Motion docs (1h)
- **Ship:** Bot with file + terminal access. Portfolio 80% styled.

#### Week 4: Polish & Deploy

- [ ] Portfolio live on custom domain via Coolify + Traefik
- [ ] Telegram bot stable and tested with 5+ use cases
- [ ] Write documentation for bot setup (for future customers)
- [ ] Record 2-minute demo video of bot in action
- [ ] Set up basic analytics (Plausible or Umami, self-hosted)
- **Learn:** Traefik SSL/routing (1h), video recording/editing basics (1h)
- **Ship:** Everything live and shareable.

### Phase 2: First Paying Customer (Weeks 5-8)

**Goal:** $200+ MRR from at least one customer.

#### Week 5: Positioning & Outreach Prep

- [ ] Define ideal customer profile (ICP) for one vertical (e.g., legal or real estate)
- [ ] Write 3 cold outreach message templates
- [ ] Create a one-page PDF sales sheet
- [ ] Set up LinkedIn profile as "AI Automation Consultant"
- [ ] Identify 50 potential prospects in target vertical
- **Learn:** Cold outreach best practices (2h), LinkedIn optimization (1h)

#### Week 6: Active Outreach

- [ ] Send 10 personalized outreach messages per day (50 total)
- [ ] Post first "building in public" content on Twitter/X and LinkedIn
- [ ] Offer 2-3 free pilot programs to build case studies
- [ ] Add testimonials section to portfolio (even if using pilot feedback)
- **Learn:** Sales call frameworks — SPIN selling or Sandler method (2h)

#### Week 7: Close & Onboard

- [ ] Follow up with all prospects who showed interest
- [ ] Conduct demo calls (aim for 3-5 calls this week)
- [ ] Build onboarding flow for new customers
- [ ] Create Stripe payment integration or simple invoicing
- [ ] Draft service agreement / terms of service
- **Learn:** SaaS pricing psychology (1h), service agreements basics (1h)

#### Week 8: Deliver & Document

- [ ] Onboard first paying customer
- [ ] Build their custom bot workflow
- [ ] Set up customer support channel (Telegram group or email)
- [ ] Write internal runbook for customer delivery
- [ ] Collect first testimonial / case study
- **Learn:** Customer success fundamentals (1h)
- **Ship:** First invoice sent. First revenue earned.

### Phase 3: Scale & Optimize (Weeks 9-12)

**Goal:** Systematize. Hit $1K MRR trajectory.

#### Week 9: Product Templating

- [ ] Extract reusable n8n workflow templates from customer work
- [ ] Build self-serve onboarding flow (customer fills form, bot auto-provisions)
- [ ] Add monitoring & alerting for bot uptime (Uptime Kuma)
- [ ] Create pricing page on portfolio with 3 tiers
- **Learn:** n8n advanced patterns — sub-workflows, error handling (2h)

#### Week 10: Content & Authority

- [ ] Publish first technical blog post (e.g., "How I Built an AI Bot with Terminal Access")
- [ ] Create 3 short demo videos for social media
- [ ] Engage in 5 relevant online communities daily (Reddit, Discord, Indie Hackers)
- [ ] Start weekly newsletter or blog cadence
- **Learn:** Technical writing (1h), SEO basics for dev blogs (1h)

#### Week 11: Advanced Features

- [ ] Add WhatsApp Business API integration (if ready) or expand Telegram features
- [ ] Implement usage analytics dashboard for customers
- [ ] Build multi-tenant architecture (one n8n instance serving multiple clients)
- [ ] Add Spline 3D element to portfolio hero
- **Learn:** WhatsApp Business API docs (2h), Spline basics (2h)

#### Week 12: Review & Plan Next Quarter

- [ ] Full quarterly retrospective (use template in Section 13)
- [ ] Update skills assessment matrix
- [ ] Set OKRs for next quarter
- [ ] Plan next 90 days based on what worked
- [ ] Celebrate wins (seriously, do this)
- **Output:** Q2 plan written and committed.

---

## 4. Technical Learning Path

Ordered by priority. Start from the top, work down.

### Tier 1: Critical (Learn Now)

#### n8n Workflow Automation

| Resource | Type | Time | Link |
|----------|------|------|------|
| n8n official docs | Docs | 5h | https://docs.n8n.io |
| n8n course (beginner to advanced) | Course | 8h | https://docs.n8n.io/courses/ |
| n8n community templates | Reference | Ongoing | https://n8n.io/workflows |
| LangChain nodes in n8n | Docs | 3h | https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.lm-chat-anthropic/ |

**Key practice:** Build one new workflow every week for the first month.

#### Claude API & Prompt Engineering

| Resource | Type | Time | Link |
|----------|------|------|------|
| Anthropic prompt engineering guide | Docs | 3h | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering |
| Claude API reference | Docs | 2h | https://docs.anthropic.com/en/api |
| Anthropic cookbook | Examples | 4h | https://github.com/anthropics/anthropic-cookbook |

**Key practice:** Iterate on system prompts. Keep a prompt journal of what works and what does not.

#### Supabase

| Resource | Type | Time | Link |
|----------|------|------|------|
| Supabase official docs | Docs | 4h | https://supabase.com/docs |
| Supabase YouTube channel | Video | 3h | https://www.youtube.com/@Supabase |
| Row Level Security deep dive | Docs | 2h | https://supabase.com/docs/guides/auth/row-level-security |

**Key practice:** Build the SkillScout schema from scratch. Implement RLS from day one.

### Tier 2: High (Learn Within 30 Days)

#### Next.js & React

| Resource | Type | Time | Link |
|----------|------|------|------|
| Next.js official docs (App Router) | Docs | 6h | https://nextjs.org/docs |
| React docs (hooks, server components) | Docs | 4h | https://react.dev |
| Theo (t3.gg) YouTube | Video | Ongoing | https://www.youtube.com/@t3dotgg |
| Josh Comeau — Joy of React | Course | 20h | https://www.joyofreact.com |

#### TypeScript

| Resource | Type | Time | Link |
|----------|------|------|------|
| TypeScript handbook | Docs | 4h | https://www.typescriptlang.org/docs/handbook/ |
| Total TypeScript (Matt Pocock) | Course | 10h | https://www.totaltypescript.com |
| Type challenges | Practice | Ongoing | https://github.com/type-challenges/type-challenges |

#### Tailwind CSS + shadcn/ui

| Resource | Type | Time | Link |
|----------|------|------|------|
| Tailwind docs | Docs | 2h | https://tailwindcss.com/docs |
| shadcn/ui docs | Docs | 2h | https://ui.shadcn.com |
| Tailwind Labs YouTube | Video | 2h | https://www.youtube.com/@TailwindLabs |

### Tier 3: Medium (Learn Within 60 Days)

#### Docker & DevOps

| Resource | Type | Time | Link |
|----------|------|------|------|
| Docker getting started | Docs | 3h | https://docs.docker.com/get-started/ |
| Coolify docs | Docs | 2h | https://coolify.io/docs |
| TechWorld with Nana (Docker) | Video | 4h | https://www.youtube.com/@TechWorldwithNana |
| Traefik docs | Docs | 2h | https://doc.traefik.io/traefik/ |

#### Animation (GSAP + Framer Motion)

| Resource | Type | Time | Link |
|----------|------|------|------|
| GSAP docs + ScrollTrigger | Docs | 4h | https://gsap.com/docs/v3/ |
| Framer Motion docs | Docs | 3h | https://motion.dev |
| Fireship — animated website tutorial | Video | 1h | https://www.youtube.com/@Fireship |

### Tier 4: Low (Learn Within 90 Days)

#### 3D (Spline, then React Three Fiber)

| Resource | Type | Time | Link |
|----------|------|------|------|
| Spline official tutorials | Video | 3h | https://spline.design |
| Three.js Journey (Bruno Simon) | Course | 40h | https://threejs-journey.com |
| R3F docs | Docs | 3h | https://r3f.docs.pmnd.rs |

**Note:** 3D is a nice-to-have for the portfolio. Do not let it distract from revenue-generating work.

### Learning Rules

1. **Never spend more than 30% of your day learning.** The rest is building and selling.
2. **Apply everything immediately.** Read a doc section, then implement it in SkillScout.
3. **Tutorials are input, shipping is output.** Measure output.
4. **If stuck for more than 30 minutes, ask Claude.** That is literally what you are building.
5. **Keep a TIL (Today I Learned) log.** One sentence per day in a text file.

---

## 5. Design Learning Path

You do not need to become a designer. You need to develop enough taste to build a portfolio that converts visitors into customers.

### Phase 1: Foundations (Weeks 1-2)

**Goal:** Understand why good design works.

- [ ] Read "Refactoring UI" by Adam Wathan & Steve Schoger (the single best resource for developer-designers)
- [ ] Study 10 award-winning SaaS websites on https://www.awwwards.com — note patterns
- [ ] Learn the 60-30-10 color rule and apply it to SkillScout's palette
- [ ] Practice: Redesign one section of a bad website using SkillScout's design system

**Key concepts:** Visual hierarchy, whitespace, contrast, alignment, consistency.

### Phase 2: Tools (Weeks 3-4)

**Goal:** Be productive in Figma for wireframes and mockups.

| Resource | Type | Time |
|----------|------|------|
| Figma basics (official) | Video | 2h |
| Figma for Developers (Design Course YT) | Video | 1h |
| shadcn/ui Figma kit | Template | 1h |

- [ ] Create a wireframe of the SkillScout portfolio in Figma before coding it
- [ ] Build a component library in Figma matching your shadcn/ui setup

### Phase 3: Motion & Interaction (Weeks 5-8)

**Goal:** Add purposeful animation that guides attention.

- [ ] Learn the 12 principles of animation (Disney) — focus on easing, anticipation, follow-through
- [ ] Implement scroll-triggered reveals with GSAP ScrollTrigger
- [ ] Add micro-interactions with Framer Motion (hover states, page transitions)
- [ ] Study: https://basement.studio and https://linear.app for animation inspiration

**Rules for animation:**
- Every animation must serve a purpose (guide attention, show state change, delight)
- If it takes more than 300ms, it is too slow
- If the user does not notice it consciously, it is working

### Phase 4: 3D & Advanced (Weeks 9-12)

**Goal:** One impressive 3D element on the portfolio hero.

- [ ] Build a simple 3D scene in Spline (rotating logo, abstract shape)
- [ ] Export and embed in Next.js using the Spline React component
- [ ] Optimize for performance (lazy load, reduce polygon count)
- [ ] If confident, explore React Three Fiber for more control

### Design Taste Builders

Do these regularly. They cost nothing and compound over time.

| Activity | Frequency | Where |
|----------|-----------|-------|
| Browse Dribbble / Behance for SaaS designs | 15 min/day | https://dribbble.com |
| Study one great landing page and note 3 things it does well | 3x/week | https://landingfolio.com |
| Follow design-focused devs on Twitter | Ongoing | @shadcn, @adamwathan, @raaborern |
| Screenshot designs you like into a swipe file folder | Ongoing | Local folder: `~/swipe-file/` |

---

## 6. Business & Marketing Skills

You are not just a developer. You are a business owner. These skills directly translate to revenue.

### Sales

**The uncomfortable truth:** Nothing happens until somebody sells something. No amount of code quality will matter if you have zero customers.

#### Cold Outreach Template (LinkedIn/Email)

```
Subject: Quick question about [their specific pain point]

Hi [Name],

I noticed [specific observation about their business — e.g., "your team
handles a lot of document processing based on your recent job posting"].

I built an AI assistant that connects to WhatsApp/Telegram and can
[specific benefit — e.g., "process contracts and extract key terms in
seconds instead of hours"].

Would a 15-minute demo be worth your time this week?

[Your name]
SkillScout — AI Automation for [Industry]
```

#### Sales Call Framework (15-minute demo)

| Phase | Time | What to Do |
|-------|------|------------|
| **Rapport** | 2 min | Ask about their role, show genuine interest |
| **Discovery** | 4 min | "What's the most tedious repetitive task your team does?" |
| **Demo** | 5 min | Show the bot solving THEIR problem (pre-customize if possible) |
| **Close** | 3 min | "Based on what you've seen, would this save your team time?" |
| **Next step** | 1 min | "Let me send over pricing. When should we reconnect?" |

**Key rules:**
- Listen more than you talk (aim for 70/30 ratio)
- Sell the outcome, not the technology
- Never say "AI" to non-technical buyers — say "smart assistant" or "automation"
- Follow up 3 times. Most sales happen on the 3rd-5th contact.

### Copywriting

Writing that sells. Every word on your website, every email, every message.

**Formula: PAS (Problem, Agitation, Solution)**

1. **Problem:** "Your team spends 4 hours a day on document processing."
2. **Agitate:** "That's 1,000 hours a year — $50K in salary — spent on work a bot can do."
3. **Solution:** "SkillScout's AI assistant processes documents in seconds via WhatsApp."

**Resources:**
- "Obviously Awesome" by April Dunford (positioning)
- "The Copywriter's Handbook" by Robert Bly
- Harry Dry's Marketing Examples: https://marketingexamples.com

### Pricing Psychology

- **Anchor high.** Show the $1,500/mo Enterprise plan first. The $500/mo plan looks reasonable next to it.
- **Use 3 tiers.** Most people pick the middle one.
- **Price on value, not cost.** If your bot saves a legal firm 20 hours/month at $200/hr, that is $4,000 in value. Charging $500/mo is a steal.
- **Annual discount.** Offer 2 months free for annual billing. This locks in revenue and reduces churn.
- **Never compete on price.** Compete on outcomes and service.

### LinkedIn Strategy

- Optimize profile: headline = "I build AI assistants that [outcome] for [industry]"
- Post 3-5x per week: mix of building in public, industry insights, case studies
- Comment on 10 posts per day from people in target industries
- Send 5 connection requests per day to ICPs with personalized notes
- Share demo videos natively (LinkedIn favors native video)

### Negotiation Basics

- Know your walk-away number before any call
- Never give a discount without getting something in return (longer contract, testimonial, referral)
- Silence is a tool. After stating your price, stop talking.
- "That's outside our standard pricing, but if you commit to annual billing, I can include [extra feature]."

---

## 7. Daily Habits & Routines

### The Solo Founder Daily Schedule

This is a template. Adapt it to your energy patterns.

```
06:30 - 07:00  Wake up, no phone. Water. Light movement or walk.
07:00 - 07:30  Review daily plan. Check metrics. Set 3 priorities.
07:30 - 10:30  DEEP WORK BLOCK 1: Building (code, design, product)
               No Slack, no email, no social media. Phone on DND.
10:30 - 11:00  Break. Walk, stretch, snack.
11:00 - 12:30  DEEP WORK BLOCK 2: Building (continued)
12:30 - 13:30  Lunch + learning (watch a technical video, read docs)
13:30 - 15:00  BUSINESS BLOCK: Sales, outreach, emails, customer calls
15:00 - 15:30  Break. Exercise or walk.
15:30 - 17:00  CREATIVE BLOCK: Content creation, design work, writing
17:00 - 17:30  Daily review. Update todos. Plan tomorrow.
17:30 - 18:30  LEARNING BLOCK: Courses, tutorials, reading
18:30+         Done. Rest. No guilt.
```

### Non-Negotiable Daily Habits

| Habit | Time | Why |
|-------|------|-----|
| **No phone for first 30 min** | Morning | Protects your mental state |
| **3 priorities written down** | Before work | Focus prevents drift |
| **4h deep work minimum** | Morning | This is where real progress happens |
| **Move your body** | Afternoon | Sitting all day destroys energy and creativity |
| **Daily review (5 min)** | End of day | Accountability to yourself |
| **8h sleep** | Night | Non-negotiable. Sleep debt compounds like credit card debt. |

### Weekly Habits

| Day | Focus Area |
|-----|-----------|
| **Monday** | Planning + hardest technical task |
| **Tuesday** | Building |
| **Wednesday** | Building + outreach |
| **Thursday** | Building + content creation |
| **Friday** | Business development + admin |
| **Saturday** | Learning + side project / exploration |
| **Sunday** | Rest. Plan the week. Light reading only. |

---

## 8. Productivity Systems

### Time Blocking

Every hour has a job. If it is not on the calendar, it does not exist.

Use a simple tool: Google Calendar, Notion, or a physical planner. Block your day according to the schedule in Section 7. Protect deep work blocks like they are meetings with your most important client, because they are.

### Pomodoro (Modified for Deep Work)

Standard Pomodoro (25 min work / 5 min break) is too short for programming. Use this instead:

- **50 minutes** of focused work
- **10 minutes** break (stand up, walk, hydrate)
- After 3 cycles, take a **30 minute** break
- Track cycles completed per day. Aim for 6-8 productive cycles.

### Weekly Review (Every Sunday, 30 min)

```markdown
## Weekly Review — Week of [DATE]

### What I shipped this week:
1.
2.
3.

### What I learned:
1.
2.

### What did not go well:
1.

### What will I do differently next week:
1.

### Top 3 priorities for next week:
1.
2.
3.

### Key metrics:
- Outreach messages sent: ___
- Demos booked: ___
- Revenue this week: $___
- Hours of deep work: ___
- Commits / PRs: ___
```

### Monthly Retrospective (1st of each month, 1 hour)

```markdown
## Monthly Retrospective — [MONTH YEAR]

### Wins (celebrate these):
-
-
-

### Revenue:
- MRR start of month: $___
- MRR end of month: $___
- New customers: ___
- Churned customers: ___

### Skills updated: (re-assess matrix from Section 2)

### Biggest lesson:


### Next month focus areas:
1.
2.
3.

### Am I on track for 90-day goals? (Y/N)
If no, what needs to change?
```

### OKRs for Solopreneurs

Set 2-3 Objectives per quarter. Each Objective gets 2-3 Key Results. Keep it simple.

**Example Q1 OKRs:**

```
Objective 1: Launch SkillScout MVP
  KR1: Telegram bot live with file + terminal access by [date]
  KR2: Portfolio website deployed with 3+ demo use cases by [date]
  KR3: 5 people have tested the bot and provided feedback by [date]

Objective 2: Get first paying customer
  KR1: Send 200 outreach messages by [date]
  KR2: Conduct 10 demo calls by [date]
  KR3: Close 1 customer at $200+/mo by [date]

Objective 3: Build personal brand in AI automation
  KR1: Publish 12 LinkedIn posts (3/week for 4 weeks) by [date]
  KR2: Write 2 technical blog posts by [date]
  KR3: Gain 200 new LinkedIn connections in target industry by [date]
```

**Your Q1 OKRs:**

```
Objective 1:
  KR1:
  KR2:
  KR3:

Objective 2:
  KR1:
  KR2:
  KR3:
```

---

## 9. Mental Health & Resilience

Building a business alone is hard. This section is not optional.

### Burnout Prevention

**Warning signs:**
- Dreading work you used to enjoy
- Decision fatigue on small choices
- Working more hours but producing less
- Irritability, insomnia, or persistent fatigue
- Feeling like nothing you do matters

**If you notice 2+ signs:**
1. Take a full day off. Not a "light work" day. A real day off.
2. Sleep 9+ hours for 3 nights in a row
3. Talk to someone (friend, mentor, therapist)
4. Reduce scope. Cut your todo list in half.
5. Go outside. Move. Sweat.

**Prevention (build these into your routine):**
- Hard stop time every day (no "just one more thing")
- One full rest day per week
- Exercise 3+ times per week
- Social contact that has nothing to do with work
- Hobbies that are not screens

### Imposter Syndrome

It will happen. Here is how to handle it.

**Reframes:**
- "I don't know enough" → "I know enough to start, and I learn fast."
- "Real businesses have teams" → "Every company started with one person."
- "Who would pay me for this?" → "The value I create is real. The time I save is real."
- "I'm not a real developer/designer/marketer" → "I am building a product and finding customers. That is as real as it gets."

**Practical actions when imposter syndrome hits:**
1. Open your milestone tracker (Section 15) and look at what you have already done
2. Re-read positive feedback from users or testers
3. Remind yourself: most people never even start
4. Ship something small. Momentum kills doubt.

### Dealing with Uncertainty

- You will not know if this works for months. That is normal.
- Set a "decision date" for major pivots (e.g., "I will evaluate at 6 months with $X MRR threshold")
- Control inputs (hours worked, outreach sent, code shipped) not outcomes
- Journal when anxious. Writing externalizes worry.

### Support Network

You need people. Not many, but some.

| Type | Who | How Often |
|------|-----|-----------|
| **Accountability partner** | Another solo founder or indie hacker | Weekly check-in |
| **Technical mentor** | Senior dev you respect | Monthly call or async |
| **Business advisor** | Someone who has sold B2B software | Quarterly |
| **Peer community** | Indie Hackers, local meetup, Discord | Daily lurk, weekly engage |
| **Personal support** | Friends, family, partner | Always |

---

## 10. Networking Strategy

Networking is not schmoozing. It is building genuine relationships with people who share your interests.

### Online Communities (Pick 3, Go Deep)

| Community | Platform | Why |
|-----------|----------|-----|
| **Indie Hackers** | Web | Solo founders building profitable businesses |
| **n8n Community** | Forum | Direct access to n8n users and team |
| **r/SaaS** | Reddit | SaaS founders sharing wins, losses, advice |
| **AI/ML Discord servers** | Discord | Builders using AI in production |
| **Dev Twitter/X** | Twitter | Building in public, networking with devs |
| **Local tech meetups** | Meetup.com | Face-to-face connections in your city |

### Building in Public Strategy

Share your journey. People follow stories, not products.

**What to share:**
- Weekly progress updates with real numbers
- Technical challenges and how you solved them
- Revenue milestones (even small ones)
- Failures and lessons learned
- Behind-the-scenes of building

**What NOT to share:**
- Customer details without permission
- Security implementation details
- Anything you would not want a competitor to see

### Networking Rules

1. **Give before you ask.** Help 10 people before asking for anything.
2. **Be specific when asking for help.** "Can you review my landing page copy?" beats "Can you help me with my startup?"
3. **Follow up.** After every conversation, send a thank-you message.
4. **Show your work.** People want to help builders, not talkers.
5. **One warm introduction is worth 100 cold emails.**

### Open Source Contributions

Contributing to open source builds credibility and skills simultaneously.

**Start here:**
- Fix docs or typos in n8n, Supabase, or shadcn/ui repos (low barrier, high visibility)
- Build and share n8n workflow templates
- Create a useful open-source tool related to your niche
- Write about your contributions

---

## 11. Content Creation Strategy

Content is leverage. Write once, it works for you forever.

### Content Pillars (Pick 3)

1. **AI Automation How-Tos** — tutorials, guides, "how I built X"
2. **Industry-Specific AI Use Cases** — "How legal firms use AI assistants"
3. **Building in Public** — journey, revenue, lessons

### Platform Strategy

| Platform | Content Type | Frequency | Goal |
|----------|-------------|-----------|------|
| **LinkedIn** | Short posts, case studies, demos | 3-5x/week | Lead generation, authority |
| **Twitter/X** | Threads, hot takes, building in public | Daily | Community, developer audience |
| **Blog (portfolio site)** | Long-form technical posts | 2x/month | SEO, authority |
| **YouTube (optional)** | Tutorials, demos | 2x/month | Trust, tutorial searches |

### Content Calendar Template

| Week | Monday | Wednesday | Friday |
|------|--------|-----------|--------|
| 1 | LinkedIn: Tip/insight | Blog: Tutorial | Twitter: Week recap thread |
| 2 | LinkedIn: Case study | LinkedIn: Behind-the-scenes | Twitter: Hot take |
| 3 | LinkedIn: Industry trend | Blog: How-to guide | LinkedIn: Milestone update |
| 4 | LinkedIn: Lesson learned | LinkedIn: Demo video | Twitter: Monthly recap |

### Content Creation Process

1. **Capture** — Keep a note of ideas throughout the day (phone notes app is fine)
2. **Batch** — Write 3-5 posts in one sitting during your Creative Block
3. **Schedule** — Use a scheduling tool (Buffer, Typefully, or just calendar reminders)
4. **Repurpose** — Every blog post becomes 3 LinkedIn posts, 5 tweets, 1 thread
5. **Measure** — Track impressions, engagement, and most importantly, inbound leads

### Content Quality Checklist

Before publishing anything, check:

- [ ] Would I save/bookmark this if someone else posted it?
- [ ] Does it teach something specific or share a real experience?
- [ ] Is it skimmable? (short paragraphs, headers, bold key points)
- [ ] Does it have a clear call to action? (follow, visit site, DM me)
- [ ] Have I removed all fluff and filler words?

---

## 12. Financial Planning

### Personal Runway Tracker

Know exactly how long you can sustain this.

```
Monthly expenses (personal):     $________
Monthly expenses (business):     $________
  - VPS hosting (Hetzner):       $________
  - Domain(s):                   $________
  - Tools & subscriptions:       $________
  - Claude API usage:            $________
Total monthly burn:              $________

Current savings:                 $________
Months of runway:                $________ (savings / total burn)

Minimum viable income:           $________ (covers expenses + 20% buffer)
```

### Revenue Targets

| Milestone | MRR | Customers (at avg $400/mo) | Deadline |
|-----------|-----|---------------------------|----------|
| **Ramen profitable** | $1,000 | 2-3 | __________ |
| **Covers all expenses** | $3,000 | 7-8 | __________ |
| **Comfortable** | $5,000 | 12-13 | __________ |
| **Ready to scale** | $10,000 | 25 | __________ |
| **Consider full-time** | $15,000 | 37-38 | __________ |

### Reinvestment Strategy

Until you hit $5K MRR, reinvest most profit back into the business:

| MRR Range | Reinvest | Keep | What to Buy |
|-----------|----------|------|-------------|
| $0-$1K | 90% | 10% | Better hosting, one paid tool |
| $1K-$3K | 70% | 30% | Contractor help, ads budget |
| $3K-$5K | 50% | 50% | Part-time help, better equipment |
| $5K-$10K | 40% | 60% | First hire or senior contractor |
| $10K+ | 30% | 70% | Team building, office if needed |

### When to Quit Your Day Job (If Applicable)

Do NOT quit until:

- [ ] MRR covers 100% of personal expenses for 3 consecutive months
- [ ] You have 6 months of personal expenses saved as emergency fund
- [ ] You have at least 3 paying customers (not dependent on one)
- [ ] Growth trend is positive (MRR increasing month over month)
- [ ] You have a clear plan for the next 6 months of growth

### Emergency Fund

Maintain a personal emergency fund separate from business funds.

- Target: 6 months of personal expenses
- Keep in a high-yield savings account
- Never touch it for business expenses
- Replenish immediately if you dip into it

---

## 13. Accountability Framework

### Daily Scorecard

Track these numbers every day. Takes 2 minutes.

```
Date: __________

[ ] 4+ hours of deep work completed
[ ] Top 3 priorities attempted
[ ] Outreach/sales activity done
[ ] Learned something new
[ ] Exercised or moved 30+ min
[ ] Stopped work by hard stop time

Score: ___/6
```

### Weekly Scorecard

```
Week of: __________

Deep work hours: ___/20 target
Outreach messages sent: ___
Demo calls conducted: ___
Content pieces published: ___
Features shipped: ___
Revenue collected: $___
New leads: ___
Customer conversations: ___

Highlights:
-
-

Blockers:
-

Next week focus:
-
```

### Monthly Review Template

Complete on the 1st of each month.

```markdown
# Monthly Review — [MONTH YEAR]

## Numbers
- MRR: $___
- New customers: ___
- Churn: ___
- Total customers: ___
- Revenue collected: $___
- Expenses: $___
- Profit: $___
- Runway remaining: ___ months

## Product
- Features shipped:
- Bugs fixed:
- Technical debt addressed:

## Sales & Marketing
- Outreach messages sent: ___
- Demo calls: ___
- Close rate: ___%
- Content published: ___
- Website visitors: ___
- Leads generated: ___

## Personal
- Skills improved:
- Health/energy level (1-10): ___
- Stress level (1-10): ___
- Biggest win:
- Biggest challenge:
- Key lesson:

## Next Month
- OKR progress check:
- Top 3 priorities:
  1.
  2.
  3.
- What I will stop doing:
- What I will start doing:
```

### Quarterly Planning Template

Complete at the end of each quarter. Takes 2-3 hours.

```markdown
# Quarterly Plan — Q_ [YEAR]

## Last Quarter Review
- OKR 1 result: ___% complete
- OKR 2 result: ___% complete
- OKR 3 result: ___% complete
- Revenue growth: $____ → $____
- Biggest accomplishment:
- Biggest failure:
- Key insight:

## This Quarter's Theme
One sentence: _______________________________________________

## OKRs
Objective 1: _______________________________________________
  KR1:
  KR2:
  KR3:

Objective 2: _______________________________________________
  KR1:
  KR2:
  KR3:

## Month-by-Month Focus
- Month 1:
- Month 2:
- Month 3:

## Risks & Mitigations
| Risk | Likelihood | Mitigation |
|------|-----------|------------|
|      |           |            |
|      |           |            |

## Resources Needed
-
-

## Definition of a Great Quarter
If I accomplish these 3 things, this quarter was a success:
1.
2.
3.
```

---

## 14. Recommended Resources

### Books

| Book | Author | Category | Why |
|------|--------|----------|-----|
| *The Mom Test* | Rob Fitzpatrick | Sales | How to talk to customers without lying to yourself |
| *Obviously Awesome* | April Dunford | Positioning | How to position your product so customers get it |
| *Refactoring UI* | A. Wathan & S. Schoger | Design | Design tips for developers. Practical and visual. |
| *The SaaS Playbook* | Rob Walling | Business | Building a SaaS without VC funding |
| *$100M Offers* | Alex Hormozi | Sales | Creating offers so good people feel stupid saying no |
| *Deep Work* | Cal Newport | Productivity | Focused work in a distracted world |
| *Atomic Habits* | James Clear | Habits | Small changes, remarkable results |
| *The War of Art* | Steven Pressfield | Mindset | Beating resistance and doing the work |
| *Zero to Sold* | Arvid Kahl | Business | Building a bootstrapped SaaS from scratch |
| *Company of One* | Paul Jarvis | Business | Why staying small might be the goal |

**Reading rule:** Read one business/mindset book and one technical book per month. 30 minutes before bed, no screens.

### Podcasts

| Podcast | Host | Focus |
|---------|------|-------|
| *Indie Hackers* | Courtland Allen | Solo founder stories |
| *My First Million* | Shaan Puri & Sam Parr | Business ideas, trends |
| *Startups for the Rest of Us* | Rob Walling | Bootstrapped SaaS |
| *Syntax* | Wes Bos & Scott Tolinski | Web development |
| *How I Built This* | Guy Raz | Founder stories |
| *The Changelog* | Adam Stacoviak | Open source, dev culture |

**Listening rule:** Podcasts during commute, exercise, or cooking. Never during deep work.

### YouTube Channels

| Channel | Focus |
|---------|-------|
| Fireship | Quick tech explainers |
| Theo (t3.gg) | Next.js, TypeScript, web dev opinions |
| Web Dev Simplified | Clear tutorials |
| Kevin Powell | CSS mastery |
| TechWorld with Nana | DevOps, Docker, Kubernetes |
| The Futur | Design business, branding |
| Y Combinator | Startup advice |
| Greg Isenberg | Community-led businesses |

### Communities

| Community | Link | What You Get |
|-----------|------|-------------|
| Indie Hackers | https://www.indiehackers.com | Founder peers, advice, accountability |
| n8n Community | https://community.n8n.io | n8n help, workflow sharing |
| r/SaaS | Reddit | SaaS founder discussions |
| Hacker News | https://news.ycombinator.com | Tech industry pulse |
| WIP.co | https://wip.co | Accountability for makers |

### Tools for Productivity

| Tool | Use | Cost |
|------|-----|------|
| **Todoist** or **Linear** | Task management | Free-$10/mo |
| **Notion** or **Obsidian** | Knowledge base / wiki | Free |
| **Typefully** | Schedule tweets/threads | Free-$15/mo |
| **Plausible** | Privacy-friendly analytics | Self-host free |
| **Uptime Kuma** | Uptime monitoring | Self-host free |
| **Cal.com** | Booking demo calls | Self-host free |

---

## 15. Milestone Tracker

Track the moments that matter. Fill in dates as you achieve them.

### Product Milestones

| Milestone | Target Date | Actual Date | Notes |
|-----------|:-----------:|:-----------:|-------|
| Supabase project created | | | |
| n8n running on Hetzner | | | |
| First Telegram bot responding | | | |
| Bot with Claude API integration | | | |
| Bot with file handling | | | |
| Bot with terminal access (sandboxed) | | | |
| Portfolio site deployed | | | |
| Portfolio with animations & 3D | | | |
| WhatsApp integration live | | | |
| Multi-tenant architecture working | | | |
| Customer dashboard built | | | |
| Self-serve onboarding flow | | | |

### Business Milestones

| Milestone | Target Date | Actual Date | Notes |
|-----------|:-----------:|:-----------:|-------|
| First outreach message sent | | | |
| First demo call conducted | | | |
| First pilot user onboarded | | | |
| First paying customer | | | |
| First testimonial received | | | |
| First case study published | | | |
| $500 MRR | | | |
| $1,000 MRR | | | |
| $3,000 MRR | | | |
| $5,000 MRR | | | |
| $10,000 MRR | | | |
| First employee/contractor hired | | | |

### Personal Milestones

| Milestone | Target Date | Actual Date | Notes |
|-----------|:-----------:|:-----------:|-------|
| Skills matrix first completed | | | |
| First blog post published | | | |
| First conference/meetup attended | | | |
| First open source contribution | | | |
| 90-day plan completed | | | |
| Accountability partner found | | | |
| 30-day exercise streak | | | |
| First public talk/demo | | | |
| Read 6 books from recommended list | | | |
| Completed a technical course | | | |

### Revenue Log

Track every dollar. It is motivating and useful for planning.

| Date | Customer | Amount | Type | Notes |
|------|----------|--------|------|-------|
| | | $ | | |
| | | $ | | |
| | | $ | | |
| | | $ | | |
| | | $ | | |

---

## How to Use This Document

1. **Print Section 7 (Daily Habits)** and pin it next to your monitor
2. **Fill in Section 1 (Mission & Vision)** right now, today
3. **Complete Section 2 (Skills Matrix)** honestly, it takes 10 minutes
4. **Start the 90-Day Roadmap** in Section 3 and update it weekly
5. **Do the Weekly Review** every Sunday (Section 8)
6. **Do the Monthly Review** on the 1st of each month (Section 13)
7. **Update the Milestone Tracker** whenever you hit one (Section 15)
8. **Re-read Sections 9 (Mental Health)** when things get hard

This is a living document. It grows with you. Update it, adapt it, make it yours.

The only wrong way to use it is to not use it at all.

---

> "The best time to plant a tree was 20 years ago. The second best time is now."

Now go build something.
