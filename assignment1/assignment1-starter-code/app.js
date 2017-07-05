(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){

  $scope.checkIfTooMuch = function () {
    if ($scope.dishList === undefined || !/\S/.test($scope.dishList)){
      $scope.message = 'Please enter data first!';
      return;
    }
    var split = $scope.dishList.split(",");
    if (split.length <= 3) {
        $scope.message = 'Enjoy!';
    }
    else {
        $scope.message = 'Too much!';
    }

  }
};

})();
