FROM node:19-alpine

WORKDIR /app

#Copy all in /piranyahub/ to ...
COPY . . 

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

CMD ["npm","start"]