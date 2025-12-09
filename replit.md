# Congo Na Paris - Event Website

## Overview

Congo Na Paris is a bilingual (French) event website for the premier Congolese socio-cultural salon in Europe. The site serves as a marketing and information platform for the 7th edition of the event (September 27-28, 2025), featuring event information, speaker profiles, program schedules, partner listings, and a magazine/blog section. The application includes contact form submission and newsletter subscription functionality with PostgreSQL persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite with React plugin

The frontend follows a page-based architecture with shared components. Pages are located in `client/src/pages/` and reusable components in `client/src/components/`. The design system uses a Congo Na Paris brand identity with navy blue (#050816), vibrant red (#FF3333), and white as primary colors.

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Design**: RESTful endpoints under `/api/` prefix
- **Request Handling**: JSON body parsing with raw body preservation for webhooks

The server handles two main API endpoints:
- `POST /api/contact` - Contact form submissions
- `POST /api/newsletter` - Newsletter subscriptions

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: `shared/schema.ts`
- **Migrations**: Generated via `drizzle-kit push`

Database tables:
- `users` - Basic user authentication (id, username, password)
- `contact_messages` - Contact form submissions with name, email, subject, message
- `newsletter_subscriptions` - Email subscriptions with deduplication

### Build System
- **Development**: Vite dev server with HMR proxied through Express
- **Production**: Vite builds static assets to `dist/public`, esbuild bundles server to `dist/index.cjs`
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` to `shared/`, `@assets/` to `attached_assets/`

### Code Organization
```
├── client/src/          # React frontend
│   ├── components/      # Reusable UI components
│   ├── pages/           # Route page components
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utilities and query client
├── server/              # Express backend
│   ├── routes.ts        # API route definitions
│   ├── storage.ts       # Database operations
│   └── db.ts            # Database connection
├── shared/              # Shared types and schemas
│   └── schema.ts        # Drizzle schema definitions
└── attached_assets/     # Static images and assets
```

## External Dependencies

### Database
- **PostgreSQL**: Primary database (connection via `DATABASE_URL` environment variable)
- **Drizzle ORM**: Type-safe database queries and schema management
- **pg**: PostgreSQL client driver

### UI Framework
- **Radix UI**: Accessible component primitives (dialog, dropdown, tabs, etc.)
- **shadcn/ui**: Pre-built component library using Radix
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

### State & Data Fetching
- **TanStack React Query**: Server state management and caching
- **Zod**: Schema validation for API inputs
- **drizzle-zod**: Generate Zod schemas from Drizzle tables

### Build & Development
- **Vite**: Frontend build tool and dev server
- **esbuild**: Server-side bundling for production
- **TypeScript**: Type checking across frontend and backend

### Fonts & Assets
- **Google Fonts**: Poppins (headings), DM Sans, Inter (body text)
- Stock images stored in `attached_assets/stock_images/`