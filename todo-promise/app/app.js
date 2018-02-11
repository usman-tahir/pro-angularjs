"use strict";

var app = angular.module("todoPromiseApplication", []);

app.controller("todoPromiseController", ["$scope", "$http", function($scope, $http) {
    var promise = $http.get("todo.json");
    promise.then(function(data) {
        $scope.todos = data;
    });
}]);