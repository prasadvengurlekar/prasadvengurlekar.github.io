app.controller('testpageCtrl', ['$scope', '$http', 'ServiceCall', '$log', '$window', 'cache', '$timeout', '$state', '$compile', '$rootScope', function ($scope, $http, ServiceCall, $log, $window, cache, $timeout, $state, $compile, $rootScope) {


    //inputting json directly for this example
    $scope.languages = [
    { name: "English", value: 0, desc: "", isFav: 0 },
    { name: "Spanish", value: 1, desc: "", isFav: 1 }
    ];
    $scope.save = function () {
        /*$http.post('path/to/server/file/to/save/json', $scope.languages).then(function(data) {
        $scope.msg = 'Data saved';
        });*/
        //$scope.msg = 'Data sent: ' + JSON.stringify($scope.languages);
        console.log(JSON.stringify($scope.languages));
    };

    $scope.wishlistClick = function (lang) {
        if (lang.isFav == 1) {
            lang.isFav = 0;
        }
        else if (lang.isFav == 0) {
            lang.isFav = 1;
        }
        $scope.writeInConsole(lang);
    }

    $scope.writeInConsole = function (lang) {
        console.log(JSON.stringify(lang));
        console.log(JSON.stringify($scope.languages));
        $scope.msg = 'Data sent: ' + JSON.stringify($scope.languages);
    }

} ]);
