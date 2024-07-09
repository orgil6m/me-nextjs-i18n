import { NextRequest } from "next/server";
import { localeMiddleware } from "./middlewares/localeMiddleware";

export function middleware(request: NextRequest) {
  return localeMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|img/|favicon.ico).*)"],
};
