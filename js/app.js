var app = angular.module("myApp", ['ngRoute']);

// Can cause an infinite loop if ".module('myApp')" is not included after app
// and one of the routes is index.html
// But then if it is not index.html there is an error "app.module" is not a function...
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: "DiceRollerController",
        templateUrl: "views/dice-roller.html"
      })
      .when('/loot-generator', {
        controller: "LootGeneratorController",
        templateUrl: "views/loot-generator.html"
      })
      .otherwise({
        redirectTo: '/'
      });
  });