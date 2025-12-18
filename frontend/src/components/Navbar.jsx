import { Link } from "react-router-dom";
import { ShoppingCart, Heart, User, LogOut } from "lucide-react";

export default function Navbar({ token, userEmail, onLogout, onOpenLogin }) {
  return (
    <>
      {/* Top Banner */}
      <div
        style={{
          background: "#4a4a4a",
          color: "white",
          padding: "8px 40px",
          fontSize: "13px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>
          Giảm giá lên đến 50% cho các sản phẩm mùa mới – chỉ trong thời gian có
          hạn!
        </span>
        <div style={{ display: "flex", gap: "20px", fontSize: "12px" }}>
          <Link
            to="/support"
            style={{ color: "white", textDecoration: "none" }}
          >
            Trung tâm hỗ trợ
          </Link>
          <Link to="/orders" style={{ color: "white", textDecoration: "none" }}>
            Theo dõi đơn hàng
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          padding: "16px 40px",
          background: "white",
          justifyContent: "space-between",
          boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "4px",
            }}
          />
          <div>
            <div
              style={{
                lineHeight: "1",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#e63946",
              }}
            >
              MYSHOP
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#666",
                fontWeight: "normal",
                letterSpacing: "2px",
              }}
            >
              BIG MEGA STORE
            </div>
          </div>
        </Link>

        {/* Search Bar - NO ICON */}
        <input
          placeholder="Tìm kiếm sản phẩm..."
          style={{
            width: "45%",
            padding: "12px 20px",
            borderRadius: "25px",
            border: "1px solid #e0e0e0",
            fontSize: "14px",
            outline: "none",
            background: "#f8f8f8",
          }}
        />

        {/* Right Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {/* Welcome message */}
          {token && (
            <span style={{ fontSize: "14px", fontWeight: 500, color: "#333" }}>
              Xin chào {userEmail}
            </span>
          )}

          {/* Cart with Badge */}
          <Link to="/cart" style={iconLinkStyle}>
            <div style={{ position: "relative" }}>
              <ShoppingCart size={24} color="#333" strokeWidth={1.5} />
              <div
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  background: "#e63946",
                  color: "white",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                0
              </div>
            </div>
          </Link>

          {/* Wishlist */}
          <Link to="/wishlist" style={iconLinkStyle}>
            <Heart size={24} color="#333" strokeWidth={1.5} />
          </Link>

          {/* Login / Logout */}
          {token ? (
            <button onClick={onLogout} style={iconButtonStyle}>
              <LogOut size={20} color="#333" strokeWidth={1.5} />
              <span style={{ marginLeft: "6px" }}>Đăng xuất</span>
            </button>
          ) : (
            <button onClick={onOpenLogin} style={iconButtonStyle}>
              <User size={20} color="#333" strokeWidth={1.5} />
              <span style={{ marginLeft: "6px" }}>Đăng nhập</span>
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

const iconLinkStyle = {
  cursor: "pointer",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
};

const iconButtonStyle = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
  color: "#333",
  fontWeight: 500,
  padding: "0",
};
