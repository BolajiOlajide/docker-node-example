FROM node:12

WORKDIR /home/node/app

COPY app .

RUN npm install yarn

RUN yarn

EXPOSE 9999

CMD yarn app