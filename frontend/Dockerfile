# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:20-alpine as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to the working directory
COPY ./plant-care/ .

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:1.25-alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/plant-care/browser /usr/share/nginx/html
