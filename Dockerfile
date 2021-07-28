FROM node

WORKDIR /build
COPY ./build /build
RUN ["npm", "i", "-g", "serve"]
EXPOSE 8080

ENTRYPOINT [ "serve", "-s", "build", "-l", "8080" ]