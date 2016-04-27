angular.module('nodeadmin.designer', [])
.controller('DesignerController', ['$scope', 'dbFactory', function ($scope, dbFactory) {

  $scope.databases = [];
  $scope.menu = false;

  $scope.loadDatabases = function () {
    dbFactory.getDatabases()
    .then(function (data) {
      $scope.databases = data.data;
    })
  };

  $scope.loadDatabases();

}]);


