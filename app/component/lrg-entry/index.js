'use strict';

require('./_lrg-entry.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.component('rambleLrgEntry', {
  template: require('./lrg-entry.html'),
  controller: 'LrgEntryController',
  controllerAs: 'LrgEntryCtrl'
});

ramble.controller('LrgEntryController', ['$q', '$location', '$routeParams', 'rambleService',  LrgEntryController]);

function LrgEntryController($q, $location, $routeParams, rambleService) {
  this.entry = null;
  this.params = $routeParams;

  this.getEntry = function() {
    rambleService.getEntry(this.params.id)
    .then(entry => {
      this.entry = entry;
    })
    .catch(err);
  };
}
