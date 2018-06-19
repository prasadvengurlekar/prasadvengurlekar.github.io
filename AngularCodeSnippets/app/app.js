

var app = angular.module('app', ['ui.router', 'oc.lazyLoad']);

app.config(
    ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($controllerProvider, $compileProvider, $filterProvider, $provide) {

        /*for ozlazyload of Ctrl files*/
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
        app.value = $provide.value;
    }
  ])


app.factory('ServiceCall', function ($http, $q) {
    return {

        PostData: function (URL, param) {
            var deferred = $q.defer();
            $http({
                url: URL,
                method: "POST",
                data: param,
                contentType: "application/json; charset=utf-8",
                dataType: "json"

            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject();
            });

            return deferred.promise;

        }

    }

});

app.factory('cache', function ($cacheFactory) {
    var cache = $cacheFactory('PBcache');
    return cache;
});

app.filter('spaceless', function () {
    return function (input) {
        if (input) {
            input = input.replace('&', '');
            input = input.replace('(', '');
            input = input.replace(')', '');
            input = input.replace('/', '');
            return input.replace(/\s+/g, '');
        }
    }
});