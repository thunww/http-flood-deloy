FROM node:20-alpine

# ===== ENV =====
ENV NODE_ENV=production

# ===== WORKDIR =====
WORKDIR /app

# ===== DEPENDENCIES =====
COPY package*.json ./
RUN npm ci 
# ===== SOURCE =====
COPY . .

# ===== PORT =====
EXPOSE 8080

# ===== START =====
CMD ["node", "src/server.js"]
