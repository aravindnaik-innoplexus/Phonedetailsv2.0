
  angular.
    module('mobileX').
    config(['$stateProvider','$urlRouterProvider',
    function($stateProvider,$urlRouterProvider) {

   $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home',{
          url:'/home',
          data:{
            phoneid:"dell-streak-7"
          },
          views:{
            'filters':{
              template:"<phone-filter></phone-filter>"

            },
            'specs':{
              template:"<phone-specs></phone-specs>",


            }
          }
        })
        .state('add',{
          url:"/home/add.template.html",
          template:"<phone-add></phone-add>"

        })
        .state('update',{
          url:"/home/update.template.html",
          template:"<phone-update></phone-update>"
        });



    }
  ])  ;
