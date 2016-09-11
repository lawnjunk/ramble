'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');
require('./view/signup/_signup.scss');
require('./view/signin/_signin.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');

// angular modules
angular.module('ramble', [ngRoute])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    redirectTo: '/signup'
  })
  .when('/signup', {
    template: require('./view/signup/signup.html'),
    controller: 'SignupController',
    controllerAs: 'signupCtrl'
  })
  .when('/signin', {
    template: require('./view/signin/signin.html'),
    controller: 'SigninController',
    controllerAs: 'signinCtrl'
  })
  .when('/new/post', {
    template: require('./view/new-post/new-post.html'),
    controller: 'NewPostController',
    controllerAs: 'newpostCtrl'
  })
  .when('/post/:id', {
    template: require('./view/entry/entry.html'),
    controller: 'EntryController',
    controllerAs: 'entryCtrl'
  })
  .when('/dashboard', {
    template: require('./view/dashboard/dashboard.html'),
    controller: 'DashboardController',
    controllerAs: 'dashboardCtrl'
  })
  .when('/new-post', {
    template: require('./view/new-post/new-post.html'),
    controller: 'NewPostController',
    controllerAs: 'newpostCtrl'
  })
  .otherwise({
    redirectTo: '/signin'
  });

}]);

// angular services
require('./service/auth-service');
require('./service/ramble-service');

// angular components
require('./component/nav');
require('./component/create-post');
require('./component/entry-list');
require('./component/entry-list-item');
require('./component/lrg-entry');
require('./component/footer');

// angular controllers
require('./view/signup/signup-controller.js');
require('./view/signin/signin-controller.js');
require('./view/dashboard/dashboard-controller.js');
require('./view/new-post/new-post-controller.js');
require('./view/entry/entry-controller');

//angular directives//
require('./directive/pw-match-component.js');
