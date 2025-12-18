import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("token");
    saved ? setToken(saved) : setToken(null);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home token={token} setToken={setToken} onLogout={handleLogout} />
        }
      />
    </Routes>
  );
}
