

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
        console.log($state.current.data.phoneid);
        $http.get('phones/dell-streak-7.json').then(function(response){
          self.data=response.data;
          console.log(response.data);
          self.phone=response.data;
          self.setImage(response.data.images[0]);

        });



      }
    ]
  });
