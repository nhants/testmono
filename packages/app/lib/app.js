'use strict';

module.exports = app;

const utils = require('@nhants/utils')

const sum = utils()

function app() {
  return sum(3,2)
}

app()