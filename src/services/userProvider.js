'use strict';

app.service('userProvider', function($firebaseAuth){
    var ref = new Firebase("https://shining-heat-7966.firebaseio.com/");
    var auth = $firebaseAuth(ref);

    /*ref.createUser({
        email    : "bobtony@firebase.com",
        password : "correcthorsebatterystaple"
    }, function(error, userData) {
        if (error) {
            console.log("Error creating user:", error);
        } else {
            console.log("Successfully created user account with uid:", userData.uid);
        }
    });*/

    this.create = function (user) {
        auth.createUser({
            email    : user.email,
            password : user.password
        });
    }

    this.auth = function(user){
        ref.authWithPassword({
            email: user.email,
            password: user.password
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        });
        /*auth.login('password', {
            email    : user.email,
            password : user.password
        });*/
        return ref.getAuth();
    }

    this.getAuth = function(){
        return auth;
    }
});