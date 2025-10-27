import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import UserBody from "./components/pages/UserBody";
import AdminLayout from "./components/AdminLayout";
import AdminProfile from "./components/admin/AdminProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserBody />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="profile" element={<AdminProfile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
