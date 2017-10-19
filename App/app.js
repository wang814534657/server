var app = angular.module("app", ["ngRoute", "ionic"]);

app.config(function ($routeProvider) {
    $routeProvider
        //进行中
        .when("/underway", {
            templateUrl: "view/menu.html",
            controller: "menucon"
        })
       //已揭晓
        .when("/published", {
            templateUrl: "view/slider.html",
            controller: "slidercon"
        })

      //已中奖

        .when("/success", {
            templateUrl: "view/tab.html",
            controller: "tabcon"
        })


});