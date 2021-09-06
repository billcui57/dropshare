# Dockerfile for client

# Stage 1: Build react client
FROM node:14.17.5-alpine

# Working directory be app
WORKDIR /usr/app

COPY package*.json ./

# Install dependencies
RUN yarn

# copy local files to app folder
COPY . .

EXPOSE 80

