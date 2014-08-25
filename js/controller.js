"use strict";

myApp.controller("HairCtrl", function($scope, $http, $sce) {
   $http.get("data/hair-project.json").success(function(data) {
      $scope.papers = data;
      for (var i = 0; i < $scope.papers.length; i++) {
         var paper = $scope.papers[i];
         if (paper.video !== undefined) {
            paper.video = $sce.trustAsResourceUrl(paper.video);
         }
      }
   });
});
myApp.controller("MaterialCtrl", function($scope, $http, $sce) {
   $http.get("data/material-project.json").success(function(data) {
      $scope.papers = data;
      for (var i = 0; i < $scope.papers.length; i++) {
         var paper = $scope.papers[i];
         if (paper.video !== undefined) {
            paper.video = $sce.trustAsResourceUrl(paper.video);
         }
      }
   });
});

myApp.controller("SiggraphCtrl", function($scope, $http, $sce) {
   $http.get("data/paper.json").success(function(data) {
      $scope.papers = data;
      for (var i = 0; i < $scope.papers.length; i++) {
         var paper = $scope.papers[i];
         if (paper.video !== undefined) {
            paper.video = $sce.trustAsResourceUrl(paper.video);
         }
      }
   });
});

