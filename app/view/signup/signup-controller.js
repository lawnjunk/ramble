'use strict';

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.controller('SignupController', ['$location', 'authService', SignupController]);

function SignupController($location, authService) {

  this.signup = function() {
    var data = {
      username: this.user.user,
      password: this.user.password
    };
    authService.signup(data)
    .then( token => {
    })
    .catch(err => {
    });
  };
}
