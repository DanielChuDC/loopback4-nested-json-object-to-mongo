export composeFile="docker/docker-compose.yml"
docker-compose -f  $composeFile build --no-cache
docker-compose -f  $composeFile up --force-recreate