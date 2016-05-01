(function() {
  angular.module('Social', ['ui.router'])
          .config(($stateProvider) => {
              $stateProvider.state('signUp', {
                url: '/signup',
                templateUrl: 'app/signup//signup.html',
                controller: 'SignUpController'
              });
          });
}());
