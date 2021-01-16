FROM node:latest
MAINTAINER Daniel Szarek
RUN mkdir /frontend

COPY . /frontend
WORKDIR /frontend

RUN npm install
EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]