var app = angular.module("providerApp", ['ngAnimate', 'ui.bootstrap', 'cgBusy', 'angularUtils.directives.dirPagination'])

.controller('SearchCtrl', ['$scope', '$http', function($scope, $http){
	//console.log("This is the SearchCtrl");
	$http.get('providers.json').then(function(response){
		$scope.providers = response.data;
		//console.log($scope.providers);
		
	});
	
	$scope.loadPromise = $http.get('providers.json');
	
	$scope.showProvider = function(provider){
	  //console.log("I am showProvider!");
	  if (provider.first_name) {
	    //console.log(provider.first_name +" "+ provider.last_name);
	  }
	  else if (provider.organization_name) {
	    //console.log(provider.organization_name);
	  }
	  var firstName = provider.first_name;
	  var lastName = provider.last_name;
	  var organizationName = provider.organization_name;
	  var fakeURL = "http://example.com";
	  var formData = {firstName: firstName, lastName: lastName, organizationName: organizationName};
	//  var formData = {
  //         "person" : [{
  //           firstName: firstName,
  //           lastName: lastName
  //         }],
  //         "organization" : [{
  //           organizationName: organizationName
  //         }]
  //   };
	  console.log(formData);
	  $http.post(fakeURL, formData).success(function(data){
	    console.log(data);
	    if (!data.success) {
	      console.log(data.error);
	    } 
	    else {
	      console.log("success!");
	    }
	  }); 
  };
}]);