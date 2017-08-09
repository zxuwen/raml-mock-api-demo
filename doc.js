#!/usr/bin/env node

'use strict';

/*
 Example of using raml2html as a script.
 Run this as `node doc.js`
 DOES NOT WORK YET
 */

const raml2html = require('raml2html');
const htmlTheme = raml2html.getConfigForTheme();
const mdTheme = raml2html.getConfigForTheme('raml2html-markdown-theme');
const ramlFile = path.join(__dirname, 'helloworld.raml');

/**
 * Using the default templates.
 *
 * raml2html.render() needs a config object with at least a `processRamlObj` property.
 * Instead of creating this config object ourselves, we can just ask for raml2html.getDefaultConfig():
 */
const config1 = raml2html.getConfigForTheme('raml2html-default-theme');

raml2html.render(ramlFile, config1).then(
  result => {
    console.log('1: ', result.length);
  },
  error => {
    console.log('error! ', error);
  }
);

/**
 * If you want to only customize the Nunjucks configuration, just add a setupNunjucks function to the default config.
 */
const config6 = raml2html.getConfigForTheme('raml2html-default-theme');
config6.setupNunjucks = function(env) {
  // Do stuff with env here
  env.bla = 'bla';
};

raml2html.render(ramlFile, config6).then(
  result => {
    console.log('6: ', result.length);
  },
  error => {
    console.log('error! ', error);
  }
);
