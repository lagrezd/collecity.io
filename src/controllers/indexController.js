'use strict';

app
    .controller('index', function ($scope, userProvider) {
        $scope.session = userProvider.getAuth();

        $scope.auth = function(user) {
            $scope.session = userProvider.auth(user);
        }
    })
    .controller('indexCreateUser', function ($scope, userProvider) {
        $scope.create = function (user) {
            userProvider.create(user);
        }
    })
;
