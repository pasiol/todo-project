#!/bin/sh
docker stop  todo-project-test
docker build -t pasiol/todo-project .
docker run --name todo-project-test --rm -d -p 3000:3000 -e APP_PORT=3000 -e API_URL=172.17.0.1:8888 pasiol/todo-project