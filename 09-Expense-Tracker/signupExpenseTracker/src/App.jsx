import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import UpdateProfilePage from "./pages/updateProfile/UpdateProfilePage";
import ResetPassword from "./pages/ResetPassword";
import { useSelector } from "react-redux";
import Layout from "./pages/Layout";
import Body from "./pages/home/Body";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Layout /> : <Signup />}>
        <Route index element={<Body />} />
        <Route
          path="/update"
          element={isLoggedIn ? <UpdateProfilePage /> : <Signup />}
        />
      </Route>

      <Route path="/" element={isLoggedIn ? <Layout /> : <Signup />} />
      <Route
        path="/signup"
        element={isLoggedIn ? <Navigate to="/" /> : <Signup />}
      />
      <Route path="/ResetPassword" element={<ResetPassword />} />
      <Route path="*" element={isLoggedIn ? <Layout /> : <Signup />} />
    </Routes>
  );
}

export default App;
