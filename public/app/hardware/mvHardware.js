angular.module('app').factory('mvHardware', function($resource) {
    var HardwareResource = $resource('/api/hardwares/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });

    return HardwareResource;
});