 mainApp.directive("tableDirective", function(){
     return {
            scope: {
                controllerdata: '='
            },
            templateUrl: './views/table-directive.html' ,
            restrict: 'E'
        }
 });