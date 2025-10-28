import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import UserBody from "./components/pages/UserBody";
import AdminLayout from "./components/AdminLayout";
import AdminProfile from "./components/admin/AdminProfile";
import AdminCategories from "./components/admin/AdminCategories";
import AdminMovies from "./components/admin/AdminMovies";
import AdminShowTime from "./components/admin/AdminShowTime";
import AdminBookedMovies from "./components/admin/AdminBookedMovies";
import Authentication from "./components/pages/Authentication";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserBody />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="profile" element={<AdminProfile />}></Route>
          <Route path="category" element={<AdminCategories />}></Route>
          <Route path="movies" element={<AdminMovies />}></Route>
          <Route path="showtimes" element={<AdminShowTime />}></Route>
          <Route path="booked" element={<AdminBookedMovies />}></Route>
        </Route>
        <Route path="/auth" element={<Authentication />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
