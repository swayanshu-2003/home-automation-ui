# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the source code to the working directory
COPY . .

# Build the application
RUN npm run build

# Stage 2: Create a lightweight image for serving the app
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/node_modules /app/node_modules
COPY ./public ./public
COPY ./package*.json ./

# Check environment variables
RUN printenv
# Expose port 3000
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
