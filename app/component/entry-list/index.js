'use strict';

require('./_entry-list.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.component('rambleEntryList', {
  template: require('./entry-list.html'),
  controller: 'EntryListController',
  controllerAs: 'entryListCtrl'
});

ramble.controller('EntryListController', ['$log', '$location', 'rambleService', EntryListController]);

function EntryListController($log, $location, rambleService){
  this.list = [];
  this.getEntries = function() {
    rambleService.fetchEntries()
    .then(entries => {
      this.list = entries;
    });
  };
  this.limit = 3;
  this.loadMore = function(){
    var increamented = this.limit + 3;
    this.limit = increamented > this.list.length ? this.list.length : increamented;
  };
}
