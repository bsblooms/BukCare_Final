# Use Node.js image
FROM node:18-alpine as builder

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install packages
RUN npm install

# Copy source code
COPY . .

# Build React app for production
RUN npm run build

# ------------------------------------
# Serve using NGINX
FROM nginx:alpine

# Copy built React app to NGINX HTML directory
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
