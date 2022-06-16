#!/bin/sh

docker rm -f mongy

DATA_DIR=$(pwd)/data

echo "removing $DATA_DIR"

rm -rf $DATA_DIR