FROM node:20-slim

# ARG PACKAGE_NAME
# ARG PORT

WORKDIR /app
COPY . .

RUN npm install

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]