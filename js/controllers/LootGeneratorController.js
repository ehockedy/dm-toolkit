app.controller('LootGeneratorController',
  ['$scope', 'loot_service',
  function($scope, loot_service) {
    $scope.screen_text = "";
    loot_service.success(function(data) {
      $scope.loot_json = data;
    }),
    $scope.generate_loot = function(level) {
      $scope.loot_count = Object.keys($scope.loot_json[level]).length
      var rand_idx = Math.ceil(Math.random()*$scope.loot_count)-1
      $scope.loot = $scope.loot_json[level][rand_idx].name;
    }
  }
  ]
);