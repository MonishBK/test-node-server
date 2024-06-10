FROM node:18-alpine

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR = /usr/src/app

# install all  dependencies
COPY = package.json /app
RUN npm install

# Build app file
COPY . /app
EXPOSE  3000-3010
CMD ["npm", "start"]
