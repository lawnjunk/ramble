'use strict';

require('./_nav.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.component('rambleNavBar', {
  template: require('./nav.html'),
  controller: 'NavController',
  controllerAs: 'navCtrl'
});

ramble.controller('NavController',['$log','$location','$window','authService', NavController]);

function NavController($log, $location, $window, authService) {
  $log.debug('init NaveController');

  this.logout = function(){
    authService.logout()
    .then(()=> $location.path('/signin'));
  };

  this.newPost = function(){
    $location.path('/new/post');
  };

  this.authorized = $window.localStorage.getItem('token') ? true : false;
}
