angular.
  module('phoneList').
  component('phoneFilter',{
    templateUrl:'templates/filters.template.html',
    controller:['$http','$stateParams',
      function phoneFilterController($http,$stateParams){
        var self=this;


          $http.get('phones/phones.json').then(function(response){
            self.phones = response.data;

            this.orderProp = 'age';
            this.orderComp='id';
            var phoneid = $stateParams.id;
            console.log("running again");
            if(phoneid == " "){
              phoneid = self.phones[0].comp;
            }
            console.log(phoneid);
          });

        self.selected = function(company){
          self.devices = [];
          $http.get('phones/phones.json').then(function(response){
            self.phones=response.data;
              console.log("hey started");

            for(var i=0;i<self.phones.length;i++){
              if(self.phones[i].comp == company){
                  self.devices.push(self.phones[i]);

              }
            }
            var phoneid = $stateParams.id;
            console.log("first device"+self.devices[0].name)
            this.phoneid = self.devices[0].id;
            console.log("id in filter"+this.phoneid);
            console.log(self.devices);
          
          });
        };
      }]
  });
