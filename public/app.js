var app = angular.module('test', [
    'ngAnimate',
]);

app.config(function ($httpProvider) {
    // $http config
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
});

app.factory('$xhrFactory', function() {
    return function createXhr(method, url) {
        var xhr = new window.XMLHttpRequest();
        xhr.test = Date.now();
        return xhr;
    };
});

app.controller('MainCtrl', function ($scope, $http) {
    $scope.name = 'World';
    $scope.result1 = null;
    $scope.result2 = null;

    var eventHandlers = {
        loadstart: function (oEvent) {
            console.log('loadstart', oEvent, oEvent.target.test);
        },
        progress: function (oEvent) {
            console.log('progress', oEvent, oEvent.target.test);
        },
        load: function (oEvent) {
            console.log('load', oEvent, oEvent.target.test);
        },
        error: function (oEvent) {
            console.log('error', oEvent, oEvent.target.test);
        },
        abort: function (oEvent) {
            console.log('abort', oEvent, oEvent.target.test);
        },
        loadend: function (oEvent) {
            console.log('loadend', oEvent, oEvent.target.test);
        }
    };

    $scope.getHttps = function () {
        $scope.result1 = null;
        $scope.result2 = null;
        console.clear();
        console.log('getting test http results');
        var promise1 = $http.get('/post/1', {
            eventHandlers: eventHandlers
        });
        promise1.then(function (result1) {
            $scope.result1 = result1;
            console.log('http result1 received', promise1.$$state.status);
            var promise2 = $http.get('/post/1', {
                eventHandlers: eventHandlers
            });
            promise2.then(function (result2) {
                $scope.result2 = result2;
                console.log('http result2 received', promise2.$$state.status);
            });
        });
    };

    $scope.postHttps = function () {
        $scope.result1 = null;
        $scope.result2 = null;
        console.clear();
        console.log('getting test http results');
        var promise1 = $http.post('/post/1', {id: 1});
        promise1.then(function (result1) {
            $scope.result1 = result1;
            console.log('http result1 received', promise1.$$state.status);
            var promise2 = $http.post('/post/1', {id: 1});
            promise2.then(function (result2) {
                $scope.result2 = result2;
                console.log('http result2 received', promise2.$$state.status);
            });
        });
    };
});
