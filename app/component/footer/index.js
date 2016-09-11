'use strict';

require('./_footer.scss');

const angular = require('angular');

angular.module('ramble')
.component('rambleFooter', {
  template: require('./footer.html')
});
