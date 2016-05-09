(function () {
  angular.module('Social')
    .controller('EditProfileController', ['Upload', '$scope', '$state','$http',
      function (Upload, $scope, $state, $http) {

        $scope.user = JSON.parse(localStorage['user-data']) || undefined;

        $scope.$watch( () => {
          return $scope.file;
        }, () => {
          $scope.upload($scope.file);
        });

        $scope.upload = (file) => {
          if (file) {
            Upload.upload({
              url: 'api/profile/editPhoto',
              method: 'POST',
              data: {userId: $scope.user._id},
              file: file
            }).progress( (res) => {
              console.log('firing', res);
            }).success( (data) => {

            }).error( (err) => {
              console.log(err);
            });
          }
        };

        $scope.updateUserName = () => {
          var request = {
            userId: $scope.user._id,
            userName: $scope.User.username
          };

          $http.post('api/profile/updateUserName', request)
            .success( (data) => {
              console.log('success', data);
            })
            .error( (err) => {
              console.log('error',err);
            });

        };

        $scope.updateBio = () => {
          var request = {
            userId: $scope.user._id,
            bio: $scope.User.bio
          };
          
          $http.post('api/profile/updateBio' , request)
            .success( (data) => {
              console.log('success', data);
            })
            .error( (err) => {
              console.log('error', err);
            });
        };


      }]);
}());
