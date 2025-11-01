"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const cookies = document.cookie.split(';');
    const logged = cookies.some(cookie => cookie.trim().startsWith('logged-in=true'));
    setIsLoggedIn(logged);
  }, [pathname]);

  const logout = () => {
    fetch("/api/logout").then(() => {
      router.push("/login");
    });
  };
  return (
    <header className="flex justify-between p-4  border">
      <h1 className="text-xl font-bold">My app</h1>
      {isLoggedIn ? (
        <button
          className="px-3 py-1 bg-red-500 text-white rounded"
          onClick={logout}
        >
          Logout
        </button>
      ) : (
        <button
          className="px-3 p-1 bg-blue-500 text-white rounded"
          onClick={() => {
            router.push("/login");
          }}
        >
          Login
        </button>
      )}
    </header>
  );
};

export default Header;
