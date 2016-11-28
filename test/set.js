import { assert } from 'chai';
import parserStorage from '../dist/index';

describe('set localStorage', function() {

  it('should return false when key is null', function() {
    assert.equal(false, parserStorage.set(null, 'hi!'));
  });
});
