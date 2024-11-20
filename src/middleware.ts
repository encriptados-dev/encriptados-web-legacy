import { jwtVerify, importSPKI } from "jose";
import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { protectedRoutesArray } from "./app/constants/protectedRoutes";

const intlMiddleware = createMiddleware(routing);

export async function middleware(
  request: NextRequest
): Promise<NextResponse | undefined> {
  const intlResponse = await intlMiddleware(request);

  const isProtectedRoute = protectedRoutesArray.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  const jwtToken = request?.cookies.get("authToken");

  if (!jwtToken?.value) {
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return intlResponse || NextResponse.next();
  }

  const publicKey = process.env.JWT_PUBLIC_KEY;

  if (!publicKey) {
    throw new Error("La clave pública no está definida.");
  }

  try {
    const key = await importSPKI(publicKey, "RS256");

    await jwtVerify(jwtToken.value, key, {
      clockTolerance: 30,
    });

    if (
      request.nextUrl.pathname === "/en/login" ||
      request.nextUrl.pathname === "/es/login" ||
      request.nextUrl.pathname === "/it/login" ||
      request.nextUrl.pathname === "/pt/login" ||
      request.nextUrl.pathname === "/fr/login"
    ) {
      return NextResponse.redirect(
        new URL("/dashboard/data-usage", request.url)
      );
    }

    return intlResponse || NextResponse.next();
  } catch (error) {
    console.log(error);

    if (isProtectedRoute) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return intlResponse || NextResponse.next();
  }
}

export const config = {
  matcher: ["/", "/(en|es|fr|it|pt|)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
