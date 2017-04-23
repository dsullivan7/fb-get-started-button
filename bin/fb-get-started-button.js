#!/usr/bin/env node

const argv = require('yargs').argv
const lib = require('../lib/index.js')

const payload = argv.payload || 'GET_STARTED'

function usage() {
  console.log(`
Usage:

  fb-get-started-button add|remove <PAGE ACCESS TOKEN> [--payload <CUSTOM PAYLOAD>]

This will add a "Get Started" button with the given payload to the page with the given access token
If no payload is specified, the payload will be "GET_STARTED"
`)
}

if (argv._.length === 2) {
  if (argv._[0] === 'add') {
    console.log(`Adding "Get Started" button with the payload "${payload}"`)
    lib.addGetStarted(argv._[1], payload)
  } else if (argv._[0] === 'remove') {
    console.log('Removing "Get Started" button')
    lib.removeGetStarted(argv._[1])
  } else {
    usage()
  }
} else {
  usage()
}
