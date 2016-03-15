/**
 * main
 * Created by dcorns on 3/14/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
(function(){
  //create a view model Object (MVVM pattern)
  var vm = {
    //simple data binding using observable
    car: ko.observable(),
    //observable Array
    ary: ko.observableArray(),
    //create a click event
    addCar: function(){
      this.ary.push(this.car());
    }
  };
  //use the vm model methods or plain javaScript using the object
  vm.car("Accord");
  vm.ary.push('Honda Accord');
  vm.ary.push('Ford Mustang');
  vm.ary.push('Mercury Sabel');
  //bind view model to the view, can also pass in dom element otherwise it will bind to what is on the screen
  ko.applyBindings(vm);

})();