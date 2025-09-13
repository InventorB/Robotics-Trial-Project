docker buildx build \
  --platform=linux/amd64 \
  -t robot-trial \
  --output type=tar,dest=robot-trial.tar \
  .