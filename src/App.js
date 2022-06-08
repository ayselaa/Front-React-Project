import { BrowserRouter, Routes,Route } from "react-router-dom";
import "../src/assets/css/main.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
