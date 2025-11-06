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
import { Navigate } from "react-router-dom";
import AdminCategorySection from "./components/admin/AdminCategorySection";
import MovieDetails from "./components/pages/MovieDetails";
import { useSelector } from "react-redux";
import BookTicket from "./components/pages/BookTicket";
import BookTicketAuth from "./components/pages/BookTicketAuth";

function App() {
  const token = localStorage.getItem("adminToken");
  const auth = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserBody />} />
          <Route path="bookTicket" element={<BookTicket />}></Route>
          <Route path="bookTicketAuth/:id" element={<BookTicketAuth />}></Route>
          <Route path="movie/:id" element={<MovieDetails />}></Route>
        </Route>
        <Route
          path="/admin"
          element={token ? <AdminLayout /> : <Navigate to={"/auth"} />}
        >
          <Route index element={<Navigate to="profile" />} />
          <Route path="profile" element={<AdminProfile />}></Route>
          <Route path="category" element={<AdminCategories />}></Route>
          <Route path="category/:id" element={<AdminCategorySection />}></Route>
          <Route path="movies" element={<AdminMovies />}></Route>
          <Route path="showtimes" element={<AdminShowTime />}></Route>
          <Route path="booked" element={<AdminBookedMovies />}></Route>
        </Route>
        <Route path="/auth" element={<Authentication />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
