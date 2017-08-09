#!/usr/bin/env node

'use strict';

/*
 Example of using raml2html as a script.
 Run this as `node doc.js`
 */

const raml2html = require('raml2html');
const htmlTheme = raml2html.getConfigForTheme();
const mdTheme = raml2html.getConfigForTheme('raml2html-markdown-theme');
const ramlFile = './tutorial-jukebox-api/jukebox-api.raml';
const docHtmlFile = './api-doc.html';

var fs = require('fs');
/**
 * Using the default templates.
 *
 * raml2html.render() needs a config object with at least a `processRamlObj` property.
 * Instead of creating this config object ourselves, we can just ask for raml2html.getDefaultConfig():
 */

raml2html.render(ramlFile, htmlTheme).then(
  result => {
    console.log('Generating html documentation...');

    fs.writeFile(docHtmlFile, result, function(err) {
        if(err) {
          return console.log(err);
        }
        // Opening documention
        console.log("Html doc generated!");

        // Open the document
        console.log("Opening in browser...");
        const opn = require('opn');
        opn(docHtmlFile);
    });
  },
  error => {
    console.log('error! ', error);
  }
);
