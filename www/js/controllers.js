angular.module('starter.controllers', ['ionic.native'])

.controller('EmojiCtrl', function($scope, $stateParams, Emoji, $cordovaSocialSharing, $cordovaFile, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/help-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal){
    $scope.modal = modal;
  });

  var imgPath = "www/img/emoji/";

  function share(e){
    var options = {
      files: [imgPath + e.category + "/" + e.name + ".png"]
    };

    $cordovaSocialSharing.shareWithOptions(options, function(){
    });
  }

  function getPath(e){
    return "img/emoji/" + e.category + "/" + e.name + ".png";
  }

  $scope.category = $stateParams.category;
  $scope.emoji = Emoji.getCategory($stateParams.category);
  $scope.share = share;
  $scope.getPath = getPath;
  $scope.help = function(){
    $scope.modal.show();
  };
  $scope.closeHelp = function(){
    $scope.modal.hide();
  };
  $scope.$on('$destroy', function(){
    $scope.modal.remove();
  });
});
