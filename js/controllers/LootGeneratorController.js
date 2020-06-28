app.controller('LootGeneratorController',
  ['$scope', 'loot_service',
  function($scope, loot_service) {
    $scope.screen_text = "";
    loot_service.success(function(data) {
      $scope.loot_json = data;
    });

    var rarity = {
      COMMON: {
        name: "common",
        chance : 0.6
      },
      UNCOMMON: {
        name: "uncommon",
        chance: 0.35
      },
      RARE: {
        name: "rare",
        chance: 0.04
      },
      VERY_RARE: {
        name: "very rare",
        chance: 0.01
      }
    };

    console.assert(
      rarity.COMMON.chance + 
      rarity.UNCOMMON.chance +
      rarity.RARE.chance +
      rarity.VERY_RARE.chance
      == 1);

    function generate_rarity() {
      // Generates a random number, then based on the above
      // json returns the string
      var rand = Math.random();
      console.log(rand)
      var cumulative = 0;
      for (var key in rarity) {
        cumulative += rarity[key].chance;
        if (rand < cumulative) {
          return rarity[key].name;
        }
      }
    };

    $scope.generate_loot = function(level, num) {
      $scope.loot = ""
      for (var n = 0; n < num; n++) {
        var r = generate_rarity();
        var loot_count = Object.keys($scope.loot_json[level][r]).length;
        var rand_idx = Math.ceil(Math.random()*loot_count)-1;
        $scope.loot += $scope.loot_json[level][r][rand_idx].name;
        if (n < num -1) $scope.loot += ", ";
      }
    }
  }
  ]
);