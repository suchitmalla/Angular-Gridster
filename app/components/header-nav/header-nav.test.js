describe('HeaderNavController', function () {
  beforeEach(module('loop'));

  var compile, scope, directiveElem;

  beforeEach(inject(function($compile, $rootScope){
    compile = $compile;
    scope = $rootScope.$new();
    directiveElem = getCompiledElement();
  }));

  function getCompiledElement(){
    var element = angular.element('<div>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  it('check if Header Navigation view is shown', function (){
    scope.$digest();
    expect(directiveElem).toBeDefined();
    expect(directiveElem.length).toBeGreaterThan(0);
  });
});
