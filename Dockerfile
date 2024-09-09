# Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# Rodar migrações e depois iniciar a aplicação
CMD ["sh", "-c", "npx prisma generate && npx prisma migrate deploy && npm start"]