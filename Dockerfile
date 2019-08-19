FROM node:10

LABEL version="1.0"
LABEL description="Back"
LABEL maintainer="William Cadenas mail:williamcadenas21@gmail.com"

ARG PORT=3000
ENV PORT $PORT

WORKDIR /nodeApp
COPY . ./

RUN npm install 

EXPOSE 3000
CMD npm start