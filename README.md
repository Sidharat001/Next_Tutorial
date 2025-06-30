# Next.js File-Based Routing Explained

This project demonstrates the file-based routing system in [Next.js](https://nextjs.org), which automatically maps files in the `app` directory to corresponding URLs in your application.

## What is File-Based Routing?

In Next.js, the structure of your files inside the `app` directory directly determines the routes (URLs) of your web application. Each folder and file corresponds to a specific path in the URL.

For example:

```
app/page.tsx                →  http://localhost:3000/
app/about/page.tsx          →  http://localhost:3000/about
app/contact/page.tsx        →  http://localhost:3000/contact
app/contact/list/page.tsx   →  http://localhost:3000/contact/list
```

- The `page.tsx` file inside the `app` directory corresponds to the root route `/`.
- Creating a folder like `about` with a `page.tsx` inside it creates the `/about` route.
- Nested folders create nested routes, such as `/contact/list`.

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
