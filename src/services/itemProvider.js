'use strict';

/*var items = [
    {'name': 'Django Unchained', 'category_id': 1},
    {'name': 'Forrest Gump', 'category_id': 1}
];*/

app.service("itemProvider", function($firebaseArray) {

    var ref = new Firebase("https://shining-heat-7966.firebaseio.com/items");

    var syncObject = $firebaseArray(ref);

    var items = syncObject;

    /* Creation des données firebase */
    /*var usersRef = ref.child("items");
    usersRef.set({
        0: {'name': 'Django Unchained', 'category_id': '1'},
        1: {'name': 'Forrest Gump', 'category_id': '1'}
    });*/

    this.getItems = function () {
        return syncObject;
    }

    this.create = function (item) {
        items.$add(item);
    }

    this.remove = function (item) {
        items.$remove(item);
    }

    this.update = function (item) {
        items.$save(item);
    }

});