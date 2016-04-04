var app = angular.module('myApp.factories', []);

var contactList = [];

app.factory('StoreContact', [ function(contact){
    
    
    var storeData = function(contact) {
        contactList.push(contact);
        console.log(contactList);
    }
    
    return storeData
}])