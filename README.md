# Elastic Searc setup (Dev mode)

There several options described in the official ES documentation, if you have Docker running in your env, you can do the following:

## Install ES

docker pull docker.elastic.co/elasticsearch/elasticsearch:5.6.3

## Run ES

docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:5.6.3

# Client
```bash
cd client
```
## Install
```bash
npm install
```
## Configure

Modify app-config if needed.

## Build
```bash
npm run install
```
## Run
```bash
npm start
```