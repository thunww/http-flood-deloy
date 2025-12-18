const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/auth.route");
const productRoute = require("./routes/product.route");
const promBundle = require("express-prom-bundle");

const app = express();

/* ===============================
   TRUST PROXY (Cloudflare + ALB)
================================ */
app.set("trust proxy", 1);

/* ===============================
   CORS CONFIG (FIXED)
================================ */
const allowedOrigins = [
  "https://noithatstore.site",
  "https://www.noithatstore.site",
  "https://api.noithatstore.site",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow curl, postman, health check
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin) || origin.endsWith(".pages.dev")) {
        return callback(null, true);
      }

      console.error("❌ CORS BLOCKED ORIGIN:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: false, // ❗ FE KHÔNG DÙNG COOKIE
  })
);

/* ===============================
   BODY PARSER
================================ */
app.use(express.json());

/* ===============================
   HTTPS FIX (Cloudflare)
================================ */
app.use((req, res, next) => {
  if (req.headers["x-forwarded-proto"] === "https") {
    req.secure = true;
  }
  next();
});

/* ===============================
   INSTANCE LOG
================================ */
const INSTANCE_ID = process.env.INSTANCE_ID || "unknown-backend";

app.use((req, res, next) => {
  console.log(
    `[${INSTANCE_ID}] ${req.method} ${req.originalUrl} | Origin: ${req.headers.origin}`
  );
  next();
});

/* ===============================
   PROMETHEUS METRICS
================================ */
const metricsMiddleware = promBundle({
  includeMethod: true,
  includePath: true,
  metricsPath: "/metrics",
  promClient: { collectDefaultMetrics: {} },
});

app.use(metricsMiddleware);

/* ===============================
   ROUTES
================================ */
app.use("/api", authRoute);
app.use("/api/products", productRoute);

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    instance: INSTANCE_ID,
  });
});

/* ===============================
   START SERVER
================================ */
app.listen(8080, () =>
  console.log(`[${INSTANCE_ID}] Backend running on port 8080`)
);
