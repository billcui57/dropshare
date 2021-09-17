#  Dockerfile for Node Express Backend api (production)
#  Not for monolithic backend - netify frontend, ec2 backend

FROM node:14.17.5-alpine

ARG NODE_ENV=production

# Create App Directory
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN yarn

# Copy app source code
COPY . .



