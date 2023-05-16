FROM cypress/base:16.13.0

COPY ./cypress ./cypress
COPY ./cypress.config.js ./cypress.config.js
COPY ./package-lock.json ./package-lock.json
COPY ./package.json ./package.json

RUN npm install
RUN npm run build:and:test