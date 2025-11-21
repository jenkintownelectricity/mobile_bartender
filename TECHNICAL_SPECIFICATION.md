# Mobile Bartending Business Management Platform - Technical Specification

## Executive Summary

A comprehensive, offline-first mobile bartending business management platform with stunning UI, multi-mode support, and complete feature coverage for event-based bartending operations.

### Core Value Proposition
**"Flow the drinks, not the paperwork"** - An all-in-one platform that eliminates administrative burden and lets mobile bartending businesses focus on service delivery.

---

## 1. System Architecture

### Technology Stack

**Frontend Framework:**
- **Next.js 15** (App Router, React Server Components)
- **TypeScript** (strict mode)
- **Tailwind CSS** for styling
- **shadcn/ui** for component library
- **Framer Motion** for animations

**Backend & Database:**
- **Supabase** (PostgreSQL + Auth + Storage + Realtime)
- **RxDB** for offline-first local storage
- **Drizzle ORM** for type-safe database queries

**State Management:**
- **Zustand** for client-side state
- **TanStack Query** for server state and caching

**Payment Processing:**
- **Stripe** (online payments, subscriptions)
- **Stripe Terminal** (in-person POS)
- **Square** integration (alternative POS)

**Background Jobs:**
- **Inngest** for workflows and scheduled tasks
- **Supabase Edge Functions** for webhooks

**Hosting & Deployment:**
- **Vercel** (frontend + API routes)
- **Supabase Cloud** (backend services)
- **Cloudflare R2** (file storage backup)

**Real-Time Communication:**
- **Supabase Realtime** (WebSocket-based)
- **Server-Sent Events** for notifications

**Offline Sync:**
- **RxDB** with IndexedDB storage
- **CRDT-based conflict resolution**
- **WiFi Direct / Bluetooth** for local device sync

---

## 2. System Modes & User Roles

### Business Owner Mode
**Access Level:** Full system control

**Features:**
- Complete dashboard with business analytics
- Financial reporting and profitability tracking
- Staff management and payroll oversight
- Client relationship management
- Inventory and vendor management
- Proposal and contract creation
- Invoice generation and payment tracking
- Event calendar and booking management
- Settings and configuration
- Developer mode access for integrations

**Key Metrics Dashboard:**
- Revenue trends (daily, weekly, monthly, yearly)
- Profit margins by event type
- Top-performing bartenders
- Inventory costs and waste
- Client acquisition and retention
- Average booking value
- Event pipeline and conversion rates

### Employee/Bartender Mode
**Access Level:** Operational tasks only

**Features:**
- Personal schedule and availability management
- Event details and assignments
- Inventory tracking during events
- Time clock (clock in/out)
- Tips and earnings tracking
- Training resources
- Communication with team
- Event checklists
- Limited client interaction (event-specific)

**Restrictions:**
- Cannot see financials
- Cannot access other employees' data
- Cannot modify pricing
- Cannot access owner settings

### Client Mode
**Access Level:** Customer-facing portal

**Features:**
- Browse services and packages
- Request quotes and proposals
- View and sign contracts
- Make payments
- Event details and timeline
- Direct messaging with team
- Post-event feedback and reviews
- Photo gallery from events
- Rebook and referrals
- Invoice history

**Experience:**
- Beautifully branded interface
- Mobile-first design
- Guest access (no login required initially)
- Account creation for returning clients

### Developer Mode
**Access Level:** Technical integration (owner + developers)

**Features:**
- API key management
- Webhook configuration
- Third-party integrations setup
- Custom event triggers
- API documentation
- Testing sandbox
- Audit logs
- Rate limiting configuration

**Integrations:**
- Accounting software (QuickBooks, Xero)
- Payment processors
- Email marketing (Mailchimp, SendGrid)
- SMS providers (Twilio)
- Calendar sync (Google Calendar, Outlook)
- Social media scheduling
- Review platforms
- Inventory vendors

### Tablet/Guest Ordering Mode
**Access Level:** Event-specific ordering

**Features:**
- Digital drink menu with photos
- Customizable drink orders
- Cart management
- In-app payment processing
- Order status tracking
- Call server button
- Venue information
- Event branding

**Environment:**
- Kiosk mode (locked to app)
- Offline-capable
- Sync with bartender KDS
- Multi-tablet coordination

---

## 3. Core Feature Modules

### 3.1 Customer Management

**Contact Database:**
- Full contact details (name, email, phone, address)
- Client type (corporate, wedding, private party, recurring)
- Event history and notes
- Communication log
- Preferences and special requests
- Tags and custom fields
- Lead source tracking
- Referral tracking

**Lead Management:**
- Lead capture forms
- Lead scoring and qualification
- Response time tracking (target: <5 minutes)
- Automated follow-up sequences
- Pipeline stages
- Conversion tracking
- Lost deal reasons

**Client Portal:**
- Branded access for each client
- Secure login
- Document access (contracts, invoices)
- Event timeline
- Direct messaging
- Photo/video gallery
- Feedback forms

### 3.2 Proposal System

**Quote Generation:**
- Template library (weddings, corporate, festivals, private)
- Line-item builder
- Package pricing (hourly, per-person, flat-rate)
- Travel fee calculator (distance-based)
- Staff cost calculator
- Inventory cost estimator
- Profit margin visualization
- Add-ons and upsells
- Dynamic pricing suggestions

**Professional Presentation:**
- Branded proposal documents
- High-quality imagery
- Service descriptions
- Team bios and photos
- Portfolio examples
- Client testimonials
- Terms and conditions
- Validity period

**E-Signature Integration:**
- DocuSign or native e-signature
- Multi-party signing
- Automatic contract generation upon acceptance
- Deposit collection
- Version history
- Audit trail

**Conversion Tracking:**
- Response time from inquiry to quote
- Quote acceptance rate
- Common objections
- Win/loss analysis
- Competitor analysis

### 3.3 Invoice & Payment System

**Invoice Creation:**
- Professional branded invoices
- Itemized breakdowns
- Tax calculations
- Discount codes
- Deposit and balance due
- Payment terms
- Late fees (configurable)
- Recurring invoices

**Payment Processing:**
- Online payment portal
- Credit/debit cards (Stripe)
- ACH bank transfers
- Apple Pay / Google Pay
- Payment plans
- Deposit tracking
- Balance reminders
- Automatic receipts

**Payment Policies:**
- Configurable deposit requirements (e.g., 33% upfront)
- Payment schedules (e.g., balance due 14 days before)
- Cancellation and refund policies
- Automated enforcement
- Grace periods

**Financial Tracking:**
- Revenue by event type
- Payment status dashboard
- Overdue invoices
- Collections management
- Payment method analytics
- Processing fee tracking
- Cash flow projections

### 3.4 Liquor Ordering & Inventory Management

**Inventory Database:**
- Complete product catalog
- Categories (spirits, mixers, garnishes, supplies)
- Par levels and reorder points
- Vendor information
- Unit costs and pricing history
- Storage locations
- Expiration tracking
- Batch/lot numbers

**Real-Time Tracking:**
- Current stock levels
- Usage by event
- Waste and spillage tracking
- Theft prevention alerts
- Low-stock notifications
- Variance reporting
- COGS calculations
- Inventory valuation

**Ordering System:**
- Vendor catalog integration
- One-click reordering
- Order history
- Receiving and verification
- Purchase order management
- Invoice matching
- Vendor performance tracking
- Bulk ordering discounts

**AI-Powered Forecasting:**
- Predict inventory needs by event type
- Guest count-based suggestions
- Seasonal trend analysis
- Popular drink recommendations
- Over/under purchasing alerts
- Menu optimization

**Integration:**
- WISK, Backbar, Partender compatibility
- Barcode scanning
- Image recognition for quick counts
- POS integration for automatic deductions
- Accounting software sync

**Reporting:**
- Inventory shrinkage (target: reduce from 20-30% to <10%)
- Pour cost percentage (target: 18-24%)
- Most/least profitable items
- Vendor cost comparison
- Waste reduction tracking

### 3.5 Staff Management

**Employee Profiles:**
- Personal information
- Certifications (TIPS, ServSafe, bartending)
- Skills and specialties
- Hire date and employment history
- Emergency contacts
- Payment details (W-9, direct deposit)
- Performance reviews

**Scheduling:**
- Drag-and-drop calendar
- Shift templates
- Availability collection
- Auto-scheduling AI
- Shift swapping
- Open shift claiming
- Conflict detection
- Labor cost projections

**Time & Attendance:**
- Mobile clock in/out
- GPS verification
- Break tracking
- Overtime calculations
- Shift confirmations (48-hour reminder)
- No-show tracking
- Attendance scoring

**Communication:**
- Team messaging
- Event briefs
- Shift reminders (SMS/push)
- Schedule changes notifications
- Broadcast announcements
- Document sharing

**Performance Tracking:**
- Customer ratings
- Sales per shift
- Attendance reliability (target: 90%+ after implementing tracking)
- Incident reports
- Training completion
- Promotion readiness

**Payroll Integration:**
- Hours worked export
- Tips and gratuities
- Reimbursements
- QuickBooks/Gusto integration

### 3.6 Event Management

**Event Calendar:**
- Multi-view (day, week, month, agenda)
- Color-coded by status
- Drag-and-drop rescheduling
- Double-booking prevention
- Availability blocking
- Recurring events
- Calendar sync (Google, Outlook, iCal)

**Event Details:**
- Event type and theme
- Date, time, duration
- Venue information (address, parking, access, power)
- Guest count
- Client contact
- Assigned staff
- Equipment checklist
- Inventory allocation
- Setup/breakdown time
- Special instructions
- Weather monitoring (outdoor events)

**Venue Database:**
- Venue profiles
- Parking and access notes
- Power outlet locations
- Setup area dimensions
- Contact persons
- Insurance requirements (COI automation)
- Past event notes
- Photos and diagrams

**Event Timeline:**
- Pre-event checklist (2 weeks, 1 week, 48 hours, day-of)
- Setup schedule
- Service schedule
- Breakdown schedule
- Staff arrival times
- Client touchpoints
- Automated reminders

**Post-Event:**
- Event summary report
- Revenue and costs
- Inventory used and waste
- Staff performance
- Customer feedback collection
- Photo upload
- Follow-up tasks (thank you, review request, referral ask)

### 3.7 Tablet Guest Ordering Interface

**Menu Management:**
- Visual drink menu with high-quality photos
- Category navigation (cocktails, wines, beers, non-alcoholic)
- Detailed descriptions and ingredients
- Allergen information
- Customization options (ice, garnish, strength)
- Pricing display
- Seasonal/featured items
- Out-of-stock (86'd) status

**Ordering Flow:**
1. Browse menu categories
2. Tap item for details
3. Customize and add to cart
4. Review cart (modify quantities, remove items)
5. Checkout and payment
6. Order confirmation
7. Real-time status updates

**Cart Management:**
- Floating cart indicator with item count
- Quick cart preview
- Individual item modifications
- Quantity adjustment
- Remove items
- Running total with tax
- Special requests field

**Payment Integration:**
- In-app payment processing
- Card, tap-to-pay, mobile wallets
- Split payments (by person/item)
- Tip selection (percentage or custom)
- Digital receipt (email/SMS)
- Payment confirmation animation

**Kitchen Display System (KDS):**
- Real-time order queue
- Order details and modifications
- One-tap status updates ("In Progress" → "Ready")
- Order age indicators
- Priority sorting
- Completed order archive
- Order statistics

**Guest Experience:**
- Beautiful, branded interface
- Dark mode for bar ambiance
- Large touch targets
- Smooth animations
- Minimal steps to order
- Call server button
- View event info
- Access WiFi details

**Multi-Tablet Coordination:**
- Real-time sync across all tablets
- Inventory deductions across devices
- Order consolidation
- Staff tablet vs guest tablet modes
- Hub-and-spoke architecture

### 3.8 Offline-First Architecture

**Local Data Storage:**
- RxDB with IndexedDB (web) or SQLite (native)
- Complete event data cached locally
- Menu and inventory cached
- Customer data (limited, secure)
- Transaction queue for pending syncs

**Offline Capabilities:**
- Full app functionality without internet
- Queue orders and payments
- Inventory updates stored locally
- Staff clock-ins queued
- Automatic sync when online

**Sync Strategy:**
- Event-based sync (incremental)
- WebSocket for real-time when online
- Background sync every 15-30 seconds
- Conflict resolution via CRDT
- Manual sync trigger
- Sync status indicator

**Local Device Sync:**
- WiFi Direct / Bluetooth pairing
- Hub-and-spoke (main tablet as coordinator)
- Tablet-to-tablet order sharing
- Inventory sync across devices
- Works without internet

**Conflict Resolution:**
- CRDT counters for inventory
- Last-write-wins with vector clocks for configurations
- Event sourcing for audit trail
- Deduplication by transaction ID
- Timestamp-based for simple fields

**Data Persistence:**
- Encrypted local database
- Auto-logout security
- Selective sync (only needed data)
- Archive old data to cloud
- Quota management

### 3.9 API Webhooks & Integrations

**Webhook Management:**
- Create/edit/delete webhooks
- Event subscriptions (order.created, payment.received, etc.)
- Retry logic with exponential backoff
- Webhook logs and debugging
- Signature verification
- Rate limiting

**Pre-Built Integrations:**

**Accounting:**
- QuickBooks Online
- Xero
- FreshBooks
- Auto-sync invoices, expenses, payments

**Communication:**
- Twilio (SMS)
- SendGrid (email)
- Mailchimp (marketing)
- Automated client journey

**Calendar:**
- Google Calendar
- Outlook Calendar
- iCal feed

**Payment:**
- Stripe (primary)
- Square (alternative)
- PayPal
- Venmo/CashApp (peer-to-peer)

**Review Platforms:**
- Google Business
- Yelp
- WeddingWire
- The Knot
- Automated review requests

**Social Media:**
- Instagram API
- Facebook Pages
- Scheduled posting
- Event photo galleries

**E-Signature:**
- DocuSign
- HelloSign
- Native e-signature

**Inventory Vendors:**
- Major liquor distributors
- Direct ordering APIs
- Price comparison

**Custom API:**
- RESTful API
- GraphQL endpoint
- OpenAPI/Swagger documentation
- OAuth 2.0 authentication
- Rate limiting
- Sandbox environment

---

## 4. UI/UX Design System

### Design Philosophy

**Core Principles:**
1. **Minimalism with Purpose** - Every element must justify its existence
2. **Speed and Efficiency** - Minimize clicks, maximize clarity
3. **Beautiful AND Functional** - Premium aesthetics that enhance usability
4. **Mobile-First Always** - Design for smallest screen, scale up
5. **Accessibility Built-In** - WCAG 2.1 AA compliance minimum

### Visual Design

**Color Palette:**

**Light Mode:**
- **Primary:** Deep Blue (#0F172A) - professionalism, trust
- **Secondary:** Vibrant Purple (#8B5CF6) - innovation, premium
- **Accent:** Warm Gold (#F59E0B) - success, celebration
- **Background:** Soft White (#FAFAFA)
- **Surface:** Pure White (#FFFFFF)
- **Text Primary:** Slate 900 (#0F172A)
- **Text Secondary:** Slate 600 (#475569)
- **Border:** Slate 200 (#E2E8F0)
- **Error:** Red 600 (#DC2626)
- **Success:** Emerald 600 (#059669)
- **Warning:** Amber 600 (#D97706)

**Dark Mode (Default for Tablet/Bar):**
- **Primary:** Slate 50 (#F8FAFC)
- **Secondary:** Purple 400 (#A78BFA)
- **Accent:** Amber 400 (#FBBF24)
- **Background:** Slate 950 (#020617)
- **Surface:** Slate 900 (#0F172A)
- **Surface Elevated:** Slate 800 (#1E293B)
- **Text Primary:** Slate 50 (#F8FAFC)
- **Text Secondary:** Slate 400 (#94A3B8)
- **Border:** Slate 700 (#334155)

**Typography:**

- **Display (Headings):** Inter Variable (700/800 weight)
- **Body:** Inter Variable (400/500 weight)
- **UI Elements:** Inter Variable (500/600 weight)
- **Monospace (Code/Data):** JetBrains Mono

**Sizes:**
- Display: 48px / 36px / 30px
- Heading: 24px / 20px / 18px
- Body: 16px (base) / 14px
- Small: 12px
- Line Heights: 1.5 (body), 1.2 (headings)

**Spacing System (Tailwind-based):**
- 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px

**Border Radius:**
- Small: 4px (buttons, inputs)
- Medium: 8px (cards)
- Large: 16px (modals, major containers)
- XL: 24px (hero sections)
- Full: 9999px (pills, avatars)

**Shadows:**
- **SM:** `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- **MD:** `0 4px 6px -1px rgb(0 0 0 / 0.1)`
- **LG:** `0 10px 15px -3px rgb(0 0 0 / 0.1)`
- **XL:** `0 20px 25px -5px rgb(0 0 0 / 0.1)`
- **Glow (Dark Mode):** `0 0 20px rgb(139 92 246 / 0.3)`

### Component Library (shadcn/ui + Custom)

**Core Components:**
- Button (primary, secondary, ghost, destructive)
- Input (text, email, password, number, date)
- Select (dropdown, multi-select, combobox)
- Checkbox, Radio, Switch, Toggle
- Textarea
- Card (with header, content, footer)
- Modal/Dialog
- Drawer (mobile sheet)
- Popover, Tooltip
- Tabs, Accordion
- Table (with sorting, filtering, pagination)
- Avatar, Badge, Alert
- Progress, Spinner, Skeleton
- Breadcrumbs, Pagination
- Command Palette (⌘K)

**Custom Components:**
- **DashboardCard:** Metric cards with trend indicators
- **EventCalendar:** Full-featured calendar view
- **InventoryGrid:** Visual inventory browser
- **StaffScheduler:** Drag-and-drop scheduling
- **ProposalBuilder:** WYSIWYG proposal editor
- **InvoiceTemplate:** Professional invoice generator
- **MenuBuilder:** Tablet menu designer
- **KDSDisplay:** Kitchen display system
- **ChatInterface:** Real-time messaging
- **FileUploader:** Drag-and-drop with previews
- **SignaturePad:** E-signature capture
- **PaymentForm:** Stripe Elements integration

### Animation & Micro-Interactions

**Principles:**
- Purposeful, not decorative
- Fast (200-300ms for most)
- Easing: ease-out for entrances, ease-in for exits
- Respect prefers-reduced-motion

**Key Animations:**
- **Page Transitions:** Fade + slide (300ms)
- **Modal Open/Close:** Scale + fade (200ms)
- **Button Press:** Scale down to 0.95 + haptic
- **Card Hover:** Lift (shadow increase) + border glow
- **Loading States:** Skeleton screens with shimmer
- **Success Actions:** Checkmark animation + confetti (payments)
- **Error Shake:** Horizontal shake for failed validation
- **Drag & Drop:** Smooth dragging with placeholder
- **Notification Toast:** Slide in from top-right
- **Progress Indicators:** Smooth progress bar fills

**Micro-Interactions:**
- Toggle switches flip with bounce
- Checkboxes fill with checkmark draw
- Input focus: border glow + label lift
- Hover states: subtle brightness increase
- Delete actions: swipe to reveal + confirm
- Like/favorite: heart fill animation
- Add to cart: item flies to cart icon
- Form submission: button morphs to spinner

### Responsive Design

**Breakpoints:**
- Mobile: 0-640px
- Tablet: 641-1024px
- Desktop: 1025-1536px
- Large Desktop: 1537px+

**Mobile Adaptations:**
- Bottom navigation bar
- Drawer navigation (hamburger)
- Larger touch targets (min 44x44px)
- Simplified forms (one column)
- Collapsible sections
- Swipe gestures
- Floating action button

**Tablet Optimizations:**
- Side drawer navigation
- Two-column layouts
- Landscape orientation support
- Gesture-based navigation
- Kiosk mode for guest ordering

**Desktop Features:**
- Sidebar navigation always visible
- Multi-column layouts (3-4 columns)
- Hover interactions
- Keyboard shortcuts
- Command palette (⌘K)
- Right-click context menus

### Theme Customization System

**Brand Configuration:**
- Logo upload (light/dark variants)
- Primary brand color (auto-generates palette)
- Secondary color (optional)
- Custom font upload
- Brand name and tagline

**UI Theming:**
- Pre-built themes (Modern, Classic, Vibrant, Minimal, Luxury)
- Custom CSS variables
- Component style overrides
- Layout density (compact, normal, spacious)
- Animation speed (reduced, normal, enhanced)

**Client Portal Branding:**
- Completely custom branded
- Client's logo and colors
- Custom domain (CNAME)
- White-label option
- Custom email templates

**Theme Preview:**
- Live preview before applying
- Theme gallery
- Import/export themes
- Reset to default

---

## 5. Database Schema (PostgreSQL)

### Core Tables

**users**
- id (uuid, PK)
- email (unique)
- role (enum: owner, employee, client, developer)
- full_name
- phone
- avatar_url
- created_at
- updated_at
- last_login
- metadata (jsonb)

**profiles**
- id (uuid, PK, FK to users)
- business_id (uuid, FK to businesses)
- bio
- certifications (jsonb)
- skills (array)
- emergency_contact (jsonb)
- payment_details (jsonb, encrypted)
- preferences (jsonb)

**businesses**
- id (uuid, PK)
- owner_id (uuid, FK to users)
- name
- legal_name
- logo_url
- brand_colors (jsonb)
- phone
- email
- website
- address (jsonb)
- tax_id
- insurance (jsonb)
- settings (jsonb)
- subscription_tier
- created_at

**clients**
- id (uuid, PK)
- business_id (uuid, FK)
- user_id (uuid, FK to users, nullable)
- type (enum: corporate, wedding, private, recurring)
- company_name
- contact_person
- email
- phone
- address (jsonb)
- tags (array)
- lead_source
- referred_by (uuid, FK to clients)
- lifetime_value
- notes (text)
- created_at

**events**
- id (uuid, PK)
- business_id (uuid, FK)
- client_id (uuid, FK)
- name
- type (enum: wedding, corporate, festival, private)
- status (enum: inquiry, quoted, booked, completed, cancelled)
- event_date
- start_time
- end_time
- setup_time
- breakdown_time
- venue_id (uuid, FK to venues)
- guest_count
- assigned_staff (array of uuids)
- inventory_allocated (jsonb)
- equipment_checklist (jsonb)
- special_instructions (text)
- created_at
- updated_at

**venues**
- id (uuid, PK)
- business_id (uuid, FK)
- name
- address (jsonb)
- contact_person
- phone
- parking_notes (text)
- access_notes (text)
- power_outlets (text)
- setup_area_dimensions
- insurance_requirements (jsonb)
- photos (array)
- notes (text)

**proposals**
- id (uuid, PK)
- business_id (uuid, FK)
- client_id (uuid, FK)
- event_id (uuid, FK)
- proposal_number (unique)
- status (enum: draft, sent, viewed, accepted, declined)
- line_items (jsonb)
- subtotal
- tax
- total
- deposit_amount
- balance_due
- valid_until
- terms (text)
- sent_at
- viewed_at
- responded_at
- created_at

**contracts**
- id (uuid, PK)
- proposal_id (uuid, FK)
- contract_document_url
- signed_at
- signers (jsonb)
- signature_urls (jsonb)

**invoices**
- id (uuid, PK)
- business_id (uuid, FK)
- client_id (uuid, FK)
- event_id (uuid, FK)
- invoice_number (unique)
- status (enum: draft, sent, viewed, paid, overdue, cancelled)
- line_items (jsonb)
- subtotal
- tax
- discounts
- total
- amount_paid
- balance_due
- due_date
- sent_at
- paid_at
- created_at

**payments**
- id (uuid, PK)
- invoice_id (uuid, FK)
- amount
- payment_method (enum: card, ach, cash, check)
- payment_processor (enum: stripe, square, manual)
- transaction_id
- status (enum: pending, completed, failed, refunded)
- processed_at
- metadata (jsonb)

**inventory_items**
- id (uuid, PK)
- business_id (uuid, FK)
- name
- category (enum: spirits, wine, beer, mixer, garnish, supply)
- subcategory
- unit_size
- unit_cost
- current_stock
- par_level
- reorder_point
- vendor_id (uuid, FK to vendors)
- barcode
- sku
- expiration_date
- storage_location
- created_at
- updated_at

**inventory_transactions**
- id (uuid, PK)
- business_id (uuid, FK)
- item_id (uuid, FK)
- type (enum: purchase, usage, waste, adjustment, transfer)
- quantity
- unit_cost
- event_id (uuid, FK, nullable)
- notes (text)
- created_by (uuid, FK to users)
- created_at

**vendors**
- id (uuid, PK)
- business_id (uuid, FK)
- name
- contact_person
- email
- phone
- website
- account_number
- payment_terms
- notes (text)

**staff_shifts**
- id (uuid, PK)
- business_id (uuid, FK)
- employee_id (uuid, FK to users)
- event_id (uuid, FK, nullable)
- shift_date
- start_time
- end_time
- clock_in
- clock_out
- status (enum: scheduled, confirmed, in_progress, completed, no_show)
- notes (text)

**menu_items**
- id (uuid, PK)
- business_id (uuid, FK)
- name
- description
- category
- image_url
- ingredients (jsonb)
- allergens (array)
- price
- cost
- customizations (jsonb)
- available (boolean)
- sort_order

**orders** (tablet guest orders)
- id (uuid, PK)
- event_id (uuid, FK)
- table_number
- items (jsonb)
- subtotal
- tax
- tip
- total
- status (enum: pending, in_progress, ready, served, cancelled)
- payment_status (enum: unpaid, paid, refunded)
- payment_id (uuid, FK to payments)
- ordered_at
- completed_at

**integrations**
- id (uuid, PK)
- business_id (uuid, FK)
- type (enum: accounting, calendar, payment, email, sms, review)
- provider (text)
- credentials (jsonb, encrypted)
- webhook_url
- settings (jsonb)
- active (boolean)
- last_sync
- created_at

**audit_logs**
- id (uuid, PK)
- business_id (uuid, FK)
- user_id (uuid, FK)
- action (text)
- resource_type (text)
- resource_id (uuid)
- changes (jsonb)
- ip_address
- user_agent
- created_at

### Database Indexes

**Performance Optimizations:**
- B-tree indexes on foreign keys
- Composite indexes on (business_id, created_at) for all tables
- GIN indexes on JSONB columns for fast searches
- Full-text search indexes on text fields (name, notes)
- Partial indexes on status fields (e.g., active events only)

### Row-Level Security (RLS)

**Policies:**
- Users can only access data from their business
- Clients can only see their own data
- Employees have restricted access (no financials)
- Owners have full access to their business data
- Developers have API-level access with proper authentication

---

## 6. Performance & Optimization

### Frontend Performance

**Targets:**
- Lighthouse Score: 95+ (all categories)
- First Contentful Paint: <1.5s
- Time to Interactive: <3.0s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

**Techniques:**
- Next.js Image Optimization (automatic WebP/AVIF)
- Route-based code splitting
- React Server Components for zero JS where possible
- Lazy loading for heavy components
- Prefetching for anticipated navigation
- Service Worker caching (Workbox)
- Font optimization (variable fonts, font-display: swap)
- SVG icons (not icon fonts)

### Database Performance

**Query Optimization:**
- Prepared statements (SQL injection prevention + caching)
- Connection pooling (Supabase Pooler)
- Read replicas for heavy queries
- Materialized views for complex reports
- Aggressive indexing on query patterns
- EXPLAIN ANALYZE for slow queries

**Caching Strategy:**
- Redis (Upstash) for session data
- React Query for client-side caching
- Edge caching for static content (Vercel)
- Stale-while-revalidate for API responses
- Cache invalidation on mutations

### Offline Performance

**Optimization:**
- Lazy sync (only changed data)
- Compression for sync payloads
- Batch operations in transactions
- Web Workers for heavy processing
- IndexedDB query optimization
- Selective field syncing

### Monitoring

**Tools:**
- Vercel Analytics (Web Vitals)
- Sentry (error tracking + performance)
- PostHog (product analytics)
- Supabase Logs (database queries)
- Custom performance marks

**Alerts:**
- Error rate thresholds
- Slow query alerts (>500ms)
- High memory usage
- API rate limiting triggers
- Failed payment processing

---

## 7. Security & Compliance

### Authentication & Authorization

**Implementation:**
- Supabase Auth (JWT-based)
- Email + password with email verification
- OAuth (Google, Apple, Microsoft)
- Magic links for passwordless
- Multi-factor authentication (TOTP)
- Session management with refresh tokens
- Role-based access control (RBAC)
- Row-level security (RLS)

### Data Security

**Encryption:**
- TLS 1.3 for all connections
- Database encryption at rest (Supabase)
- Local database encryption (RxDB)
- Encrypted backups
- Secure key management (environment variables)
- PCI DSS compliance for payments (Stripe/Square handle)

**Sensitive Data:**
- No credit card storage (tokenization via Stripe)
- Encrypted payment details
- Hashed passwords (bcrypt)
- Secure cookie settings (httpOnly, secure, sameSite)
- API key rotation policy

### Compliance

**Regulations:**
- GDPR (European data protection)
- CCPA (California privacy)
- PCI DSS Level 1 (payment security)
- SOC 2 Type II (when applicable)

**Features:**
- Data export (user requests)
- Right to deletion
- Consent management
- Privacy policy + Terms of Service
- Cookie consent banner
- Data retention policies

### Security Best Practices

**Application Security:**
- Input validation (Zod schemas)
- SQL injection prevention (parameterized queries)
- XSS prevention (React escaping + CSP)
- CSRF protection (Next.js built-in)
- Rate limiting (Upstash)
- DDoS protection (Vercel/Cloudflare)
- Security headers (CSP, HSTS, X-Frame-Options)
- Regular dependency updates (Dependabot)

**API Security:**
- API key authentication
- JWT verification
- Request signing
- Rate limiting per key
- IP allowlisting (optional)
- Webhook signature verification
- Audit logging

---

## 8. Testing Strategy

### Testing Pyramid

**Unit Tests (70%):**
- Jest + React Testing Library
- Pure functions
- Component logic
- Utility functions
- Target: 80%+ coverage

**Integration Tests (20%):**
- API route testing
- Database interactions
- Third-party integrations
- Webhook handling

**E2E Tests (10%):**
- Playwright
- Critical user journeys
- Multi-device testing
- Payment flows
- Offline scenarios

### Test Scenarios

**Critical Paths:**
- User signup and login
- Create proposal → send → accept → contract → invoice → payment
- Create event → assign staff → manage inventory → complete
- Guest tablet ordering → payment → KDS display
- Offline mode → sync when online

**Edge Cases:**
- Poor network conditions
- Concurrent edits
- Large datasets
- Quota limits
- Payment failures

---

## 9. Deployment & DevOps

### Environments

**Development:**
- Local (localhost:3000)
- Supabase local instance
- Stripe test mode

**Staging:**
- Vercel preview deployments
- Supabase staging project
- Full integration testing

**Production:**
- Vercel production
- Supabase production
- Stripe live mode
- Cloudflare CDN

### CI/CD Pipeline

**GitHub Actions:**
1. Lint and format check (ESLint, Prettier)
2. Type checking (TypeScript)
3. Unit tests (Jest)
4. Build check
5. Integration tests
6. E2E tests (critical paths only)
7. Deploy to Vercel preview
8. Lighthouse CI
9. Security scanning (Snyk)
10. Deploy to production (on merge to main)

### Monitoring & Logging

**Production Monitoring:**
- Uptime monitoring (99.9% SLA target)
- Error tracking (Sentry)
- Performance monitoring (Vercel Analytics)
- Database performance (Supabase Logs)
- API usage tracking
- Cost monitoring (Vercel, Supabase, Stripe)

**Alerting:**
- PagerDuty for critical issues
- Slack notifications for warnings
- Email digests for daily reports

---

## 10. Scalability Plan

### Current Architecture (0-1000 users)
- Vercel Pro ($20-40/month)
- Supabase Pro ($25-50/month)
- **Total: ~$50-90/month**

### Growth Phase (1000-10,000 users)
- Add Redis caching (Upstash)
- Database read replicas
- CDN optimization (Cloudflare)
- Background job scaling (Inngest)
- **Total: ~$150-300/month**

### Scale Phase (10,000+ users)
- Vercel Enterprise or migrate to Railway
- Supabase Enterprise
- Multi-region deployment
- Database sharding considerations
- Dedicated infrastructure
- **Total: $500-2000+/month**

---

## 11. Success Metrics

### Business KPIs

**For Mobile Bartending Companies:**
- Time saved on admin work: 8+ hours/week
- Lead response time: <5 minutes (from 42 hours industry avg)
- Proposal acceptance rate: 35%+ (vs 20-25% industry)
- Inventory shrinkage: <10% (vs 20-30% industry)
- Staff no-show rate: <10% (vs 90% reduction target)
- Event profitability visibility: Real-time
- Client retention: 60%+ repeat booking rate

**Product Metrics:**
- User activation (completed setup): 80%+
- Daily active users: 40%+ of total users
- Feature adoption: 70%+ use core features
- Net Promoter Score (NPS): 50+
- Churn rate: <5% monthly
- Support ticket volume: <5% of users/month

### Technical Metrics

**Performance:**
- 99.9% uptime
- <2s page load time (p95)
- <100ms API response time (p95)
- Offline mode success rate: 99%+
- Sync conflict rate: <1%

**Quality:**
- Production bug rate: <0.5% of releases
- Test coverage: 80%+
- Security vulnerabilities: 0 high/critical
- Accessibility: WCAG 2.1 AA

---

## 12. Roadmap & Future Features

### Phase 1: MVP (Months 1-3)
- Core authentication and user management
- Customer management
- Basic event booking
- Simple proposals and invoices
- Staff scheduling
- Basic inventory tracking
- Beautiful UI with dark mode

### Phase 2: Advanced Features (Months 4-6)
- Tablet guest ordering interface
- POS integration (Stripe Terminal)
- Real-time KDS
- Offline-first sync
- E-signature integration
- Payment processing
- Advanced reporting

### Phase 3: Optimization (Months 7-9)
- AI-powered inventory forecasting
- Automated marketing workflows
- Mobile apps (iOS/Android)
- Advanced integrations
- White-label options
- Multi-business support

### Future Innovations
- AR menu previews (see drinks in 3D)
- Voice ordering ("Hey [Brand], order a mojito")
- Predictive staffing AI
- Blockchain-based certifications
- IoT equipment monitoring (keg levels, refrigeration)
- Social media auto-posting from events
- Marketplace for freelance bartenders

---

## Conclusion

This technical specification provides a comprehensive blueprint for building the most advanced mobile bartending business management platform in the market. By combining:

1. **Cutting-edge technology** (Next.js 15, Supabase, RxDB)
2. **Stunning UI/UX** (shadcn/ui, Framer Motion, dark mode)
3. **Offline-first architecture** (works anywhere, syncs everywhere)
4. **Complete feature coverage** (every aspect of the business)
5. **Multi-mode support** (owner, employee, client, developer, tablet)

We will create a system that truly delivers on the promise: **"Flow the drinks, not the paperwork."**

The platform addresses every pain point identified in research:
- Slow lead response → Instant quote generation
- Manual admin work → Automated workflows
- Inventory waste → Real-time tracking with AI forecasting
- Staff reliability → Automated scheduling and confirmations
- Offline events → Fully functional without internet
- Poor UI → Breathtaking, customizable design
- Fragmented tools → All-in-one platform

**Next Steps:** Begin implementation with project setup and UI design system.
