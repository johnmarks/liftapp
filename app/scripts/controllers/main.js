'use strict';

/**
 * @ngdoc function
 * @name liftApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the liftApp
 */
angular.module('liftApp')
  .controller('MainCtrl', function ($scope, fbutil) {
    $scope.exercises = fbutil.syncArray('exercises');
 
    $scope.addExercise = function(){
      $scope.exercises.$add({text: $scope.exercise});
      $scope.exercise = '';
    };

    $scope.removeExercise = function(exercise) {
      // alert(exercise.$id);
      $scope.exercises.$remove(exercise);
    };
  });
