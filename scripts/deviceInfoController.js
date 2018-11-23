 mainApp.controller('DeviceInfoController', function($scope, $http, $location, DeviceAliesService, GatewayAliesService, AddressService) {

     var pathParams = $location.search();

     $scope.gateDsn = null;
     $scope.id = null;
     $scope.country = null;

     console.log(pathParams.param);
     $scope.deviceDsn = pathParams.param;

     $scope.showOverview = true;
     $scope.showDevice = false;
     $scope.overviewArray = [$scope.deviceDsn, 'device Type A'];

     $scope.table = {

         headList: ['SERIAL#', 'MODEL', 'DEVICE NAME', 'GATEWAY NAME', 'CONNECTION STATUS', 'COUNTRY'],
         rowList: $scope.overviewArray
     }

     $scope.overview = function() {

         $scope.showOverview = true;
         $scope.showDevice = false;
     }

     $scope.device = function() {

         $scope.showOverview = false;
         $scope.showDevice = true;
     }

     DeviceAliesService.getDeviceAlies($scope.deviceDsn).then(function(response) {

         $scope.overviewArray.push(response.data.device.product_name);
         console.log($scope.overviewArray);
         $scope.gateDsn = response.data.device.gateway_dsn;
     }).then(function(response) {

         GatewayAliesService.getGatewayAlies($scope.gateDsn).then(function(response) {

             console.log(response);
             $scope.overviewArray.push(response.data.device.product_name);
             $scope.overviewArray.push(response.data.device.connection_status);
             console.log($scope.overviewArray);
             $scope.id = response.data.device.id;
         }).then(function(response) {

             AddressService.getAddress($scope.id).then(function(response) {

                 $scope.country = response.data.addr.country;
                 $scope.overviewArray.push($scope.country);
                 console.log($scope.overviewArray);

             })
         })
     })

 })