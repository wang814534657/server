/**
 * Created by Administrator on 2017/10/9.
 */
app.controller('menucon',['$scope','userdatafile',function ($scope,userdatafile) {
       userdatafile.getdatajson().then(function(res){
           console.log(res);
           $scope.menu = res;
       })
}]);