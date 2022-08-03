FROM node:16.16.0-buster

WORKDIR /bigtop-site

EXPOSE 3000 3000
#COPY ./docs /app/docs
COPY ./bigtop-site /bigtop-site/

RUN npm install

CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]