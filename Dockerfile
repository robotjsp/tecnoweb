FROM node:20
WORKDIR /home/user/Documentos/IUDigital/Tech Web/1. Contenerizacion/

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]