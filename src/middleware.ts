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

  // Si no hay token JWT y la ruta es protegida, redirigir a /login
  if (!jwtToken?.value) {
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return intlResponse || NextResponse.next();
  }

  // Si existe el token, validarlo con la clave pública
  const publicKey = process.env.JWT_PUBLIC_KEY;

  if (!publicKey) {
    throw new Error("La clave pública no está definida.");
  }

  try {
    const key = await importSPKI(publicKey, "RS256");

    // Validación del JWT
    await jwtVerify(jwtToken.value, key);

    // Si es un login o ruta pública y el JWT es válido, redirigir a /dashboard
    if (
      request.nextUrl.pathname === "/en/login" ||
      request.nextUrl.pathname === "/es/login" ||
      request.nextUrl.pathname === "/it/login" ||
      request.nextUrl.pathname === "/pt/login" ||
      request.nextUrl.pathname === "/fr/login"
    ) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Si todo es correcto, continuar con la respuesta internacionalizada o la siguiente respuesta
    return intlResponse || NextResponse.next();
  } catch (error) {
    console.log(error);
    // Si la validación del JWT falla, redirigir al login
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    // Si no es una ruta protegida, continuar normalmente
    return intlResponse || NextResponse.next();
  }
}

export const config = {
  matcher: ["/", "/(en|es|fr|it|pt|)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
