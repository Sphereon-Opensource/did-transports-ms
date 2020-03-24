FROM node:lts
WORKDIR /opt/did-transports-ms
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]