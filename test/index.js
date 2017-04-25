import http from 'http';
import assert from 'assert';

import start, { address, port } from '../lib/server.js';

describe('Testing server setup', () => {

  before(() => start());

  it('should return status 200', done => {
    http.get(`http://${address}:${port}`, res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });

});
