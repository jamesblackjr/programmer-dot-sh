FROM node:11.10.1-alpine AS builder

# OS packages for compilation
RUN apk add --no-cache python2 make g++

# install Yarn packages
WORKDIR /build
COPY package.json yarn.lock ./
RUN yarn --pure-lockfile

# add source
ADD . .

# build
RUN yarn build

########################

FROM node:11.10.1-alpine
WORKDIR /app

# copy source + compiled `node_modules`
COPY --from=builder /build .

# set the production port to run
EXPOSE 8080
ENV PORT 8080

# by default, run in production mode
CMD yarn production
