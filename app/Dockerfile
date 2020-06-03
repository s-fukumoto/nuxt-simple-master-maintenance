FROM node:lts-stretch

RUN apt-get update -y && \
    apt-get upgrade -y && \
    apt-get install -y apt-utils tzdata git && \
    npm install -g npm-check-updates @vue/cli

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo
ENV HOST 0.0.0.0

EXPOSE 3000
