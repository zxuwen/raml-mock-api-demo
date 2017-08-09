Demo:

- Uses [osprey-mock-service](https://github.com/mulesoft-labs/osprey-mock-service) to generate mock-server from raml.
- Uses [raml2html](https://github.com/raml2html/raml2html) to generate html & markdown docs from raml.

- Demo uses Raml example [tutorial-jukebox-api](https://github.com/raml-org/raml-examples/tree/master/others/tutorial-jukebox-api)

### Setup Instructions

```
npm install
```

### Generate Mock API with Osprey Mock Service
To run the mock server (see super simple index.js):

```
npm run demo
```

Your mock server will be available at http://localhost:3000/

Read the API docs & use POSTMAN or similar to try some API requests on localhost.

### Generate API Docs with raml2html
To generate html docs & serve in browser (see `doc.js` for sample code):

```
npm run docs
```

To generate markdown docs:

```
npm run docs:md
```

To generate html docs:

```
npm run docs:html
```
