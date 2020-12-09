FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install -g react-scripts
RUN npm install -g node-sass
RUN npm install -g npm@7.1.1
RUN npm install
COPY ./ ./
RUN npm run build
 
FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html