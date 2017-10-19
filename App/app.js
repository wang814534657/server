var app = angular.module("app", ["ngRoute", "ionic"]);

app.config(function ($routeProvider) {
    $routeProvider
        //������
        .when("/underway", {
            templateUrl: "view/menu.html",
            controller: "menucon"
        })
       //�ѽ���
        .when("/published", {
            templateUrl: "view/slider.html",
            controller: "slidercon"
        })

      //���н�

        .when("/success", {
            templateUrl: "view/tab.html",
            controller: "tabcon"
        })


});