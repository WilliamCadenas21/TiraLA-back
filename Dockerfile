FROM node:10

LABEL version="1.0"
LABEL description="Back"
LABEL maintainer="William Cadenas mail:williamcadenas21@gmail.com"

WORKDIR /nodeApp
COPY . ./

RUN npm install 

EXPOSE 4000
CMD npm run start
