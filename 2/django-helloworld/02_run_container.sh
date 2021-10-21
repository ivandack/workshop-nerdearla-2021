docker container run \
  --rm \
  -d \
  -v "$(pwd):/usr/src/app" \
  -p 8000:8000 \
  nerdearla_2_django:latest
