angular.module('app', ['testmodule']).controller('testB', [
  '$scope', 'testFc', function($scope, fac) {
    $scope.setvalue = function() {
      return fac.setvalue();
    };
    return $scope.name = fac.getvalue();
  }
]).controller('testC', [
  '$scope', 'testFc', function($scope, fac) {
    return $scope.name = fac.getvalue();
  }
]);

//# sourceMappingURL=maps\test.js.map
angular.module('testmodule', []).factory('testFc', [
  '$http', function($http) {
    var value;
    value = {
      name: "old name2"
    };
    return {
      setvalue: function() {
        return value.name = "new name";
      },
      getvalue: function() {
        console.log("@@");
        return value;
      }
    };
  }
]);

//# sourceMappingURL=maps\testFc.js.map