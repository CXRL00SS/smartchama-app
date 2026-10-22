# Smart Chama 🌱

> A production-ready digital platform for community savings groups (Chamas) across Kenya and Africa.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn UI components
- **Backend**: Supabase (PostgreSQL + RLS + Edge Functions)
- **Auth**: Supabase Auth (email, phone, Google)
- **Payments**: Safaricom M-Pesa Daraja API (STK Push)
- **Charts**: Recharts
- **Animations**: Framer Motion

## Quick Start

### 1. Prerequisites

- [Node.js 18+](https://nodejs.org)
- [Supabase account](https://supabase.com)
- Safaricom Daraja API credentials (for M-Pesa)

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your Supabase project URL and anon key:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Set Up Database

Run the migration in your Supabase dashboard (SQL Editor):

```sql
-- Copy & run: supabase/migrations/001_initial_schema.sql
```

Or using Supabase CLI:

```bash
supabase db push
```

### 5. Deploy Edge Functions (M-Pesa)

```bash
supabase functions deploy mpesa-stk-push

# Set M-Pesa secrets
supabase secrets set \
  MPESA_CONSUMER_KEY=your-key \
  MPESA_CONSUMER_SECRET=your-secret \
  MPESA_SHORTCODE=your-shortcode \
  MPESA_PASSKEY=your-passkey \
  MPESA_CALLBACK_URL=https://your-project.supabase.co/functions/v1/mpesa-callback \
  MPESA_ENV=sandbox
```

### 6. Run Development Server

```bash
npm run dev
```

App runs at **http://localhost:5173**

## Dashboard Types

| Role | URL |
|------|-----|
| Super Admin | `/super-admin` |
| Group Admin / Chairperson / Treasurer / Secretary | `/admin` |
| Member / Loan Committee | `/member` |

## Features

### Member Features
- Dashboard with contributions, savings, loan balance, credit score
- Pay contributions via M-Pesa STK Push
- Apply for loans with repayment schedule preview
- View and pay fines
- Meeting schedule and attendance
- Group announcements
- Document library
- Financial statements & reports

### Group Admin Features
- Member management (invite, assign roles)
- Contribution tracking & reminders
- Loan approval workflow with guarantor system
- Fine issuance and management
- Meeting scheduling and attendance
- Analytics dashboards with charts
- Report generation (PDF, Excel, CSV)
- Group configuration (rates, rules, schedules)

### Super Admin Features
- Platform-wide group management
- Subscription management
- Revenue analytics
- Audit logs
- Support ticket management

## Project Structure

```
src/
├── components/
│   ├── layout/       # DashboardLayout, Sidebar, Header
│   ├── shared/       # StatsCard, DataTable, PageHeader
│   └── ui/           # Shadcn-style base components
├── context/          # AuthContext, ThemeContext
├── hooks/            # Custom React hooks
├── lib/              # supabase.ts, utils.ts
├── pages/
│   ├── auth/         # Login, Register
│   ├── member/       # Member dashboard pages
│   ├── group-admin/  # Group admin pages
│   └── super-admin/  # Platform admin pages
├── services/         # mpesa.ts, api services
└── types/            # TypeScript types
supabase/
├── functions/        # Edge Functions
└── migrations/       # Database schema
```

## Security

- Row Level Security (RLS) on all Supabase tables
- Role-based access control in the UI
- M-Pesa credentials stored as server-side secrets
- JWT-based authentication
- Audit logging for all sensitive operations

## License

MIT © Smart Chama
