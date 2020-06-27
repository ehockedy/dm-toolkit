app.factory('loot_service', ['$http',
  function($http) {
    return $http.get('json/loot.json')
        .success(function(data) {
            console.log("Success");
            return data;
        })
        .error(function(err) {
            console.log("fail");
            return err;
        })
     
  }]);