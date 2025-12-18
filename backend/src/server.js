const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/auth.route");
const productRoute = require("./routes/product.route");
const promBundle = require("express-prom-bundle");

const app = express();

const allowedOrigins = [
  "https://noithatstore.site",
  "https://www.noithatstore.site",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin) || origin.endsWith(".pages.dev")) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.options("*", cors());

app.use(express.json());

const INSTANCE_ID = process.env.INSTANCE_ID || "unknown-backend";

app.use((req, res, next) => {
  console.log(`[${INSTANCE_ID}] ${req.method} ${req.url}`);
  next();
});

const metricsMiddleware = promBundle({
  includeMethod: true,
  includePath: true,
  metricsPath: "/metrics",
  promClient: { collectDefaultMetrics: {} },
});

app.use(metricsMiddleware);

app.use("/api", authRoute);
app.use("/api/products", productRoute);

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", instance: INSTANCE_ID });
});

app.listen(8080, () => console.log(`[${INSTANCE_ID}] BE running on 8080`));
