(function(){

var app=angular.module("AngularApp",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/main",{
            templateUrl:"main.html",
            controller:"MainController"
        })
        .otherwise({redirectTo:"/main"})

})

})();