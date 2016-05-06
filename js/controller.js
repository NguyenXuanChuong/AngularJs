// JavaScript Document

var app = angular.module('myApp',["xeditable"]);

app.run(function(editableOptions) {
	editableOptions.theme = 'bs3';
});

app.controller('myController', function($scope, $filter, $q, $http){
	
	$http.get("json/customers.json").then(function (response) {
			  $scope.person = response.data.records;
		  });
	
	
});
