(function () {

    var app = angular.module("AngularApp");


    function MainController($scope, $interval, $location, ) {
       

        var decrementCountDown = function () {
            $scope.countDown -= 1;
            if ($scope.countDown < 1) {
                $scope.search($scope.username);
            }
        };


        var countInterval = null;
        var startCountDown = function () {
            countInterval = $interval(decrementCountDown, 1000, $scope.countDown);
        };


        $scope.search = function (username) {
            if (countInterval) {
                $interval.cancel(countInterval);
                $scope.countDown = null;
            }

        };

        $scope.username = "Angular";
        $scope.countDown = 5;
        startCountDown();
    };

    app.controller("MainController", MainController);

})();
