import {
  Laptop,
  Smartphone,
  Shirt,
  Footprints,
  Gamepad2,
  Sparkles,
  BookOpen,
  ChevronRight,
  Watch,
  Headphones,
  Camera,
  Home,
  Utensils,
  Dumbbell,
  Baby,
  Car,
  Palette,
  Music,
} from "lucide-react";

export default function Categories() {
  const cats = [
    { name: "Electronics", icon: Smartphone },
    { name: "Fashion", icon: Shirt },
    { name: "Shoes", icon: Footprints },
    { name: "Laptop", icon: Laptop },
    { name: "Gaming", icon: Gamepad2 },
    { name: "Beauty", icon: Sparkles },
    { name: "Book", icon: BookOpen },
    { name: "Watches", icon: Watch },
    { name: "Audio", icon: Headphones },
    { name: "Camera", icon: Camera },
    { name: "Furniture", icon: Home },
    { name: "Kitchen", icon: Utensils },
    { name: "Sports", icon: Dumbbell },
    { name: "Baby & Kids", icon: Baby },
    { name: "Automotive", icon: Car },
    { name: "Art & Craft", icon: Palette },
    { name: "Musical", icon: Music },
  ];

  return (
    <div
      style={{
        width: "260px",
        padding: "20px",
        background: "#fff",
        borderRight: "1px solid #e0e0e0",
        height: "100%",
      }}
    >
      <h3
        style={{
          marginBottom: "20px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333",
          borderBottom: "2px solid #e63946",
          paddingBottom: "10px",
        }}
      >
        Danh mục sản phẩm
      </h3>

      {cats.map((c) => {
        const Icon = c.icon;
        return (
          <div
            key={c.name}
            style={{
              padding: "12px 16px",
              fontSize: "15px",
              cursor: "pointer",
              borderRadius: "8px",
              marginBottom: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "all 0.2s",
              color: "#555",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f8f8f8";
              e.currentTarget.style.paddingLeft = "20px";
              e.currentTarget.style.color = "#e63946";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.paddingLeft = "16px";
              e.currentTarget.style.color = "#555";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Icon size={20} strokeWidth={1.5} />
              <span style={{ fontWeight: 500 }}>{c.name}</span>
            </div>
            <ChevronRight size={16} strokeWidth={2} />
          </div>
        );
      })}
    </div>
  );
}
