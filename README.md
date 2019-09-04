# GetNinjas Frontend API

> GetNinjas Frontend API is a serverless service responsible to respond with form models

### Application Architecture
It uses the following stack of technologies:
> - Nodejs v8.10
> - AWS Lambda
> - API Gateway
> - Serverless Framework

| Environment | Endpoint  | Method |
| ------------- | ------------- | ------------- |
| local | http://localhost:3000/forms  | GET  |
| production | https://c4t8tobheh.execute-api.us-east-1.amazonaws.com/production/forms  | GET  |

### Installing Dependencies

Install serverless framework globally:
```
$ yarn global add serverless
```

Install project dependencies:
```
$ yarn install
```

### Running Application
Main commands:

Install serverless framework globally:
```
$ yarn global add serverless
```

Running project locally:
```
$ yarn run local
```

Running unit tests with jest:
```
$ yarn test
```

Running unit tests with watch flag:
```
$ yarn test -- --watch
```

Running coverage of unit tests:
```
$ yarn coverage
```

Running standard.js plugin:
```
$ yarn run standard
```
