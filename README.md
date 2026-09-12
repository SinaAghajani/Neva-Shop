````md
# 🛍️ Neva

<div align="center">

<img src="public/logo.svg" alt="Neva Logo" width="110" />

### ✨ A Modern E-Commerce Experience

**Neva** is a modern, elegant, and responsive e-commerce frontend built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

A clean shopping experience designed with scalability, performance, and a future-ready architecture in mind.

</div>

---

## 🌿 About Neva

Neva is designed around one simple idea:

> **Shopping should feel simple, beautiful, and effortless.**

The project combines a minimal visual language with a scalable frontend architecture.

From product discovery to cart management, wishlist interactions, authentication, checkout, and account management, Neva is structured to provide a complete modern shopping experience.

The current version uses **mock data**, while the architecture is prepared to connect to a real backend API in the future.

---

## ✨ Highlights

- 🛍️ Modern e-commerce interface
- 🎨 Clean and minimal visual design
- 📱 Fully responsive experience
- 🌙 Carefully designed light theme
- 🇮🇷 Complete Persian RTL support
- 🧭 App Router architecture
- ⚡ Next.js 16
- 🧠 Zustand state management
- 🛒 Persistent shopping cart
- ❤️ Persistent wishlist
- 🔎 Animated search drawer
- 🛍️ Animated cart drawer
- ❤️ Animated wishlist drawer
- 🎬 Framer Motion interactions
- 🧾 Checkout flow
- 👤 Authentication pages
- 📦 Account dashboard
- 🧾 Order management
- 📍 Address management
- ⭐ Product ratings and reviews
- 🏷️ Product badges
- 🔖 Categories and brands
- 🔍 Product filtering and sorting
- 📈 SEO-ready metadata
- 🚀 API-ready architecture

---

## 🎯 Core Experience

### 🏠 Home

The homepage is built around a modern shopping journey:

```text
Hero
  ↓
Categories
  ↓
Featured Products
  ↓
Promotional Banner
  ↓
New Arrivals
  ↓
Newsletter
```
````

---

### 🛍️ Products

Users can explore the product catalog with:

- Category filtering
- Search
- Price filtering
- Sorting
- Product badges
- Ratings
- Product cards
- Responsive product grids

Supported sorting:

```text
✨ Newest
🔥 Most Popular
⭐ Highest Rated
💰 Lowest Price
💎 Highest Price
```

---

### ❤️ Wishlist

The wishlist provides a fast way to save products for later.

Features include:

- Add/remove products
- Persistent local state
- Wishlist drawer
- Wishlist page
- Quick add to cart
- Product navigation

---

### 🛒 Shopping Cart

The cart system supports:

- Add to cart
- Remove items
- Increase quantity
- Decrease quantity
- Persistent cart state
- Cart drawer
- Cart page
- Subtotal calculation
- Checkout navigation

---

### 🔎 Smart Search

Neva includes an animated search experience with:

- Instant local search
- Product name matching
- Description matching
- Tag matching
- Search suggestions
- Product previews
- Direct product navigation
- Full search page navigation

---

### 💳 Checkout

The checkout architecture is prepared for a complete purchase flow:

```text
Cart
  ↓
Checkout
  ↓
Shipping Address
  ↓
Payment Method
  ↓
Order Summary
  ↓
Order Success
```

---

## 🧩 Tech Stack

### Frontend

| Technology     | Purpose            |
| -------------- | ------------------ |
| Next.js 16     | React framework    |
| React 19       | UI development     |
| TypeScript     | Type safety        |
| Tailwind CSS 4 | Styling            |
| Vazirmatn      | Persian typography |

### State & Forms

| Technology          | Purpose                     |
| ------------------- | --------------------------- |
| Zustand             | Global state management     |
| React Hook Form     | Form management             |
| Zod                 | Validation                  |
| @hookform/resolvers | Form validation integration |

### UI & Animation

| Technology    | Purpose                    |
| ------------- | -------------------------- |
| Lucide React  | Icons                      |
| Framer Motion | Animations and transitions |

---

## 🧠 State Management

Neva uses **Zustand** for lightweight and scalable global state management.

### 🛒 Cart Store

```text
cart.store.ts
```

Responsible for:

- Cart items
- Quantity
- Subtotal
- Add/remove operations
- Persistent storage

Storage key:

```text
Neva-cart
```

---

### ❤️ Wishlist Store

```text
wishlist.store.ts
```

Responsible for:

- Saved product IDs
- Add/remove/toggle operations
- Persistent wishlist

Storage key:

```text
Neva-wishlist
```

---

### 👤 Authentication Store

```text
auth.store.ts
```

Prepared for:

- User authentication
- User profile
- Access token
- Account state

Storage key:

```text
Neva-auth
```

---

### 🎛️ UI Store

```text
ui.store.ts
```

Controls:

```text
Cart Drawer
Wishlist Drawer
Search Drawer
Mobile Menu
```

Only one interactive drawer is opened at a time to keep the experience clean and predictable.

---

## 📦 Current Mock Catalog

Neva currently includes a curated mock catalog covering:

### 👕 Fashion

- Minimal Linen Shirt
- Everyday Oversized Hoodie

### 👟 Shoes

- Classic Leather Sneakers

### 👜 Bags

- Structured Tote Bag
- Everyday Crossbody Bag

### ⌚ Accessories

- Minimal Watch
- Leather Card Holder
- Classic Sunglasses

### 💄 Beauty

- Daily Minimal Perfume
- Daily Skincare Set

### 🏠 Lifestyle

- Minimal Ceramic Mug
- Scented Minimal Candle

---

## 🖼️ Assets

Product and category assets are organized under:

```text
public/
└── images/
    ├── products/
    ├── categories/
    ├── banners/
    └── brands/
```

This structure makes it easy to replace mock assets with production assets without changing the application architecture.

---

## 🔌 API Ready

Although Neva currently operates with mock data, the project is structured for future backend integration.

API endpoints are centralized in:

```text
src/lib/constants.ts
```

Example:

```text
/products
/products/:slug
/categories
/categories/:slug
/products/search
/auth/login
/auth/register
/auth/me
/cart
/cart/items
/orders
/orders/:id
/users/me
/users/me/addresses
```

The goal is to allow the frontend data layer to evolve from:

```text
Mock Data
    ↓
Service Layer
    ↓
Real API
```

without rebuilding the UI architecture.

---

## 🔐 Authentication

Authentication pages are already structured for future backend integration.

Available routes:

```text
/auth/login
/auth/register
/auth/forgot-password
```

Account routes:

```text
/account
/account/orders
/account/wishlist
/account/addresses
/account/settings
```

---

## 📱 Responsive Design

Neva is designed for:

```text
📱 Mobile
   ↓
📲 Tablet
   ↓
💻 Desktop
   ↓
🖥️ Large Screens
```

The layout adapts across screen sizes while preserving the same visual language and interaction patterns.

---

## 🎨 Design System

Neva uses a minimal natural color palette.

```text
Primary
#315C4C

Primary Dark
#24483B

Primary Light
#E7EFEB

Secondary
#C8A46B

Background
#F8F7F4

Surface
#FFFFFF

Border
#E5E2DB

Foreground
#17221D
```

The design direction focuses on:

- Minimalism
- Soft contrast
- Natural colors
- Generous spacing
- Rounded surfaces
- Subtle shadows
- Clear typography
- Smooth micro-interactions

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SinaAghajani/Neva-Shop.git
```

### 2. Enter the project

```bash
cd neva
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create:

```text
.env.local
```

Example:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### 5. Start development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Production Server

```bash
npm run start
```

### Lint

```bash
npm run lint
```

---

## 🗺️ Roadmap

### ✅ Completed

- [x] Next.js project setup
- [x] TypeScript architecture
- [x] Tailwind CSS setup
- [x] Responsive layout
- [x] Header
- [x] Footer
- [x] Mobile navigation
- [x] Homepage
- [x] Product catalog
- [x] Categories
- [x] Product details
- [x] Wishlist
- [x] Cart
- [x] Search
- [x] Cart drawer
- [x] Wishlist drawer
- [x] Search drawer
- [x] Authentication UI
- [x] Checkout UI
- [x] Account UI
- [x] Mock product data
- [x] Zustand stores
- [x] SEO metadata
- [x] Persian RTL support

### 🚧 In Progress

- [ ] Backend API
- [ ] Real authentication
- [ ] Database integration
- [ ] Real product management
- [ ] Payment gateway
- [ ] Order processing
- [ ] Admin dashboard

### 🔮 Future

- [ ] Product recommendations
- [ ] Advanced filtering
- [ ] Coupon system
- [ ] Inventory management
- [ ] Online payment
- [ ] Notifications
- [ ] Analytics dashboard
- [ ] Advanced SEO
- [ ] PWA support

---

## ⚡ Performance Philosophy

Neva is designed with performance in mind.

The project focuses on:

- Server Components where appropriate
- Client Components only where interaction requires them
- Optimized image rendering
- Minimal global state
- Component-level responsibility
- Reusable UI primitives
- Scalable data structures
- Clean route architecture

---

## 🧱 Development Principles

Neva follows several core principles:

```text
Clean Code
    +
Reusable Components
    +
Type Safety
    +
Scalable Architecture
    +
Responsive Design
    +
Future API Integration
```

The goal is not simply to build a beautiful interface.

The goal is to build a frontend that can **grow into a real e-commerce platform**.

---

## 🌟 Why Neva?

Neva is more than a collection of pages.

It is an experiment in building a modern shopping experience where:

```text
Design
  +
Performance
  +
Architecture
  +
User Experience
  +
Scalability
```

work together.

Every component is designed with the future backend and real-world product requirements in mind.

---

## 📸 Preview

### 🏠 Homepage

> Modern hero section, categories, featured products, promotional content, new arrivals, and newsletter.

### 🛍️ Product Experience

> Product discovery, filtering, sorting, product details, ratings, reviews, and related products.

### 🛒 Shopping Experience

> Persistent cart, wishlist, animated drawers, quantity management, and checkout flow.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

If you find a bug or have an idea for improving Neva:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit your changes
5. Open a Pull Request

---

## 📄 License

This project is currently intended for educational, portfolio, and development purposes.

---

<div align="center">

### 💚 Built with passion for modern web experiences

**Neva — Simple. Modern. Yours.**

<br />

⭐ Star this repository if you like the project.

<br />

<img src="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake.svg" alt="GitHub Contribution Snake" />

</div>
```

این نسخه برای وضعیت فعلی پروژه‌ات نوشته شده و **Backend را هم عمداً به‌عنوان Future/API-ready** معرفی کرده، نه اینکه وانمود کند الان وجود دارد.

یک نکته کوچک: در خط clone، `your-username/Neva` را وقتی ریپوی واقعی GitHub را ساختی با آدرس واقعی ریپو عوض کن.
