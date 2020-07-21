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
        chance : 65,
        colour: "#00cc00" // green
      },
      UNCOMMON: {
        name: "uncommon",
        chance: 25,
        colour: "#0099ff" // blue
      },
      RARE: {
        name: "rare",
        chance: 9,
        colour: "#9900ff" // purple
      },
      VERY_RARE: {
        name: "very rare",
        chance: 1,
        colour: "#ff9900" // orange
      }
    };

    console.assert(
      rarity.COMMON.chance + 
      rarity.UNCOMMON.chance +
      rarity.RARE.chance +
      rarity.VERY_RARE.chance
      == 100);

    function generate_rarity() {
      // Generates a random number, then based on the above
      // json returns the string
      var rand = Math.random()*100;
      console.log(rand)
      var cumulative = 0;
      for (var key in rarity) {
        cumulative += rarity[key].chance;
        if (rand < cumulative) {
          return rarity[key];
        }
      }
    };

    $scope.generate_loot = function(type, num) {
      // Returns an array of json with fields name and colour
      // name is the string of the loot (or comma)
      // colour is the colour that string will be displayed
      $scope.loot = []
      for (var n = 0; n < num; n++) {
        var r = generate_rarity();
        var loot_count = Object.keys($scope.loot_json[type][r.name]).length;
        var rand_idx = Math.ceil(Math.random()*loot_count)-1;

        $scope.loot.push(
          {
            name: $scope.loot_json[type][r.name][rand_idx],
            colour: r.colour
          }
        )
        if (n < num -1) $scope.loot.push(
          {
            name: ", ",
            colour: "black"
          }
        );
      } 
    }
  }
  ]
);