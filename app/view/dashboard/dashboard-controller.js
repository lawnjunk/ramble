'use strict';

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.controller('DashboardController', ['$location', 'authService', DashboardController]);

function DashboardController($location, authService) {
  this.checkToken = authService.checkToken();
}
