'use strict';

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.controller('NewPostController', ['$location', 'authService', NewPostController]);
function NewPostController($location, authService) {
  this.checkToken = authService.checkToken();
}
