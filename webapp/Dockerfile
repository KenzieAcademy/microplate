FROM node:7.10

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# add environment variables
ARG REACT_APP_USERS_SERVICE_URL
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
ENV REACT_APP_USERS_SERVICE_URL $REACT_APP_USERS_SERVICE_URL

RUN npm install create-react-app@1.3.0 --global

# install and cache app dependencies
# ADD package.json /usr/src/app/package.json
# RUN npm install --silent
# RUN npm install pushstate-server -g --silent

# add app
ADD . /usr/src/app

# build react app
# RUN npm run build

# start app
# CMD ["pushstate-server", "build"]
# CMD ["create-react-app","."]
# CMD ["/bin/bash","startup.sh"]
CMD ["npm", "start"]
