const AUTH_URL = "https://identitytoolkit.googleapis.com/v1/accounts";
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

export const loginService = async (email, password) => {
  const res = await fetch(`${AUTH_URL}:signInWithPassword?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, returnSecureToken: true }),
  });
  return res.json();
};

export const signupService = async (email, password) => {
  const res = await fetch(`${AUTH_URL}:signUp?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, returnSecureToken: true }),
  });

  return res.json();
};

export const fetchUserProfile = async (token) => {
  const res = await fetch(`${AUTH_URL}:lookup?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idToken: token }),
  });

  return res.json();
};

export const updateUserProfile = async (profileData) => {
  console.log(profileData);

  const res = await fetch(`${AUTH_URL}:update?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profileData),
  });

  return res.json();
};
