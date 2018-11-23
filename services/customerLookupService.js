
 mainApp.service('DeviceAliesService', DeviceAliesService);
 mainApp.service('GatewayAliesService',GatewayAliesService);
 mainApp.service('GatewayOwnerService',GatewayOwnerService);
 mainApp.service('AddressService', AddressService);

 function DeviceAliesService($http) {
  this.getDeviceAlies = function getDeviceAlies(dsn) {
    return $http.get('https://admin-dev.salusconnect.io/oem/apiv1/dsns/' + dsn+ '.json',{
    	headers:{
    		 'Authorization': 'auth_token be08d5a79efc42da8b513bbb433735f4'
    	}
    });
  };
}

 function GatewayAliesService($http){

 	this.getGatewayAlies = function getGatewayAlies(gatewayDsn){
 		return $http.get('https://admin-dev.salusconnect.io/oem/apiv1/dsns/' + gatewayDsn+ '.json',{
    	headers:{
    		 'Authorization': 'auth_token be08d5a79efc42da8b513bbb433735f4'
    	}
    });
 	};
 }

 function GatewayOwnerService($http){

 	this.getGatewayOwner= function getGatewayOwner(userId){
 		return $http.get('https://admin-dev.salusconnect.io/oem/users/' + userId+ '.json',{
    	headers:{
    		 'Authorization': 'auth_token be08d5a79efc42da8b513bbb433735f4'
    	}
    });
 	};
 }

 function AddressService($http){

 	this.getAddress= function getAddress(id){

 		return $http.get('https://admin-dev.salusconnect.io/oem/apiv1/devices/'+id+'/addr.json',{
    	headers:{
    		 'Authorization': 'auth_token be08d5a79efc42da8b513bbb433735f4'
    	}
    });

 	}
 }