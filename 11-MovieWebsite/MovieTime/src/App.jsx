import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import UserBody from "./components/user/UserBody";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserBody />}></Route>
          <Route path="/admin"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
