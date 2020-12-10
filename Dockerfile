FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install -g node-sass
RUN npm install -g npm@7.1.1
RUN npm install -g chokidar@3
RUN npm install -g @hapi/bourne
RUN npm install @sideway/address
RUN npm install -g @rollup/plugin-babel
RUN npm install joi
RUN npm install -g core-js@3
RUN npm install -g react-scripts
RUN npm install
COPY ./ ./
RUN npm run build
 
FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html