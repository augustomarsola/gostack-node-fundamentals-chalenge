# 🚀 Chalenge 05: First Node.js project

![Chalenge 05: First Node.js project](img/bg-goStack.png "Chalenge 05: First Node.js project")

## Template
This [chalenge](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-fundamentos-nodejs) was completed using this [template](https://github.com/Rocketseat/gostack-template-fundamentos-node)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
Node.js v12.18.1
```

### Installing

A step by step series of examples that tell you how to get a development env running

```
yarn
```

And run

```
yarn dev:server
```

For test use
```
yarn test
```

Methods

```
POST: http://localhost:3333/transactions/
Body(JSON):
{
  "title": "Payment",
  "value": 3000,
  "type": "income"
}

GET: http://localhost:3333/transactions/
```


## Built With

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Typescript](https://www.typescriptlang.org/)
