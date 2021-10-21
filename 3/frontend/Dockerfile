###############################################################################
# Stage 1, Instala dependencias y construye la aplicación estática.
###############################################################################

FROM node:14.18.1-alpine as build-stage

ARG REACT_APP_BACKEND=http://localhost:8000

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY ./public ./public
COPY ./src ./src

RUN rm -f .env.local
RUN echo "REACT_APP_BACKEND=$REACT_APP_BACKEND" > .env.local

RUN yarn build


###############################################################################
# Stage 2, Se copia solo la aplicación compilada para servir en NGINX
###############################################################################
FROM nginx:1.21.3-alpine

COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

