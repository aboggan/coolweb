FROM node:8.11-alpine as build

WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY package*.json /usr/src/app/
RUN npm install

COPY . /usr/src/app
RUN npm run build


FROM node

WORKDIR /build

COPY --from=build /usr/src/app/build /build

ENV PORT 5000
EXPOSE $PORT
CMD [ "npm", "start" ]
