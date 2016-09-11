'use strict';

require('./_signin.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.controller('SigninController', ['$location', 'authService', SigninController]);

function SigninController($location, authService) {

  this.getToken = function(){
    authService.getToken()
    .then( () => $location.path('/dashboard'));
  };

  this.signin = function() {
    authService.signin(this.user)
    .then( token => {
      $location.path('/dashboard');
    })
    .catch(err => {
    });
  };
}
