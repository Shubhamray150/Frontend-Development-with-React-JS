"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const search = useSearchParams();

  const redirectTo = search.get("redirect") || "/products";

  async function handleLogin(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push(redirectTo);
    } else {
      setError("Invalid credentials");
    }
  }
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">LogIn</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          className="border p-2 mb-2 block"
          name="username"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          className="border p-2 mb-2 block"
          placeholder="Password"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
