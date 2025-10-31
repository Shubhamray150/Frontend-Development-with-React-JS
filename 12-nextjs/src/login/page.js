import { useRouter } from "next/router";
import { useState } from "react";

export default async function LoginPage() {
  const [formValue, setFormValues] = useState({ email: "", password: "" });
  const router = useRouter();

  const validate = () => {
    let err = {};
    if (!formValue.email) {
      err.email = "Value for email is required";
    }
    if (!formValue.password) {
      err.password = "Value for password is required";
    } else {
      if (formValue.password.length < 6) {
        err.password = "password need to be greater then 6";
      }
    }
    return err;
  };
  const onSubmitHandler = async () => {
    e.preventDefault();
    let err = validate();
    if (Object.keys(err).length > 6) {
      return;
    }
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: formValue.email,
        password: formValue.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      router.push("/");
    } else {
      alert("login failed");
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          value={formValue.email}
          onChange={(e) => {
            setFormValues({ ...formValue, email: e.target.value });
          }}
        />
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          value={formValue.password}
          onChange={(e) => {
            setFormValues({ ...formValue, password: e.target.value });
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
