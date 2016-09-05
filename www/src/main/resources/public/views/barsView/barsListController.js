/**
 * Created by Jorge on 8/29/2016.
 */
(function() {
  angular
    .module('phoneApp')
    .controller('barsListController', barsList);


  //inject dependencies
  barsList.$inject = ['$scope', '$state', '$window', '$http', 'barsListService'];



  function barsList($scope, $state, $window, $http, barsListService)  {
    var self = this;

    //Public functions
    activate();


    function activate() {
      getBarsData();
    }
    function getBarsData() {
      barsListService.getBars()
        .success(function(response) {
         return self.barsArray = response;
        });
    }



  }

})();
