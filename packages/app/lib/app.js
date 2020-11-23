'use strict';

module.exports = app;

const utils = require('@nhants/utils')
const ahihi = require('../tempdir/ahihi')
const sum = utils()

function app() {
  const res = sum(3,2)
  console.log('sum', res)
  ahihi()
  return res
}

app()