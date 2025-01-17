# Stage 1: Build the React app
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --loglevel verbose

# Copy the rest of the application code
COPY . .

ENV NODE_ENV=development

# Build the React app
RUN npm run build

# Stage 2: Serve the static files using a lightweight server
FROM nginx:alpine

# Copy the build output to the Nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Add a default configuration to handle routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5173

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]