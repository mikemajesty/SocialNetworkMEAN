(function() {
    angular.module('Social').controller('NavigationController',['$scope','$http','$state',
     function ($scope, $http, $state) {

       $scope.loggedin = localStorage['user-data'] ? true : false;

       $scope.loginUserIn = () => {
          $http.post('api/user/login', $scope.login)
            .success( (res) => {
              localStorage.setItem('user-data', JSON.stringify(res));
              $scope.loggedin = true;
            })
            .error( (err) => {console.log(err);} );
       };
    }]);
}());
