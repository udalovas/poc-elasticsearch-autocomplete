# Elastic Search setup

There several options described in the official ES documentation, if you have Docker running in your env, you might want to do something like that:

## Install ES
```bash
docker pull docker.elastic.co/elasticsearch/elasticsearch:5.6.3
```
## Run ES
```bash
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:5.6.3
```
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
npm run build
```
## Run
```bash
npm start
```