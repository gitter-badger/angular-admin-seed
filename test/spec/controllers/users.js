'use strict';

describe('Controller: UserCtrl', function () {

  // load the controller's module
  beforeEach(module('sbAdminApp'));

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
    expect(scope.pre_page).toBe(1);
  });
});
