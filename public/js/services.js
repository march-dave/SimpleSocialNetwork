'use strict';

var app = angular.module('mybookApp');

app.service('MybookService', function($http, $q) {

  // this.getAll = () => {
  //   return $http({
  //     method: "GET",
  //     url: `/api/clients`,
  //     cache: false
  //   })
  //   .then(res => $q.resolve(res.data));
  // };
  this.register = function(user) {

    console.log('Register: user', user);

     return $http.post(`/api/users/register/`, user);
  };
  this.login = user => {
   return $http.post('/api/users/login', user);
  };
  this.logout = user => {
    return $http.delete('/api/users/logout', user);
  };
  this.profile = user => {
   return $http.get('/api/users/profile', user);
  };

});


app.service('UserService', function($http, $q) {


  console.log('UserService');

  this.set = function(user) {
    console.log('user: ', user);
    console.log('user.username: ', user.username);
    console.log('user type: ', typeof user);

    this.username = user.username;
  };


});
