/**
 * Created by Jorge on 8/29/2016.
 */
(function () {
  angular
    .module('phoneApp')
    .service('barsListService', barsListService);

  //Inject dependencies
  barsListService.$inject = ['$state', '$window', '$http'];

  function barsListService($state, $window, $http) {

    var self = this;
    self.getBars = getBars;

    /*GET request that returns the bar data upon success*/
    function getBars() {
      return $http.get('src/main/resources/public/data/bars.json');


    }

    function getBarsComplete(response) {
      console.log(response.data);
      return response.data;
    }

    function getBarsFailed(error) {
      console.log('Failed to get data', error);

    }
  }

}) ();
