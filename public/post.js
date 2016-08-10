var testResource = angular.module('test.post', [
    'test.frResource'
]);

testResource.factory('Post', ['frResource', function Post ($resource) {
    return $resource('/post/:id', {id: '@id'}, {});
}]);
