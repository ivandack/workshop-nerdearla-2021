docker container run \
    -v $(pwd)/nginx-html:/usr/share/nginx/html:ro \
    -p 80:80 \
    --name custom-alpine \
    --rm \
    nginx:1.21.3-alpine
