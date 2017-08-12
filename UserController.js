(function () {

    var app = angular.module("AngularApp");


    function MainController($scope, gitHub, $interval, $log, $location, $anchorScroll) {
        $scope.message = "Angular!!";


        var execute = function (data) {
            $scope.user = data;
            gitHub.getRepos($scope.user)
                .then(onRepos);
        };

        var onRepos = function (data) {
            $scope.repos = data;
            $location.hash("userDetails");
            $anchorScroll();
        };

        $scope.search = function (username) {
            $log.info("Searching for " + username);
           gitHub.getUser(username)
                .then(execute, OnError);
                if(countInterval){
                    $interval.cancel(countInterval);
                    $scope.countDown=null;
                }

        };
          $scope.username="Angular";

        var decrementCountDown=function(){
            $scope.countDown -=1;
            if($scope.countDown < 1){
                $scope.search($scope.username);
            }
        };

        var countInterval=null;
        var startCountDown=function(){
           countInterval= $interval(decrementCountDown, 1000, $scope.countDown);
        };

        var OnError = function (reason) {
            $scope.error = "Could not fetch the User."
        };

      
        $scope.repoSortOrder="-stargazers_count";
        $scope.countDown=5;
        startCountDown();
    };

    app.controller("MainController", MainController);

})();
