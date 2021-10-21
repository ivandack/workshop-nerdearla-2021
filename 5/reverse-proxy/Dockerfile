FROM nginx:1.21.3-alpine

ARG BACKEND=http://backend:8000

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN sed -i 's#%%%BACKEND%%%#'"${BACKEND}"'#g'   /etc/nginx/conf.d/default.conf
