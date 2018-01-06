from node:alpine

workdir /speller

copy package.json .

run npm install

copy . .

EXPOSE 3000

entrypoint ["npm", "start"]
