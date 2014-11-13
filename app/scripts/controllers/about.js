'use strict';

/**
 * @ngdoc function
 * @name liftappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the liftappApp
 */
angular.module('liftappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
