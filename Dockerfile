FROM node:alpine as builder
WORKDIR '/app'
COPY ./ ./
RUN npm i && \
    npm run build && \
    ls && \
    ls build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
USER 1001