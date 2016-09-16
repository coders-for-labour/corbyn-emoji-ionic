angular.module('corbynemoji.controllers', ['ionic.native'])
.controller('Home', function($scope, $http, $ionicModal, $cordovaGoogleAnalytics, $ionicPlatform){

  $ionicModal.fromTemplateUrl('templates/help-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal){
    $scope.modal = modal;
  });

  function getLatest(){
    $http.get("http://jeremoji.codersforcorbyn.com/", { params: {json: 1, count: 10 }  })
      .success(function(data){
        $scope.feed = data;
      })
      .error(function(data){
        $scope.feed = {
          error: "Could not retrieve feed data.",
          posts: [{
            title_plain: "Post 1",
            excerpt: "Test",
            date: "1"
          },{
            title_plain: "Post 2",
            excerpt: "Test",
            date: "2"
          },{
            title_plain: "Post 3",
            excerpt: "Test",
            date: "3"
          },]
        };
        console.log("ERROR: " + data);
      });
  }

  $scope.init = getLatest;

  $scope.refresh = getLatest;

  //Launch the campaign donation site
  function donateClicked(){
    $cordovaGoogleAnalytics.trackEvent("Campaign", "Donate", "Begin", 1);
    window.open('https://new-corbynstays.nationbuilder.com/donate', '_system');
  }
  $scope.donateClicked = donateClicked;
  $scope.platform = ionic.Platform.platform();
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
})
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

  $ionicModal.fromTemplateUrl('templates/share-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal){
    $scope.shareModal = modal;
  });

  function copy(e){

  }

  //Launch the share process for an emoji
  function share(shareObj){
    var options = {
      message: shareObj.text,
      files: [imgPath + shareObj.emoji.category + "/" + shareObj.emoji.name + ".png"]
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

      $cordovaGoogleAnalytics.trackEvent("Emoji", "Shared Image", shareObj.emoji.category + "_" + shareObj.emoji.name, 1);
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

  $scope.category = $stateParams.category;
  $scope.emoji = Emoji.getCategory($stateParams.category);
  $scope.startShare = function(e){
      $scope.shareObj = {
        emoji: e,
        text: e.defaultText,
        description: e.description
      };
      $scope.shareModal.show();
  };
  $scope.share = share;
  $scope.closeShare = function(){
      $scope.shareModal.hide();
  };
  $scope.getPath = getPath;


  //Launch the campaign donation site
  function donateClicked(){
    $cordovaGoogleAnalytics.trackEvent("Campaign", "Donate", "Begin", 1);
    window.open('https://new-corbynstays.nationbuilder.com/donate', '_system');
  }
  $scope.donateClicked = donateClicked;
  $scope.platform = ionic.Platform.platform();
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

  $scope.sliderOptions = {
    height: 100,
    effect: 'flip'
  };

  $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
    $scope.slider = data.slider;
  });

});
