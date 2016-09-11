'use strict';

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.controller('EntryController', ['$location', 'authService', EntryController]);
function EntryController($location, authService) {
  this.checkToken = authService.checkToken();
}
