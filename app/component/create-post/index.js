'use strict';

require('./_create-post.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.component('rambleCreatePost', {
  template: require('./create-post.html'),
  controller: 'NewPostController',
  controllerAs: 'newPostCtrl'
});

ramble.controller('NewPostController', ['$q', '$log', '$location', 'authService', 'rambleService', NewPostController]);

function NewPostController($q, $log, $location, authService, rambleService) {

  this.createEntry = function() {
    rambleService.createEntry(this.post)
    .then(entry)
    .catch(err);
  };
}
