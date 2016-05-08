'use strict';

var app = angular.module('mybookApp');


app.controller('homeCtrl', function($scope, $q, $http) {
  // $scope.clients = clientDex;
});

app.controller('authFormCtrl', function($scope, $state, MybookService) {
  console.log('authFormCtrl!');

  $scope.currentState = $state.current.name;

  $scope.submitForm = () => {
    if($scope.currentState === 'register') {

      // register user
      if($scope.user.password !== $scope.user.password2) {

        $scope.user.password = '';
        $scope.user.password2 = '';

        alert('Passwords must match.')
      } else {
        MybookService.register($scope.user)
          .then(res => {
            return MybookService.login($scope.user);
          })
          .then(res => {
            $state.go('home');
          })
          .catch(res => {
            alert(res.data.error);
          });
      }
    } else {
      MybookService.login($scope.user)
        .then(res => {
          $state.go('home');
        })
        .catch(res => {
          alert(res.data.error);
        })
    }
  };

});

app.controller('loginCtrl', function($scope, $state, $http, MybookService, UserService) {

  $scope.userLogin = () => {
    $scope.loggedIn = false;

    console.log("scope.login in userlogin function", $scope.login);
    MybookService.login($scope.login)
    .then( ( res )  => {

      // $http.defaults.headers.common['Authorization'] = 'Bearer' + res.data;
      // console.log('$http.defaults.headers.common[Authorization] :', $http.defaults.headers.common['Authorization']);
      // console.log('res.data:', res.data);

      UserService.set(res.data);
      $scope.loggedIn = true;

      $state.go("profile", {"user": res.data});

    })
    .catch(err => {
      console.log('err', err.data);
    });


    // MybookService.login($scope.login);
  }

});

app.controller('logoutCtrl', function($scope, $state, $q, $http) {

});

app.controller('registerCtrl', function($scope, $state, $q, $http, MybookService) {

  $scope.userRegister = () => {
    MybookService.register($scope.register);
  }

});


app.controller('profileCtrl', function($scope, $state, $q, $http) {

    var t = $state.params.user;
    console.log('t: ', t);

  // MybookService.profile

});
