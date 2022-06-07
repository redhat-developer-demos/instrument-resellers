#!/bin/sh
# docker run --name posty -p 5432:5432 -v postgres-volume:/var/lib/postgresql/data -e POSTGRES_PASSWORD=mypassword -d instruments

DATA_DIR=$(pwd)/data

echo $DATA_DIR

if [ ! -d $DATA_DIR ]; then
  mkdir -p $DATA_DIR;
fi

docker run --name posty -p 5432:5432 -v $DATA_DIR:/var/lib/postgresql/data -e POSTGRES_PASSWORD=mypassword -d postgres