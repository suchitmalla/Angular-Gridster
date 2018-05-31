'use strict';

describe('loop', function() {

  it('should automatically redirect to /dashboard when location hash/fragment is empty', function() {
    browser.get('../Loop-Dashboard/app/index_dev.html#!/dashboard');
    expect(browser.getLocationAbsUrl()).toMatch("/dashboard");
  });

  describe('dashboard', function() {

    beforeEach(function() {
      browser.get('../Loop-Dashboard/app/index_dev.html#!/dashboard');
    });

    it('should render dashboard when user navigates to /dashboard', function() {
      expect(element.all(by.id('version')).first().getText()).toMatch("Loop VERSION: v0.1");
    });
  });
});
