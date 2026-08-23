FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod -R g=u /app

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]