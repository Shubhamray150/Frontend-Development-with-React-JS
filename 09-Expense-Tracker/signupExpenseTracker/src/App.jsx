import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import UpdateProfilePage from "./pages/updateProfile/UpdateProfilePage";
import ResetPassword from "./pages/ResetPassword";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./pages/Layout";
import Body from "./pages/home/Body";
import { useEffect } from "react";
import { fetchUserProfile } from "./services/authService";
import { authActions } from "./store/redux/authReducer";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.token) return;
    const loadProfile = async () => {
      const data = await fetchUserProfile(auth.token);
      if (data.error) {
        alert(data.error.message);
      } else {
        dispatch(
          authActions.updateProfile({
            name: data.users[0].displayName,
            photo: data.users[0].photoUrl,
          })
        );
      }
    };
    loadProfile();
  }, [auth.token]);

  return (
    <Routes>
      <Route path="/" element={auth.isLoggedIn ? <Layout /> : <Signup />}>
        <Route index element={<Body />} />
        <Route
          path="/update"
          element={auth.isLoggedIn ? <UpdateProfilePage /> : <Signup />}
        />
      </Route>

      <Route path="/" element={auth.isLoggedIn ? <Layout /> : <Signup />} />
      <Route
        path="/signup"
        element={auth.isLoggedIn ? <Navigate to="/" /> : <Signup />}
      />
      <Route path="/ResetPassword" element={<ResetPassword />} />
      <Route path="*" element={auth.isLoggedIn ? <Layout /> : <Signup />} />
    </Routes>
  );
}

export default App;
