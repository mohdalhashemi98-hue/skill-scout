# CLAUDE.md — Project Context

## Project: AI Automation Business (skill-scout)

An AI chatbot automation business offering purpose-built bots with terminal/file access via WhatsApp and Telegram. Built on n8n + Supabase + Claude API.

**Priority: Design First** — Build visual identity and portfolio before product.

---

## Agent Team Structure

| Agent | Role | Domain Doc |
|-------|------|-----------|
| Design Agent | Creative Director | `docs/design/GEN_Z_DESIGN_GUIDE.md` |
| Technical Agent | Systems Architect | `docs/technical/ARCHITECTURE.md` |
| Business Agent | Strategy Lead | `docs/business/BUSINESS_STRATEGY.md` |
| Self-Improvement Agent | Growth Coach | `docs/self-improvement/GROWTH_PLAYBOOK.md` |

---

## Key Stack

- **Automation:** n8n (self-hosted, Docker)
- **Database/Auth/Storage:** Supabase
- **AI:** Claude API via n8n LangChain nodes
- **Frontend:** Next.js + Tailwind CSS + shadcn/ui + Motion (Framer Motion)
- **3D:** Spline (beginner) → React Three Fiber (advanced)
- **Scroll/Animation:** GSAP ScrollTrigger + Lenis
- **Deployment:** Hetzner VPS + Coolify + Traefik
- **Messaging:** Telegram (MVP) → WhatsApp Business API (Phase 2)

---

## Brand Design System (Gen Z Dark Glassmorphism)

- Background: `#0A0A0F` | Surface: `#1A1A2E`
- Primary: `#6A5BCD` (Gen Z Purple) | Accent: `#FF6E61` (Coral)
- Success: `#6FBE8D` | Warning: `#F7C94B` | Text: `#E0E0E0`
- Dark mode default, glassmorphism, noise/grain, mesh gradients

---

## Critical Business Context

- **Meta banned general-purpose AI chatbots from WhatsApp (Jan 2026)** — only purpose-built business bots allowed
- **File/terminal access via chat is nearly unserved** — major differentiator
- **Pricing gap:** $15/mo basic tools vs $25K+ custom builds — room for $200-500/mo mid-market
- **Target industries:** Legal, Real Estate, Healthcare, Logistics, E-commerce
- **n8n CVE-2026-1470 (9.9 severity):** Never use Execute Command node — use Code node with task runners

---

## MCP Tools Available

- [n8n-mcp](https://github.com/czlonkowski/n8n-mcp) — cloned to `./n8n-mcp/`
- [n8n-skills](https://github.com/czlonkowski/n8n-skills) — cloned to `./n8n-skills/`
- [mcp-n8n-workflow-builder](https://github.com/salacoste/mcp-n8n-workflow-builder) — cloned to `./mcp-n8n-workflow-builder/`

---

## TODOs

- [ ] Install Pixel Agents VS Code extension on local PC
- [ ] Set up n8n MCP server for Claude Code integration
- [ ] Build portfolio website (design-first priority)
- [ ] Create first Telegram bot workflow in n8n
- [ ] Set up Supabase project with schema

---

## Pixel Agents (VS Code Extension)

- **Repo:** https://github.com/pablodelucca/pixel-agents
- **What:** VS Code extension — animated pixel art characters tracking AI coding agents
- **Install:** VS Code → Extensions → "Pixel Agents" → Ctrl+Shift+P → "Pixel Agents: Open Office"

---

## Project Structure

```
skill-scout/
├── CLAUDE.md              # This file — project context
├── SKILL.md               # OpenClaw skill definition
├── GITHUB_SKILLS_LOCAL.md # GitHub Skills reference
├── docs/
│   ├── design/            # Gen Z design guide, color palettes, animation reference
│   ├── business/          # Market research, competitors, pricing, go-to-market
│   ├── technical/         # Architecture, sandboxing, deployment, n8n patterns
│   └── self-improvement/  # Learning path, productivity, 90-day plan
├── workflows/             # n8n workflow JSON templates
├── n8n-mcp/               # MCP server for n8n (cloned)
├── n8n-skills/            # Claude Code skills for n8n (cloned)
└── mcp-n8n-workflow-builder/ # Conversational n8n workflow builder (cloned)
```
