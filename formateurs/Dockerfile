# Base image
FROM node:16

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

RUN npm run build

EXPOSE ${APP_PORT}

CMD [ "npm", "run", "start:prod" ]
