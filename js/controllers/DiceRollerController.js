// Controllers are "classes" or "constructor functions" that are responsible
// for providing the application behavior that supports the declarative markup
// in the template
app.controller('DiceRollerController',
  ['$scope',  // This is a list of strings that corresponds to the names of the dependencies
              // These can be ommitted (and the functions passed in by themselves not in an array)
              // but the code is safer from minification this way
  function($scope) {  // $scope is a built in variable that transfers data between the view and the controller
    $scope.roll_text = "Click the button to roll"
    $scope.latest_result = "";
    $scope.rollNdX = function(n, x) {
      // Set result to display this
      $scope.latest_result = "Rolling...";

      // Calculate the roll result
      var result = ""
      for (i = 0; i < n; ++i) {
        result += Math.ceil(Math.random()*x).toString();
        if (i < n-1) { // Don't put comma after last one
          result += ", ";
        }
      }

      // Set a timer for given time, after which it will carry out the given function
      setTimeout(function() {
        $scope.latest_result = result;
        //this triggers a $digest - pokes the "watcher" on the button text which evauates the scope model
        //and if there is a change it triggers the corresponding listener function
        $scope.$apply();
      }, 200); // ms to wait for

      $scope.roll_text = "Result of rolling " + n.toString() + "d" + x.toString() + ": ";
    }
  }
  ]
); 