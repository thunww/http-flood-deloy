import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Send,
} from "lucide-react";

export default function Footer() {
  const footerLinks = {
    company: [
      { name: "Về chúng tôi", href: "#" },
      { name: "Tuyển dụng", href: "#" },
      { name: "Tin tức", href: "#" },
      { name: "Liên hệ", href: "#" },
    ],
    support: [
      { name: "Chính sách bảo hành", href: "#" },
      { name: "Chính sách đổi trả", href: "#" },
      { name: "Chính sách vận chuyển", href: "#" },
      { name: "Hướng dẫn mua hàng", href: "#" },
    ],
    customer: [
      { name: "Tài khoản của tôi", href: "#" },
      { name: "Lịch sử đơn hàng", href: "#" },
      { name: "Danh sách yêu thích", href: "#" },
      { name: "Theo dõi đơn hàng", href: "#" },
    ],
    categories: [
      { name: "Electronics", href: "#" },
      { name: "Fashion", href: "#" },
      { name: "Gaming", href: "#" },
      { name: "Beauty", href: "#" },
    ],
  };

  return (
    <footer
      style={{
        background: "#2d2d2d",
        color: "#fff",
        marginTop: "60px",
      }}
    >
      {/* Main Footer Content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "50px 40px 30px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1.5fr",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {/* Company Info */}
          <div>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#fff",
              }}
            >
              MYSHOP
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: "#b0b0b0",
                marginBottom: "20px",
                lineHeight: "1.6",
              }}
            >
              BIG MEGA STORE
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#d0d0d0",
                lineHeight: "1.8",
                marginBottom: "20px",
              }}
            >
              Nơi mua sắm trực tuyến hàng đầu với hàng triệu sản phẩm chất
              lượng, giá tốt nhất thị trường.
            </p>

            {/* Contact Info */}
            <div style={{ marginTop: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <MapPin size={18} color="#ef4444" />
                <span style={{ fontSize: "14px", color: "#d0d0d0" }}>
                  219/4 Lê Văn Chí, P.Linh Xuân, TP.HCM
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <Phone size={18} color="#ef4444" />
                <span style={{ fontSize: "14px", color: "#d0d0d0" }}>
                  0705 226 741
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Mail size={18} color="#ef4444" />
                <span style={{ fontSize: "14px", color: "#d0d0d0" }}>
                  support@myshop.com
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#fff",
              }}
            >
              Công ty
            </h4>
            {footerLinks.company.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  display: "block",
                  color: "#d0d0d0",
                  fontSize: "14px",
                  marginBottom: "12px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#ef4444")}
                onMouseLeave={(e) => (e.target.style.color = "#d0d0d0")}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Support Links */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#fff",
              }}
            >
              Hỗ trợ
            </h4>
            {footerLinks.support.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  display: "block",
                  color: "#d0d0d0",
                  fontSize: "14px",
                  marginBottom: "12px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#ef4444")}
                onMouseLeave={(e) => (e.target.style.color = "#d0d0d0")}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Customer Links */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#fff",
              }}
            >
              Khách hàng
            </h4>
            {footerLinks.customer.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  display: "block",
                  color: "#d0d0d0",
                  fontSize: "14px",
                  marginBottom: "12px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#ef4444")}
                onMouseLeave={(e) => (e.target.style.color = "#d0d0d0")}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#fff",
              }}
            >
              Đăng ký nhận tin
            </h4>
            <p
              style={{
                fontSize: "13px",
                color: "#b0b0b0",
                marginBottom: "15px",
                lineHeight: "1.6",
              }}
            >
              Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt
            </p>

            {/* Newsletter Form */}
            <div
              style={{
                display: "flex",
                marginBottom: "20px",
              }}
            >
              <input
                type="email"
                placeholder="Email của bạn"
                style={{
                  flex: 1,
                  padding: "10px 15px",
                  border: "1px solid #555",
                  borderRadius: "4px 0 0 4px",
                  background: "#3d3d3d",
                  color: "#fff",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
              <button
                style={{
                  padding: "10px 20px",
                  background: "#ef4444",
                  border: "none",
                  borderRadius: "0 4px 4px 0",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#dc2626")}
                onMouseLeave={(e) => (e.target.style.background = "#ef4444")}
              >
                <Send size={18} color="#fff" />
              </button>
            </div>

            {/* Social Media */}
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#fff",
              }}
            >
              Kết nối với chúng tôi
            </h4>
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { Icon: Facebook, color: "#1877f2" },
                { Icon: Instagram, color: "#e4405f" },
                { Icon: Twitter, color: "#1da1f2" },
                { Icon: Youtube, color: "#ff0000" },
              ].map(({ Icon, color }, idx) => (
                <div
                  key={idx}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#3d3d3d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = color;
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#3d3d3d";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={20} color="#fff" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div
          style={{
            borderTop: "1px solid #444",
            paddingTop: "25px",
            marginBottom: "20px",
          }}
        >
          <h4
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              marginBottom: "15px",
              color: "#fff",
            }}
          >
            Phương thức thanh toán
          </h4>
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            {["Visa", "MasterCard", "PayPal", "Momo", "ZaloPay", "VNPay"].map(
              (method) => (
                <div
                  key={method}
                  style={{
                    padding: "8px 16px",
                    background: "#3d3d3d",
                    borderRadius: "6px",
                    fontSize: "13px",
                    color: "#d0d0d0",
                    border: "1px solid #555",
                  }}
                >
                  {method}
                </div>
              )
            )}
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: "1px solid #444",
            paddingTop: "25px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "#999",
              marginBottom: "5px",
            }}
          >
            © 2025 MYSHOP - Big Mega Store. All rights reserved.
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "#777",
            }}
          >
            Designed with ❤️ by MYSHOP Team
          </p>
        </div>
      </div>
    </footer>
  );
}
