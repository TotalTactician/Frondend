FROM node:18-windowsservercore AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.19-windowsservercore
COPY --from=build /app/public /usr/share/nginx/html
