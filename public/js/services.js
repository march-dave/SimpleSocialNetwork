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
     return $http.post(`/api/users/register/`, user);
  };
  this.login = user => {
   return $http.post('/api/users/login', user)
    .then(res => {
      return this.getProfile();
    });
  };
  this.logout = () => {
    return $http.delete('/api/users/logout')
    .then(res => {
        this.currentUser = null;
        return $q.resolve();
    });
  };
  this.getProfile = () => {
   return $http.get('/api/users/profile')
    .then(res => {
        this.currentUser = res.data;
        return $q.resolve(res.data);
    })
    .catch(res => {
        this.currentUser = null;
        return $q.reject(res.data);
    });
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
