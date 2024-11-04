import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_KEYWORD } from "./lib/constants";

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get(AUTH_COOKIE_KEYWORD);
  console.log(authCookie);

  if (!authCookie) {
    // Redirect to login if no cookie is found
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow request to proceed if cookie is found
  return NextResponse.next();
}

// Define routes where middleware should apply
export const config = {
  // matcher: "/((?!login).*)", // Protect these routes
  matcher: ["/home", "/profile", "/customer", "/repair"], // Protect these routes
};
