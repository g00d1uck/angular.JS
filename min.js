var m1=angular.module('myApp',[]);
m1.controller('signUpController',function($scope){
	$scope.userdata={};
	$scope.signUpForm=function(){
		if($scope.signUpForm.$invalid)
			alert("	请检查您的信息")
		else
			alert("提交成功")
	}
})