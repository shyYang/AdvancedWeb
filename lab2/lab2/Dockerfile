FROM node:10.20.1

RUN cd server
RUN npm install
RUN npm build

EXPOSE 3000

CMD ["npm", "start"]