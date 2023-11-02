# README

## Introduction

This project has an aplication for validation MT940 format .csv files.
The project has a frontend and backend. In the ./src folder is the frontend. In the ./server is the backend.

## Instructions installation and running the app

### Frontend

installing frontend.

```shell
npm i
```

running the frontend

```shell
npm run dev
```

### Backend

installing the backend.

```shell
cd server
npm i
```

running the backend

```shell
npm run server
```

## Instruction for mock server

In the .env file you can set VITE_USE_MSW="enabled".
This will intercept request to the backend and return a mocked value.

## Linting and testing

Linting with eslint

```shell
npm run lint
```

running prettier format

```shell
npm run format
```

testing the frontend

```shell
npm run test
```
