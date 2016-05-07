(function() {
  angular.module('Social')
    .controller('SignUpController',['$scope', '$state', '$http',function($scope, $state, $http) {

      $scope.createUser = () => {
        $http.post('api/user/signup', $scope.User).success( (res) => {
          console.log('post res',res);
        }).error( (err) => {
          console.log('post err',err);
        });
      }
    }]);
}());
