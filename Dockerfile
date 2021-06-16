FROM node

WORKDIR /src

COPY ./build /src/build

RUN ["npm", "i", "-g", "serve"]

EXPOSE 8080

ENTRYPOINT [ "serve", "-s", "build", "-l", "8080" ]