 mainApp.controller('CustomerCareLookupController', function($scope, $location, $http, DeviceAliesService, GatewayAliesService, GatewayOwnerService, AddressService) {

     var pathParams = $location.search();

     $scope.deviceDsn = pathParams.param;
     $scope.gateDsn = null;
     $scope.userId = null;
     $scope.Owner = null;
     $scope.Id = null;
     $scope.address = null;
     $scope.deviceType = 'Device Type A';

     $scope.deviceInfoData = [$scope.deviceDsn, $scope.deviceType];

     // console.log($scope.deviceDsn);
     // console.log("lookup");

     $scope.routeDeviceInfo = function() {
             $location.path("/deviceInfo");

         }
         //get Device alies
     DeviceAliesService.getDeviceAlies($scope.deviceDsn).then(function(response) {
          //console.log($scope.deviceInfoData)
          console.log(response);

         console.log(response.data.device.product_name);
         $scope.gateDsn = response.data.device.gateway_dsn;
           console.log('gatewaydsn',$scope.gateDsn);
         $scope.deviceInfoData.push(response.data.device.product_name);
         // console.log('tableData',$scope.deviceInfoData);

     }).then(function(response) {

         GatewayAliesService.getGatewayAlies($scope.gateDsn).then(function(response) {
              console.log(response);
             $scope.deviceInfoData.push(response.data.device.product_name);
             // console.log($scope.deviceInfoData);
             $scope.userId = response.data.device.user_id;
             $scope.Id = response.data.device.id;
              console.log($scope.Id);

         }).then(function(response) {

             GatewayOwnerService.getGatewayOwner($scope.userId).then(function(response) {
                 console.log(response);

                 $scope.Owner = response.data.firstname + ' ' + response.data.lastname;

                 //  console.log($scope.Owner);
                 $scope.deviceInfoData.push($scope.Owner);
                 // console.log($scope.deviceInfoData);
             }).then(function(response) {

                 AddressService.getAddress($scope.Id).then(function(response) {
                     console.log('Address Response',response);

                     var res = response.data.addr;
                     $scope.address = res.city + ' ' + res.country + ' ' + res.state + ' ' + res.street + ' ' + res.zip;
                     $scope.deviceInfoData.push($scope.address);
                     // console.log($scope.deviceInfoData);

                 })
             })

         })
     })

 })