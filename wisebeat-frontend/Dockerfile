# Stage 1
FROM node:8 as react-build
LABEL maintainer="Ívar & Vilhjálmur"
WORKDIR /app
RUN yarn
COPY . .
RUN yarn build

# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]