(function() {
    angular.module('Social').controller('NavigationController',['$scope','$http','$state',
     function ($scope, $http, $state) {

       $scope.loginUserIn = () => {

          $http.post('api/user/login', $scope.login)
            .success( (data) => {

            })
            .error( (err) => console.log(err) );
       };
    }]);
}());
