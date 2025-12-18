import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";

const API = import.meta.env.VITE_API_URL;

export default function Home({ token, onLogout, setToken }) {
  const [email, setEmail] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);

  // ========= lấy sản phẩm từ backend =========
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Lấy email user nếu có token
  useEffect(() => {
    if (!token) return;

    fetch(`${API}/api/home`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.email) setEmail(data.email);
      });
  }, [token]);

  // Lấy danh sách sản phẩm
  useEffect(() => {
    fetch(`${API}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar
        token={token}
        userEmail={email}
        onLogout={onLogout}
        onOpenLogin={() => setLoginOpen(true)}
      />

      {loginOpen && (
        <LoginModal onClose={() => setLoginOpen(false)} setToken={setToken} />
      )}

      <div style={{ display: "flex", padding: "20px 40px" }}>
        <Categories />

        <div style={{ marginLeft: "20px", width: "100%" }}>
          <Banner />

          <h3
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            Featured Products
          </h3>

          {/* Loading */}
          {loading && <p>Loading products...</p>}

          {/* Render UI sản phẩm – GIAO DIỆN GIỮ NGUYÊN */}
          {!loading && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "20px",
              }}
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
