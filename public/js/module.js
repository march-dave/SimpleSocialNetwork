'use strict';

var app = angular.module('mybookApp', ['ui.router']);

// var resolveObj = {
//   profile: function(Auth, $q, $state) {
//     return Auth.getProfile()
//     .catch(() => {
//       $state.go('home');
//       return $q.reject();
//     });
//   }
// }

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/html/authForm.html',
      controller: 'authFormCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/html/authForm.html',
      controller: 'authFormCtrl'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: '/html/profile.html',
      controller: 'profileCtrl'
      // ,resolve:
    })
    $urlRouterProvider.otherwise('/');
});

// app.filter('titlecase', function() {
//   return function(input) {
//     return input[0].toUppserCase() + input.slice(1).toLowerCase();
//   };
// });
