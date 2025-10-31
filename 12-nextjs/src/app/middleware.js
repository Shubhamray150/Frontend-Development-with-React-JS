import { verifyToken } from "./lib/auth";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const user = token ? await verifyToken(token) : null;
}
