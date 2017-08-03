angular.module('app').controller('mvMainCtrl', function($scope) {
    $scope.hardwares = [
        {name: 'ThinkSystem SN850', featured: true, published: new Date('10/5/2017')},
        {name: 'SuperServer SYS-6018U-TR4T+', featured: true, published: new Date('10/12/2017')},
        {name: 'PRIMEQUEST 3800B', featured: false, published: new Date('10/1/2017')},
        {name: 'NX7700x/A4012L-1D', featured: false, published: new Date('7/12/2017')},
        {name: 'SuperServer SYS-6028U-TR4T+', featured: true, published: new Date('1/1/2017')},
        {name: 'Yingxin NF5240M4', featured: true, published: new Date('10/13/2017')},
        {name: 'ThinkSystem SN550', featured: true, published: new Date('3/1/2017')},
        {name: 'PRIMERGY RX2530 M4', featured: true, published: new Date('2/1/2017')},
        {name: 'ThinkSystem SR850', featured: true, published: new Date('10/7/2017')},
        {name: 'NX7700x/A4012L-2D', featured: false, published: new Date('8/1/2017')},
        {name: ' Yingxin NF5170M4', featured: false, published: new Date('11/1/2017')},
        {name: "IBM System z", featured: true, published: new Date('10/13/2017')},
        {name: 'Dell PowerEdge', featured: false, published: new Date('10/1/2017')},
        {name: 'Apple Network Server', featured: true, published: new Date('2/15/2017')},
        {name: 'Sun Microsystems Ultra II', featured: true, published: new Date('7/1/2017')}
    ]
});