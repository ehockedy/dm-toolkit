app.controller('ClothingTrackerController',
  ['$scope',
  function($scope) {
    $scope.click = function(param) {
        console.log(`click on ${param}`);
    }
    $scope.hover = function(param) {
        console.log(`hover over ${param}`);
    }
  }
  ]
);
