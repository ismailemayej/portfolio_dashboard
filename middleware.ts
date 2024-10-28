import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/", "/projects", "/blogs"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Only apply middleware to protected routes
  if (protectedRoutes.includes(pathname)) {
    const token = request.cookies.get("token");
    // If no token is present, redirect to login
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/projects", "/blogs"],
};
