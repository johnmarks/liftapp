'use strict';

/**
 * @ngdoc function
 * @name liftApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the liftApp
 */
angular.module('liftApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
