import { jwtVerify, importSPKI } from "jose"; // Cambiado a importSPKI
import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { protectedRoutesArray } from "./app/constants/protectedRoutes";

const intlMiddleware = createMiddleware(routing);

export async function middleware(
  request: NextRequest
): Promise<NextResponse | undefined> {
  // Primero, ejecutar el middleware de internacionalización
  const intlResponse = await intlMiddleware(request);

  // Verificar si la ruta actual es una de las rutas protegidas
  const isProtectedRoute = protectedRoutesArray.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  // Obtener el JWT desde las cookies
  const jwtToken = request?.cookies.get("authToken");

  if (!jwtToken?.value) {
    // Si no hay JWT, redirigir a la página de login
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

    // Verificar el JWT utilizando RS256
    const decoded = await jwtVerify(jwtToken.value, key);

    // Aquí puedes acceder al payload decodificado si es necesario
    console.log(decoded); // Si lo necesitas para algo específico

    return intlResponse || NextResponse.next();
  } catch (error) {
    console.log("JWT inválido o expirado:", error);
    // En caso de error al verificar el JWT (JWT inválido o expirado), redirigir a login
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return intlResponse || NextResponse.next();
  }
}

export const config = {
  matcher: ["/", "/(en|es|fr|it|pt|)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
