'use strict';

module.exports = app;

const utils = require('@nhants/utils')

const sum = utils()

function app() {
  const res = sum(3,2)
  console.log('sum', res)
  return res
}

app()