FROM node:20
WORKDIR /home/user/Documentos/IUDigital/Tech Web/Contenerizacion

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]