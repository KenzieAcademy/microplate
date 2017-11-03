FROM node:latest

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# add environment variables
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

ADD . /usr/src/app
RUN npm install 
RUN echo $NODE_ENV

CMD ["node", "/usr/src/app/index.js"]
