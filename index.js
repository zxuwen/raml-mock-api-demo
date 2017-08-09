#!/usr/bin/env node

'use strict';

var mockService = require('osprey-mock-service')
var express = require('express')
var parser = require('raml-1-parser')
var path = require('path')
var osprey = require('osprey')

var app = express()

parser.loadRAML(path.join(__dirname, 'tutorial-jukebox-api/jukebox-api.raml'), { rejectOnErrors: true })
  .then(function (ramlApi) {
    var raml = ramlApi.expand(true).toJSON({ serializeMetadata: false })
    app.use(osprey.server(raml))
    app.use(mockService(raml))
    app.listen(3000)
  })
