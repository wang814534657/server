app.directive('menu', function () {
    return {
        restrict: 'EA',  // used E because of element
        templateUrl: './view/template/_menu.html',
        scope: {
            menu: "=menulist"
        },
        link: function (scope, ele, attr, controller) {
             setTimeout(function () {
                  var swiper = new Swiper(".banner .swiper-container",{
                      loop:true,
                      autoplay:1000,
                      pagination:".swiper-pagination"
                  });
                 var myswiper = new Swiper(".rush .swiper-container",{
                     slidesPerView : 2.5,
                     spaceBetween : 10,
                 });


                 // 得到当前时间
                 var datetime = function (){
                     var nowtime = new Date().toLocaleTimeString();
                     $("#date").html(nowtime);
                 }
                setInterval(datetime,1000);
             },10);

          //    数字时钟







        }
    };
});