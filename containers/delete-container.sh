#!/bin/sh

docker rm -f posty

DATA_DIR=$(pwd)/data

echo "removing $DATA_DIR"

rm -rf $DATA_DIR