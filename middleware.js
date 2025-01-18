import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define route for the homepage you want to protect
const isProtectedRoute = createRouteMatcher(['/'])

export default clerkMiddleware(async (auth, req) => {
  // If the requested route is the homepage, call auth.protect()
  if (isProtectedRoute(req)) {
    await auth.protect() // This will enforce authentication
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
