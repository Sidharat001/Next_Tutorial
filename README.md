# Next.js File-Based Routing Explained

This project demonstrates the file-based routing system in [Next.js](https://nextjs.org), which automatically maps files in the `app` directory to corresponding URLs in your application.

## What is File-Based Routing?

In Next.js, the structure of your files inside the `app` directory directly determines the routes (URLs) of your web application. Each folder and file corresponds to a specific path in the URL.

### Basic Routes

- `app/page.tsx` → `/` (Root route)
- `app/about/page.tsx` → `/about`
- `app/contact/page.tsx` → `/contact`

### Nested Routes

Folders inside `app` create nested routes:

- `app/product/list/page.tsx` → `/product/list`

### Dynamic Routes

Dynamic segments are defined using square brackets:

- `app/product/list/[productId]/page.tsx` → `/product/list/:productId`

You can access the dynamic parameter (`productId`) in your component via the `params` prop.

### Catch-All Routes

Catch-all routes match multiple segments:

- `app/product/list/[...productIds]/page.tsx` → `/product/list/*`

This matches `/product/list/a`, `/product/list/a/b`, etc.

### Route Groups

Route groups allow grouping routes without affecting the URL path, using parentheses:

- `app/(auth)/login/page.tsx` → `/login`
- `app/(auth)/register/page.tsx` → `/register`

This helps organize routes without changing the URL structure.

### Special Files

- `app/not-found.tsx` — Custom 404 page
- `app/layout.tsx` — Shared layout for nested routes
- `app/loading.tsx` — Loading UI during suspense or data fetching

## Getting Started

To run this Next.js project locally, first install dependencies and then start the development server:

```bash
npm install
npm run dev
# or
yarn
yarn dev
# or
pnpm install
pnpm dev
# or
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Editing Pages

You can start editing the pages by modifying the corresponding `page.tsx` files inside the `app` directory. The app will automatically reload to reflect your changes.

## Learn More

To learn more about Next.js and its routing system, check out these resources:

- [Next.js Documentation - Routing](https://nextjs.org/docs/app/building-your-application/routing)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

## Deploy on Vercel

The easiest way to deploy your Next.js app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
