# Getting started with clerk operation Phase 3
<p align="center">
    <a href="#" style="display: block;" align="center">
        <img src="https://i.pinimg.com/originals/6e/ca/47/6eca470b57e40f6e9ae827659e31f2bd.gif" alt="Uchiha madara" width="60%" />
    </a>
</p>

This phase focuses on implementing user creating user profile and styling which will enhance the user experience.

* **Implementing User Profile:** 
    * The `UserProfile` component from `@clerk/nextjs` displays the essential user information.
    import { UserProfile } from '@clerk/nextjs';
    ```javascript
    const ProfilePage = () => {
    return (
    <div>
      <UserProfile />
    </div>
  );
    }
    ```

* **Applying Custom Styling:** 
    * The `neobrutalism` theme from `@clerk/themes` enhances the application's visual appeal. 
    * Custom fonts (Geist Sans and Geist Mono) have been utilized for improved typography.

    **Applying the `neobrutalism` Theme:**

    ```javascript
    import { ClerkProvider } from "@clerk/nextjs";
    import { neobrutalism } from "@clerk/themes";

    export default function RootLayout({ children }) {
    return (
    <ClerkProvider appearance={{ baseTheme: neobrutalism }}> 
      {/* ... rest of the layout ... */}
    </ClerkProvider>
  );
    }
    ```

* **Layout Enhancements:**
    * The overall layout and structure of the application.

![alt text](image.png)
![alt text](image-3.png)

**Output:**

* **Functional User Profile:** Users can now view their basic profile information within the application.
* **Enhanced Visual Appeal:** The application now features the `neobrutalism` theme, providing a more visually engaging user experience.
* **Improved Typography:** Custom fonts enhance readability and contribute to a more polished look.

<!---
## What's Clerk?
Clerk authentication is a platform that helps developers create secure authentication systems for their applications. It offers a variety of authentication methods, including passwords, social media sign-on, and multi-factor authentication. 

### It's Benefits
1. Simplifies the authentication process for developers
2. Provides a seamless user experience
3. Ensures user data security
4. Reduces the need to build custom login and sign-up screens

### Getting started 
#### Set up your Clerk account
Before you can start integrating Clerk into your application, you need to create a Clerk account and set up a new application in the Clerk Dashboard. This guide will walk you through those steps.

1. Sign into Clerk
2. Create a Clerk application
3. Select your identifiers and social providers
4. Integrate Clerk into your application

## Integrating Clerk into our Next.Js Project
1. Install @clerk/nextjs
2. Set your Clerk API keys
Create your .env.local file. These keys can always be retrieved from the API Keys page of your Clerk Dashboard.
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cmVhZHktaG91bmQtNjIuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_gSjYiO5x9yd5qNaMGrSttDFubU3ai77jD3yaHqSjoq
```
3. Add your clerkMiddleware() to your app
clerkMiddleware() grants you access to user authentication state throughout your app, on any route or page. It also allows you to protect specific routes from unauthenticated users.

4. Add <ClerkProvider> and Clerk components to your app

5. Successfully Create your first user
-->

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
