FROM node

WORKDIR /build
COPY ./build /build
RUN ["npm", "i", "-g", "serve"]
EXPOSE 8080

CMD [ "serve", "-l", "8080" ]