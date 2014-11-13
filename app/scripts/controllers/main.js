'use strict';

/**
 * @ngdoc function
 * @name liftappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the liftappApp
 */
angular.module('liftappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
