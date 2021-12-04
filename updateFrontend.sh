#!/bin/bash
cd ../to-do-project-frontend/
npm run build
cd ../todo-project
rsync -avr ../to-do-project-frontend/build ../todo-project/