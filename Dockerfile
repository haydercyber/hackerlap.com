# build stage
FROM node:lts-alpine3.16 AS build-stage
WORKDIR /build-area
COPY package.json ./
RUN yarn install
COPY . .
# RUN npm i -D esbuild
RUN yarn run build

# production stage
FROM nginx:latest AS production-stage
WORKDIR /var/www/html/app
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /build-area/build /var/www/html/app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]