FROM --platform=linux/arm64 node:19-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD ["npm","start"]