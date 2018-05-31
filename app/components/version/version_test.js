'use strict';

describe('loop.version module', function() {
  beforeEach(module('loop.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
