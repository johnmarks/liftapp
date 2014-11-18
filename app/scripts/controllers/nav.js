'use strict';

/**
 * @ngdoc function
 * @name liftApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the liftApp
 */
angular.module('liftApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.navClass = function (page) {
      var currentRoute = $location.path().substring(1) || 'home';
      return page === currentRoute ? 'active' : '';
    };
  });
