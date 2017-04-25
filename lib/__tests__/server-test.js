import http from 'http';

import start, { address, port } from '../server';

describe('Testing server setup', () => {
  beforeAll(() => start());

  test('should return status 200', () => {
    http.get(`http://${address}:${port}`, (res) => {
      expect(res.statusCode).toEqual(200);
    });
  });
});
