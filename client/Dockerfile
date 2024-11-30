FROM node:20-alpine AS build

WORKDIR /app
COPY package.json pnpm-lock.yaml ./

RUN npm i -g pnpm && pnpm install

COPY . .

RUN pnpm build

FROM nginx:alpine

COPY --from=build /app/dist/client/browser /usr/share/nginx/html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]