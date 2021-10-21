docker-compose \
  --project-directory . \
  -f ../3/docker-compose.yml \
  -f ../3/docker-compose.override.yml \
  -f ./docker-compose_cypress.yml \
  up --exit-code-from cypress
