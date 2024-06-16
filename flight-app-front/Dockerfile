FROM node:14.21.3-bullseye as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN cp -r /app/dist/flight-app-front/* /mnt/out

#FROM nginx:alpine
#COPY --from=builder /app/dist/flight-app-front/ /usr/share/nginx/html
#EXPOSE 80