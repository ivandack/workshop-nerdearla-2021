# syntax=docker/dockerfile:1

FROM node:14.18.1-alpine

ENV PORT=8000
ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE ${PORT}

CMD ["node", "index.js"]
