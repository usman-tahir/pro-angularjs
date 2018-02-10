
var app = angular.module("todoApplication", []);

app.controller("todoController", ["$scope", function($scope) {
    $scope.title = "Todo Application";
    $scope.items = [];

    $scope.incompleteCount = function() {
        var count = 0;
        angular.forEach($scope.items, function(item) {
            if (!item.done) {
                count += 1;
            }
        });
        return count;
    }

    $scope.add = function(action) {

        if (!$scope.itemExists(action)) {
            $scope.items.push({
                action: action,
                done: false
            });
            $scope.action = "";
        }
    }

    $scope.itemExists = function(action) {
        angular.forEach($scope.items, function(item) {
            if (item.item === action.item) {
                return true;
            }
        });
        return false;
    }
}]);

// app.filter("completed", function() {
//     return function (items, showCompleted) {
//         var result = [];
//         angular.forEach(items, function(item) {
//             if (item.done === false || showCompleted === true) {
//                 result.push(item);
//             }
//         });
//         return result;
//     }
// });