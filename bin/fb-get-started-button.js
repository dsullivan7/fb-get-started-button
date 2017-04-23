#! /usr/bin/env node

var argv = require('yargs').argv;
var lib = require('../lib/index.js')

if (argv.add && argv._.length === 1){
	console.log(argv._[0])
}
else if (argv.remove && argv._.length === 1){
	console.log(argv._[0])
}
else {
	console.log(`
Usage:

	fb-get-started-button add|remove <PAGE ACCESS TOKEN>

This will add a "Get Started" button with a "GET_STARTED" payload to the page with the given access token
`)
}
