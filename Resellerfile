FROM node:latest
WORKDIR /usr/src/app
COPY ./src/. /usr/src/app
RUN npm install
EXPOSE 8088
CMD  ["node", "index.js"]