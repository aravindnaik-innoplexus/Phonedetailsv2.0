angular.
  module('phoneList').
  component('phoneFilter',{
    templateUrl:'templates/filters.template.html',
    controller:['$http',
      function phoneFilterController($http){
        var self=this;


          $http.get('phones/phones.json').then(function(response){
          self.phones = response.data;
          this.comp= response.data.comp;
          this.orderProp = 'age';
          this.orderComp='id';


        });


      }]
  });
