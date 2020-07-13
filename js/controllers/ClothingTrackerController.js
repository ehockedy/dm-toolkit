app.controller('ClothingTrackerController',
  ['$scope',
  function($scope) {
    var items = {}
    var activeItem
    $scope.itemNameFill = ""
    $scope.itemDescrFill = "" 

    $scope.click = function(param) {
      console.log(`click on ${param}`);
      if (!(param in items)) {
        console.log("Adding", param)
        items[param] = {
          "value": "",
          "description": ""
        }
      }
      activeItem = param
      $scope.itemNameFill = items[param]["value"]
      $scope.itemDescrFill = items[param]["description"]
    }

    $scope.hover = function(param) {
        console.log(`hover over ${param}`);
    }
    $scope.key_press = function(keyCode) {
      if (keyCode != 13) return;  // Enter key
      
      if (activeItem == undefined) {
        alert("Please select a body area first");
        return
      }

      // type can be "value" or "description"
      items[activeItem]["value"] = $scope.itemNameFill
      items[activeItem]["description"] = $scope.itemDescrFill
      console.log("Updated", activeItem, "to have", $scope.itemNameFill)
    }
  }
  ]
);
