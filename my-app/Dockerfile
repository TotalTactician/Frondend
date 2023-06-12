# Use the Windows version of Node.js as the base image
FROM mcr.microsoft.com/windows/servercore

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.19-windowsservercore
COPY --from=build /app/public /usr/share/nginx/html
