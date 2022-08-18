# Base image
FROM node:16 AS build

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

# # Creates a "dist" folder with the production build
# RUN npm run build

# FROM node:16 AS run

# COPY --from=build /dist /dist 

# # Start the server using the production build
# CMD [ "node", "dist/main.js" ]
