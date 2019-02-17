"use strict";
const cart = {
    // P is showing the vm.total defined in the controller, this is incremented within addItem().
    // the first ngRepeat is looping through the shopping cart array, and in the P tags, displaying the name and price for each item.
    // The second ngRepeat is returning information from the item component, through < and & bindings. It is performing the same action
    // as ngRepeat #1. obj is defined in item.component, and is the holder for the returned information.
    template:`
    <p>Total: {{$ctrl.total | currency}}</p>
    <p>Items in your cart ({{$ctrl.shoppingcart.length}})</p>
    <div class="top">
    <section class="added" ng-repeat="item in $ctrl.shoppingcart track by $index">
    <p>Item: {{item.name}}</p>
    <p>Price: {{item.price | currency}}</p>
    </section>
    </div>
    <div class="bottom">
    <p>Available Items</p>
    <section class="list">
    <item obj="obj" add-item="$ctrl.addItem(item);" delete-item="$ctrl.deleteItem(item);" ng-repeat="obj in $ctrl.items track by $index"></item>
    </section>
    </div>
    `,
    controller: [function(){
        const vm = this;
        //prepopulated array of items with a name and price
        vm.items = [
            {name:"chicken", price:5},
            {name:"fish", price:10},
            {name:"mushrooms", price:3},
            {name:"cereal", price:3},
            {name:"water", price:1},
            {name:"milk", price:2},
            {name:"cheese", price:3},
            {name:"ice cream", price:3},
            {name:"peppers", price:1},
            {name:"onions", price:2}
        ]
        //empty array that holds items pushed from the method within the addItem property
        vm.shoppingcart = [];
        //the total, that starts at 0, and is filtered with the | currency filter.
        vm.total = 0;
        // stores the method that loops through the shopping cart array, looks for the item name associated with the deleteItem button, and splices it.
        vm.deleteItem = function(item) {
            for (let i = 0; i < vm.shoppingcart.length; i++) {
              if (vm.shoppingcart[i].name === item.name) {
                vm.shoppingcart.splice(i, 1);
                break;
              }
            }
            //decrements vm.total by the associated item price
            vm.total -= item.price;
          };
          //stores the method that pushes a the selected item into a new copy of shoppingcart. Angular.copy is needed to ensure that all instances
          //of item are not overwritten by the "last in".
        vm.addItem = function(item) {
            //push
            if (vm.shoppingcart.length < 16) {
            vm.shoppingcart.push(angular.copy(item));
            //increments vm.total by the price of the selected item
            vm.total += item.price;
            console.log(vm.shoppingcart);
            }
        };
    }]
};

angular.module("App").component("cart", cart);