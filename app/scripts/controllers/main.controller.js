angular.module('markticle').controller('MainController', function($scope) {
  $scope.marks = [
        {
          title: 'Smashing magazine...asdasds',
          url: 'http://www.smashingmagazine.com/'
        },
        {
          title: 'Markticle',
          url: 'https://markticle.com'
        },
        {
          title: 'OWASP',
          url: 'https://owasp.org'
        }
    ];
    console.log('here')
});