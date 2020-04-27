FROM node:10.20.1

RUN mkdir -p /usr/local/nodejs

COPY /lab2/ /usr/local/nodejs

WORKDIR /usr/local/nodejs/lab2/server

RUN npm install
RUN npm build

EXPOSE 3000

CMD ["npm", "start"]