// JavaScript Document

var app = angular.module('myApp', []);

app.controller('myController', function($scope, $http){
	
	$http.get("json/customers.json").then(function (response) {
			  $scope.person = response.data.records;
		  });
	
	
	
	
});
