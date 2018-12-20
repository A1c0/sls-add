FROM mhart/alpine-node

WORKDIR /usr/src/app

COPY package.json .

RUN yarn

COPY . .

CMD ["yarn", "start"]