angular.module('app').controller('mvHardwareListCtrl', function($scope, mvHardware) {
    $scope.hardware = mvHardware.query();

    $scope.sortOptions = [{value:"title",text: "Sort by Title"},
        {value: "published",text: "Sort by Publish Date"}];
    $scope.sortOrder = $scope.sortOptions[0].value;
});