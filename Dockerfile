FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install -g node-sass
RUN npm install -g chokidar@3
RUN npm install -g @hapi/bourne
RUN npm install -g @sideway/address
RUN npm install -g @rollup/plugin-babel
RUN npm install -g joi
RUN npm install -g core-js@3
RUN npm install -g react-scripts
RUN npm install -g
RUN yarn add react -g
COPY ./ ./
RUN npm run build
 
FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html