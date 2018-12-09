# XtendSearch

Extensible Robust Enterprise Search Server

## Pre-requisites

1. You need to install NodeJS to build and run this project.
2. Docker is used for packaging the application into a distributable image. (optional) 
3. ElasticSearch 6.x

## Getting Started

1. Run `npm install` to install all dependent libraries.
2. Copy `.env.dist` to `.env` and make necessary changes such as service URLs

### Running the project

Make sure you have Elastic Search running on port 9200 & 9300 on `localhost`.

The easiest way is to get docker and launch elasticsearch with:

```
docker run -p 9200:9200 -p 9300:9300 elasticsearch:6.4.2
```

From the command line, run:
```
npm run start:dev
```

The server will be available at http://localhost:1729/

