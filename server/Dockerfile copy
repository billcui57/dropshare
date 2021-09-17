#  Dockerfile for Node Express Backend api (development)

FROM node:14.17.5-alpine

ARG NODE_ENV=development

# Create App Directory
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN yarn

# Copy app source code
COPY . .

# Exports
EXPOSE 5000

