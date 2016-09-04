angular.module('corbynemoji.controllers', ['ionic.native'])

.controller('EmojiCtrl', function($scope, $stateParams, Emoji, $cordovaSocialSharing, $cordovaFile, $ionicModal, $cordovaGoogleAnalytics, $ionicPlatform) {
  //Base image path
  var imgPath = "www/img/emoji/";


  $ionicPlatform.ready(function(){
    $cordovaGoogleAnalytics.trackView('Emoji Category: ' + $stateParams.category);
  });

  $ionicModal.fromTemplateUrl('templates/help-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal){
    $scope.modal = modal;
  });


  //Launch the share process for an emoji
  function share(e){
    var options = {
      files: [imgPath + e.category + "/" + e.name + ".png"]
    };

    /**
    * Success callback, where result contains information about share action
    **/
    var shareSuccess = function(result){
      /* Refer to docs for cordovaSocialShare - result.completed will often return false on android so is
      *  largely useless for our purposes. It's probably safe to assume that if this callback is called,
      *  then sharing was successful.*/


      //If result.app is populated, then track it
      if(result.app && result.app !== null && result.app !== ""){
        $cordovaGoogleAnalytics.trackEvent("Emoji", "Shared To", result.app, 1);
      }

      $cordovaGoogleAnalytics.trackEvent("Emoji", "Shared Image", e.category + "_" + e.name, 1);
    };

    /**
    * Share Error callback, where result contains information about share error
    */
    var shareError = function(result){

    };

    $cordovaSocialSharing.shareWithOptions(options, shareSuccess, shareError);
  }

  //Retrieve the img URL for the given emoji
  function getPath(e){
    return "img/emoji/" + e.category + "/" + e.name + ".png";
  }

  //Launch the campaign donation site
  function donateClicked(){
    $cordovaGoogleAnalytics.trackEvent("Campaign", "Donate", "Begin", 1);
    window.open('https://new-corbynstays.nationbuilder.com/donate', '_system');
  }

  $scope.category = $stateParams.category;
  $scope.emoji = Emoji.getCategory($stateParams.category);
  $scope.share = share;
  $scope.getPath = getPath;
  $scope.help = function(){
    $cordovaGoogleAnalytics.trackEvent("App", "Help", "View", 1);
    $scope.modal.show();
  };
  $scope.closeHelp = function(){
    $cordovaGoogleAnalytics.trackEvent("App", "Help", "Dismiss", 1);
    $scope.modal.hide();
  };
  $scope.$on('$destroy', function(){
    $scope.modal.remove();
  });

  $scope.donateClicked = donateClicked;
});
