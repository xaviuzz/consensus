FROM node:18.16.0-alpine3.16

WORKDIR /api

COPY package.json package-lock.json* /api/

RUN npm install

COPY . /api

RUN chown -R node:node /api

USER node

CMD ["npm", "run", "dev"]