'use strict';

app.directive('checkUser', ['$rootScope', '$location', 'userProvider', function($root, $location, userProvider){
    return {
        link: function(){
            $root.$on('$routeChangeStart', function(event, currRoute){
                var auth = userProvider.getAuth();

                if (currRoute.access && !currRoute.access.isFree && !auth.user) {
                    $location.url('/');
                }
            });
        }
    }
}]);