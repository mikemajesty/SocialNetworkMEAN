(function () {
  angular.module('Social')
    .controller('MainController', ['$scope', '$http', function($scope, $http){

        if (localStorage['user-data'] !== undefined) {
          $scope.user = JSON.parse(localStorage['user-data']);
        }

        $scope.sendWaste = (event) => {
           if (event.code === 'Enter') {
             var request = {
               user: $scope.user.username || $scope.user.email,
               userId: $scope.user._id,
               userImage: $scope.user.image,
               content:  $scope.newWaste
             };
             $http.post('api/waste/post', request).then( data => {
                console.log(data);
             }).catch((err) => { console.log(err);});
           }

        };

    }]);
}());
