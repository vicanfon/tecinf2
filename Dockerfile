FROM node:alpine
ENV ASSET_NAME="tecinf2"
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 4201
LABEL vf-OS=true
LABEL vf-OS.icon=img/2.png
LABEL vf-OS.urlprefixReplace=true
LABEL vf-OS.name=tecinf2
LABEL vf-OS.version.major=1.0
LABEL vf-OS.market.price=0
LABEL vf-OS.version.version=1.0
CMD ["npm", "start"]
