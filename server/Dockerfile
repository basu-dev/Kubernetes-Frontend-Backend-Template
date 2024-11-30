FROM node:20-alpine AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm i -g pnpm && pnpm install

COPY . .

EXPOSE 3000

CMD ["node","index.js"]