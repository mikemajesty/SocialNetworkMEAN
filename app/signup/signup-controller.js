(function() {
  angular.module('Social')
    .controller('SignUpController',['$scope','$state','$http',
      function($scope,$state,$http) {
        $scope.createUser( () => {
          
          $http.post('api/user/signup', $scope.user)
            .success( (response) => {
                alert('wtf', response);
            }).error( (error) => {
                console.log(error);
            });
        });
    }]);
}());
