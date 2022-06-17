#!/bin/sh

DATA_DIR=$(pwd)/data

echo $DATA_DIR

if [ ! -d $DATA_DIR ]; then
  mkdir -p $DATA_DIR;
fi

docker run -d \
    -p 27017:27017 \
    --name mongy \
    -v $DATA_DIR:/data/db \
    -e MONGODB_INITDB_ROOT_USERNAME=simpleuser \
    -e MONGODB_INITDB_ROOT_PASSWORD=simplepassword \
    -e MONGO_INITDB_DATABASE=clydesclarinets \
    mongo:latest

