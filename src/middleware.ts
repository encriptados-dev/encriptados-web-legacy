import { jwtVerify, importSPKI } from "jose"; // Cambiado a importSPKI
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

    await jwtVerify(jwtToken.value, key);

    return intlResponse || NextResponse.next();
  } catch (error) {
    if (isProtectedRoute) {
      console.log(error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return intlResponse || NextResponse.next();
  }
}

export const config = {
  matcher: ["/", "/(en|es|fr|it|pt|)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
