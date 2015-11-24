#!/usr/bin/env node
'use strict'

const meow = require('meow')
const opn = require('opn')
const path = require('path')
const pkg = require(path.join(__dirname, 'node_modules', 'opn', 'package.json'))

var cli = meow({
  pkg: pkg,
  help: [
    'Usage:',
    '  $ opn <file|directory|url> [--wait] [-- <app> [args]]',
    '',
    'Options:',
    '  w, wait     Wait for the app to exit',
    '',
    'Example',
    '  $ opn sindresorhus.com',
    '  $ opn http://sindresorhus.com -- firefox',
    '  $ opn http://sindresorhus.com -- \'google chrome\' --incognito',
    '  $ opn unicorn.png',
    '  $ opn ../..',
    '  $ opn'
  ]
},
{
  boolean: 'w',
  default: {
    w: false
  },
  alias: {
    h: 'help',
    v: 'version',
    w: 'wait'
  }
})

if (!cli.input.length) cli.input = ['.']
else if (/(com|net|org|fr|io)($|\/)/.test(cli.input[0]) && ! /^http/.test(cli.input[0])) cli.input[0] = 'http://' + cli.input[0]

cli.flags.app = cli.input.slice(1)

opn(cli.input[0], cli.flags, function (err) {
  if (err) {
    console.error(err.message)
    process.exit(1)
  }
})
