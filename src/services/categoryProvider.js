'use strict';

/*var categories = [
    {'id': 1, 'name': 'films'},
    {'id': 2, 'name': 'musiques'}
];*/

app.service('categoryProvider', function ($firebaseArray) {
    var ref = new Firebase("https://shining-heat-7966.firebaseio.com/categories");

    var syncObject = $firebaseArray(ref);

    /* Creation des données firebase */
    //var usersRef = ref.child("categories");
    /*ref.set(
        {'id': 1, 'name': 'films'},
        {'id': 2, 'name': 'musiques'}
    );*/
    /*var usersRef = ref.child("categories");
    usersRef.set({
        0: {'id': 1, 'name': 'films'},
        1: {'id': 2, 'name': 'musiques'}
    });*/

    var categories = syncObject;

    this.getCategories = function () {
        return categories;
    }

    this.create = function (category) {
        category['id'] = categories.length + 1;
        categories.$add(category);
    }

    this.remove = function (category) {
        categories.$remove(category);
    }
});