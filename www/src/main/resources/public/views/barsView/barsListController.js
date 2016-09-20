/**
 * Created by Jorge on 8/29/2016.
 */
(function() {
  angular
    .module('phoneApp')
    .controller('barsListController', barsList)
    .config(function($ionicConfigProvider) {
    $ionicConfigProvider.views.swipeBackEnabled(false);
  });


  //inject dependencies
  barsList.$inject = ['$scope', '$state', '$window', '$http', 'barsListService', '$ionicModal', '$ionicSideMenuDelegate'];



  function barsList($scope, $state, $window, $http, barsListService, $ionicModal, $ionicSideMenuDelegate)  {
    var self = this;

    self.dataLoading = false;

    //Public functions
    activate();
    self.toggleLeft = toggleLeft;

    function activate() {
      getBarsData();
    }
    function getBarsData() {
      self.dataLoading = true;
      barsListService.getBars()
        .success(function(response) {
          self.dataLoading = false;
         return self.barsArray = response;
        });
    }

    $ionicModal.fromTemplateUrl('src/main/resources/public/js/directives/SpecialsModal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      self.dataLoading = true;
      $scope.modal.show();
      self.dataLoading = false;
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });

    function toggleLeft() {
      $ionicSideMenuDelegate.toggleLeft();
    }



  }

})();
