import { ShoppingCart, Heart, Star } from "lucide-react";

export default function ProductCard({ title, price, image, category }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "15px",
        border: "1px solid #e5e7eb",
        transition: "all 0.3s ease",
        cursor: "pointer",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
      }}
    >
      {/* Badge Category */}
      <div
        style={{
          position: "absolute",
          top: "15px",
          left: "15px",
          background: "#ef4444",
          color: "white",
          padding: "4px 12px",
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: "600",
          zIndex: 1,
        }}
      >
        {category}
      </div>

      {/* Heart Icon */}
      <div
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          background: "white",
          borderRadius: "50%",
          width: "35px",
          height: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 1,
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
        onClick={(e) => {
          e.stopPropagation();
          alert("Added to wishlist!");
        }}
      >
        <Heart size={18} color="#ef4444" />
      </div>

      {/* Product Image */}
      <div
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "8px",
          overflow: "hidden",
          background: "#f3f4f6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.innerHTML = `<div style="color: #9ca3af; font-size: 14px;">Image</div>`;
          }}
        />
      </div>

      {/* Product Info */}
      <div style={{ marginTop: "15px" }}>
        <h4
          style={{
            margin: "0 0 8px 0",
            fontSize: "16px",
            fontWeight: "600",
            color: "#1f2937",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </h4>

        {/* Rating */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            marginBottom: "10px",
          }}
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
          ))}
          <span
            style={{ fontSize: "12px", color: "#6b7280", marginLeft: "5px" }}
          >
            (4.5)
          </span>
        </div>

        {/* Price and Cart Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "12px",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              color: "#ef4444",
              fontSize: "20px",
              margin: 0,
            }}
          >
            ${price}
          </p>

          <button
            style={{
              background: "#2d2d2d",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "8px 16px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              fontWeight: "600",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1a1a1a")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#2d2d2d")}
            onClick={(e) => {
              e.stopPropagation();
              alert("Added to cart!");
            }}
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
