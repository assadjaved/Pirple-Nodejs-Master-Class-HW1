# Pirple Node.js Master Class Assignment 1


## The Assignment:

Please create a simple "Hello World" API. Meaning:

1. It should be a RESTful JSON API that listens on a port of your choice. 
2. When someone posts anything to the route /hello, you should return a welcome message, in JSON format. This message can be anything you want.


## Documentation:

### Start Server:

```
node app.js
```

### Environments:
  * Staging
  * Production

```
ENV_NAME=staging node app.js
```
`staging` environment runs http server on port `3000` and https server on port `3001`

```
ENV_NAME=production node app.js
```
`production` environment runs http server on port `6000` and https server on port `6001`

*_Environment defaults to_* `staging` *_if not provided_*


### REST API Routes:

`GET: /hello`
  * Expected Response:
  * ```
    {
      "message": "welcome to the master class party son !"
    }
    ```

Postman collection also included for testing purpose
