(function() {
  angular.module('Social', ['ui.router','ngFileUpload'])
    .config(function($stateProvider, $urlRouterProvider){

              $urlRouterProvider.otherwise('/home');

              $stateProvider.state('signUp', {
                url: '/signup',
                templateUrl: 'app/signup/signup.html',
                controller: 'SignUpController'
              })
              .state('editProfile', {
                url: '/edit-profile',
                templateUrl: 'app/profile/edit-profile-view.html',
                controller: 'EditProfileController'
              })
              .state('main', {
                url: '/home',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'vm'
              });
          });
}());
