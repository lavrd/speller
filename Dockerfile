from node:alpine

add . /speller
workdir /speller

expose 3000

entrypoint ["npm", "start"]
