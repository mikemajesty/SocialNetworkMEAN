(function () {
  angular.module('Social')
    .controller('MainController', ['$scope', '$http', '$interval',
      function($scope, $http, $interval){

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
             $http.post('api/waste/new', request).then( res => {
                $scope.wastes = res.data;
             }).catch((err) => { console.log(err);});
           }

        };

        function getWastes(initial) {
          $http.get('api/waste/get').then((res) => {
            if (initial) {
              $scope.wastes = res.data;
            }
            else {
              if (res.data.length > $scope.wastes.length){
                  $scope.incomingWastes = res.data;
              }
            }

          }).catch((err) => { console.log(err);});
        };

        $interval( () => {
          getWastes(false);
          if ($scope.incomingWastes) {
            $scope.difference = $scope.incomingWastes.length - $scope.wastes.length;
          }

        }, 5000);

        $scope.setNewWastes = () => {
          console.log('incoming', $scope.incomingWastes);
          $scope.wastes = angular.copy($scope.incomingWastes);
          $scope.incomingWastes = undefined;
        };
        // Init
        getWastes(true);
    }]);
}());
