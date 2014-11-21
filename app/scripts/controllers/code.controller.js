chromeRepl = angular.module('chrome-repl', ['ui.codemirror']);
chromeRepl.controller('CodeController', [ '$scope', function($scope) {
    $scope.cmOption = {
        lineWrapping : true,
        lineNumbers: true,                
    };
    
    
    $scope.execute = function()
    {
        var code  = $scope.cmModel
        //console.log ('Invoking: ' + code);                    
        try
        {
            var result = new Function(code)()        
            if (typeof(result) != 'undefined')
                console.log('return value: ' + result)        
        }
        catch(error)
        {
            console.log('error: ' + error)
        }              
    }
    //capture log
    $scope.oldLog = console.log;
    console.log = function (message) 
        {
            var currentDate = new Date()
            var time = currentDate.getHours() + ":"   + 
                       currentDate.getMinutes() + ":" + 
                       currentDate.getSeconds();
            if (message!='')
                message = '['+ time + ']: ' + message 
            $scope.result = message+ '\n' + $scope.result            
            $scope.oldLog.apply(console, arguments);     
            if(!$scope.$$phase) 
                $scope.$apply()
        };
        
    $scope.cmModel = 'console.log(\'Hello REPL\') \n'+
                     'console.log(\'The answer is \' + (30+12))\n\n'+
                     'return \'this is the return value\''
    _scope = $scope        
    $scope.result = ""
    $scope.execute()
}]);