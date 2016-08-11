/**
 * Created by r729727 on 8/10/2016.
 */
(function() {
  angular
    .module('phoneApp')
    .controller('headerController', Header)


  //inject dependencies
  Header.$inject = ['$scope', '$state', '$window'];



  function Header($scope, $state, $window)  {
    var vm = this;


  }

})();
