# 🧩 Portfolio Monorepo

A full-stack, multi-tenant SaaS portfolio project demonstrating secure user authentication, RBAC, microservice architecture, and AI-powered features — all built using modern technologies.

## 🏗️ Monorepo Overview

This monorepo uses **PNPM Workspaces** to manage multiple projects and shared dependencies efficiently.

```
.
├── nginx/              # NGINX reverse proxy
├── ollama/             # Ollama to run LLMs locally
├── packages/
│   ├── security-hub/   # Vue.js + Tailwind app
│   ├── privategpt-svc/ # NestJS microservice for AI/LLM apps
│   ├── ...             # Other microservices
├── libs/
│   ├── shared/         # Shared types/utils between frontend and backend
│   └── ui/             # Reusable Vue components and layouts
├── Dockerfile.services # Dynamic Dockerfile for all microservices
└── pnpm-workspace.yaml
```

---

## 🖥️ Frontend

- **Framework**: Vue.js 3 (Composition API)
- **Styling**: TailwindCSS, Dark/Light Mode
- **Icons**: FontAwesome & HeroIcons
- **UI Library**: PrimeVue with custom theme preset
- **Reusable components**: Built with maintainability in mind
- **Authentication**: Auth0 login with RBAC
- **Tenant-aware UI**: Organization-level branding and behavior

---

## 🔐 Authentication & Authorization

- **Auth0** for login, registration, and secure token handling
- **RBAC**: Role-based access control powered by Auth0 roles
- **Multi-Tenant Support**: Enabled via Auth0 Organizations
- **User Onboarding**: Automatic user creation with role and tenant assignment

---

## 🧠 AI Applications

Powered by **LangChainJS** and **Ollama**, integrated into both frontend and backend.

- **Chat Interface**: LLM-driven conversations
- **Summarization Tool**: Extractive & abstractive summarization
- **RAG (Retrieval-Augmented Generation)**: Grounded AI responses via vector stores

---

## 🔧 Backend (NestJS Microservices)

- **Architecture**: Microservices (each module as an isolated service)
- **RBAC & Guards**: Fine-grained access control per endpoint
- **Multi-Tenancy**: Context-aware services using Auth0 Organization claims
- **AI Service**: Dedicated service for AI tasks (chat, summarization, RAG)

---

## 🌐 NGINX

- Reverse proxy to route traffic to frontend, backend, and AI services
- SSL support (optional via certbot)
- Multi-service routing and tenant-aware headers

---

## 📦 Tech Stack

| Layer       | Tech                                                |
|-------------|-----------------------------------------------------|
| Monorepo    | PNPM Workspaces                                     |
| Frontend    | Vue.js, Tailwind, FontAwesome, HeroIcons, PrimeVue  |
| Auth        | Auth0 (OIDC, RBAC, Organizations)                   |
| Backend     | NestJS (Microservices), AuthGuards, Role Decorators |
| AI          | LangChainJS, Ollama                                 |
| Proxy       | NGINX                                               |
| Dev Tools   | Docker, ESLint, Prettier, Husky, Commitlint         |

---

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Run all apps
pnpm dev
```

Or run individual services:

```bash
# Frontend
pnpm --filter @portfolio/frontend dev

# Backend
pnpm --filter @portfolio/backend start:dev

# Run whole stack via Docker Compose
pnpm compose:local

```

---

## 🧪 Testing

```bash
# Unit & E2E tests
pnpm test
```

---

## 📁 Project Structure

| Folder        | Description                            |
|---------------|----------------------------------------|
| `packages/`   | Applications (frontend, backend)|
| `libs/`       | Shared packages (UI, utils, types)     |
| `.env`        | Environment variables                  |
| `pnpm-workspace.yaml` | Workspace config               |

---

## 📌 Future Enhancements

- AI analytics dashboard
- Tenant-specific themes
- Internationalization (I18N)
- Admin portal for role/user/tenant management

---


# Prerequisites

- Docker and Docker Compose
  - [Installation Guide for Docker](https://docs.docker.com/get-started/get-docker/)
  - [Installation Guide for Docker Compose](https://docs.docker.com/compose/install/)

- Docker Resources

  - Go to Settings/Resources: Give 12 to 16 GB of RAM to


# Demo

- Local: http://localhost:4001
- Web: https://lazer-security-hub.pages.dev/
