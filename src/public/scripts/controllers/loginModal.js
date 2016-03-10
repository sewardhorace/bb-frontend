'use strict';

angular.module('trackerApp').controller('ModalDemoCtrl', function ($scope, $rootScope, $uibModal, $log) {

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'static/templates/login-modal.html',
      controller: 'ModalInstanceCtrl',
      size: size,
    });

    modalInstance.result.then(function (user) {
      $rootScope.currentUser = user;
    }, function () {
      $log.info("dismissed");
    });
  };

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('trackerApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, authService) {

  $scope.credentials = {};

  $scope.submit = function () {
    console.log("Submit");
    authService.login($scope.credentials, function(result){
      console.log(result.status);
      if (result.status === 200){
        var user = result.data.user;
        $uibModalInstance.close(user);
      } else {
        $uibModalInstance.dismiss('cancel');
      }
    });
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
