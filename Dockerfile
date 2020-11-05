FROM node:14
RUN mkdir /slides
COPY nodeconf.json .
RUN npm install -g cli-slides
CMD cli-slides ./nodeconf.json