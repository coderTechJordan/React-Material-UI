# Base image with Node.js for building the application
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the React application
RUN npm run build

# Compile TypeScript files
RUN npm run compile

# Production image: Use the same Node.js version to run the compiled server
FROM node:18-slim

WORKDIR /app

# Ensure package.json is copied to use "type": "module" in the final image
COPY --from=builder /app/package.json ./package.json

# Copy built assets from the builder stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist/server.js ./

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "server.js"]
