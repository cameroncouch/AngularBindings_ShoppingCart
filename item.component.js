"use strict";
const item = {
    //these bindings allow for the methods and information from the parent component to be shared with item (child).
    //obj is defined in the child reference within the parent, bound below, and called within the ngClick below
    //Information passed back to the parent needs to be in the form of an object (item).
    bindings: {
        obj: "<",
        name: "<",
        price: "<",
        addItem: "&",
        deleteItem: "&"
    },
    template:`
    <p>Item: {{$ctrl.obj.name}}</p>
    <p>Price: {{$ctrl.obj.price | currency}}</p>
    <button ng-click="$ctrl.addItem({item: $ctrl.obj});">Add Item</button>
    <button ng-click="$ctrl.deleteItem({item: $ctrl.obj});">Remove Item</button>
    `
};
angular.module("App").component("item", item);