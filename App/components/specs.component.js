

angular.
  module('phoneList').
  component('phoneSpecs', {
    templateUrl: 'templates/specs.template.html',
    controller: ['$http','$state','$stateParams',
      function PhoneSpecsController($http,$state,$stateParams) {
        var self = this;
        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };


        var phoneid = $stateParams.id;

        if(phoneid == ""){
          phoneid = "motorola-xoom-with-wi-fi";
        }
        console.log("id"+phoneid);



        $http.get('phones/'+phoneid+'.json').then(function(response){
          self.data=response.data;

          self.phone=response.data;
          self.setImage(response.data.images[0]);

        });



      }
    ]
  });
