import { NextResponse } from "next/server";

const POST = async (req) => {
  const { username, password } = await req.json();
  if (username === "admin" && password === "1230") {
    const res = NextResponse.json({ success: true });
    res.cookies.set("logged-in", "true", {
      httpOnly: true,
      path: "/",
    });
    return res;
  }
  return NextResponse.json({ success: false }, { status: 401 });
};

export default POST;
