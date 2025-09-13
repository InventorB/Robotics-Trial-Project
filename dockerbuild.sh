# build into local docker
docker buildx build \
  --platform=linux/amd64 \
  -t robot-trial \
  --load \
  .

# now export in the right format
docker save robot-trial -o robot-trial.tar