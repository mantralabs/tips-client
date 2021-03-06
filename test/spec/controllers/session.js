'use strict';

describe('Controller: UserCtrl', function () {

  // load the controller's module
  beforeEach(module('tipsApp'));

  var UserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserCtrl = $controller('UserCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});



//changing the SessionCtrl controller to UserCtrl

// 'use strict';

// describe('Controller: SessionCtrl', function () {

//   // load the controller's module
//   beforeEach(module('tipsApp'));

//   var SessionCtrl,
//     scope;

//   // Initialize the controller and a mock scope
//   beforeEach(inject(function ($controller, $rootScope) {
//     scope = $rootScope.$new();
//     SessionCtrl = $controller('SessionCtrl', {
//       $scope: scope
//     });
//   }));

//   it('should attach a list of awesomeThings to the scope', function () {
//     expect(scope.awesomeThings.length).toBe(3);
//   });
// });
