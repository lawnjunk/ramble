'use strict';

require('./_create-post.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.component('rambleCreatePost', {
  template: require('./create-post.html'),
  controller: 'CreatePostController',
  controllerAs: 'createPostCtrl'
});

ramble.controller('CreatePostController', ['$q', '$log', '$location', 'rambleService', CreatePostController]);
//removed 'authService' from function params and controller injecting
function CreatePostController($q, $log, $location, rambleService) {

  this.createEntry = function() {
    rambleService.createEntry(this.post)
    .then(() => {
      $location.path('/dashboard');
    })
    .catch(err => $log.err('no entry created', err));
  };

  this.returnDash = function(){
    $location.path('/dashboard');
  };
}
