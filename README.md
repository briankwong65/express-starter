# backend-doctor-sql

## Introduction

It is a service to generate deep link with mobile apps.

## Getting with Start

Create .env file in the root directory. (You can find .env.sample for an example.)
Create config.json in the src directory. (You can find .config-sample.json for an example.)

```
docker build -t mcc/backend-deep-link .
```

```
docker run -p 3000:3000 -d mcc/backend-deep-link
```

## Health Check

```
https://localhost:3000/alive
```

## API Documentation

```
npm run apidoc
```

- Go to your App folder, then go to doc/api. You'll see a file named index.html.
- Open this file. You will see api documentation.
