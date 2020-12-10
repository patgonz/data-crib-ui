FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install -g
RUN yarn add react -g
COPY ./ ./
RUN npm run build
 
FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html