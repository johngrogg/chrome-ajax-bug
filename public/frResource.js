var frResource = angular.module('test.frResource', [
    'ngResource'
]);

// Extend $resource so that if you are calling $save on a new object it uses $create
// and if you are calling it on an existin object it uses $update
frResource.factory( 'frResource', [ '$resource', function( $resource ) {
    return function( url, paramDefaults, actions, options ) {
        var defaults = {
            update: { method: 'PUT', isArray: false },
            create: { method: 'POST' }
        };

        actions = angular.extend( defaults, actions );

        var resource = $resource( url, paramDefaults, actions, options );

        resource.prototype.$save = function() {
            if ( !this.id && !this._id ) {
                return this.$create.apply(this, arguments);
            } else {
                return this.$update.apply(this, arguments);
            }
        };

        return resource;
    };
}]);
