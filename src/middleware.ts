import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { jwtVerify } from "jose";
import { protectedRoutesArray } from "./app/constants/protectedRoutes";

const intlMiddleware = createMiddleware(routing);

export async function authMiddleware(
  request: NextRequest
): Promise<NextResponse | undefined> {
  const jwt = request.cookies.get("myTokenName");

  if (!jwt) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const { payload } = await jwtVerify(
      jwt.value,
      new TextEncoder().encode("secret")
    );
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export async function middleware(
  request: NextRequest
): Promise<NextResponse | undefined> {
  // First, execute the internationalization middleware
  const intlResponse = await intlMiddleware(request);

  // Define the protected routes
  const protectedRoutes: string[] = protectedRoutesArray;

  // Check if the path is in the protected routes
  if (
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    // Apply authentication if the route is protected
    const authResponse = await authMiddleware(request);
    if (authResponse) return authResponse; // Redirect to login if authentication fails
  }

  // Continue the request if all checks pass
  return intlResponse || NextResponse.next();
}

// Configuration for the middleware matcher
export const config = {
  matcher: [
    "/", // Ensure the root routes are handled correctly
    "/(en|es|fr|it|pt|)/:path*", // Routes with locale prefixes
    "/((?!_next|_vercel|.*\\..*).*)", // Exclude static files or _next
    "/dashboard/:path*", // Protected routes like the dashboard
    "/profile/:path*", // Additional protected route
    "/settings/:path*", // Additional protected route
  ],
};
