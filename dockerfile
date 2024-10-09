# Use the official Node.js image.
FROM node:latest
# Create a directory to hold the app code inside the image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source code inside the Docker image
COPY . .

# Expose the app port
EXPOSE 3000

# Command to run the app
CMD ["node", "app.js"]
