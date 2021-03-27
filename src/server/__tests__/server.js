const supertest = require('supertest');
import app from './../server';
const server = supertest(app);

describe('server', () => {
    test('should get requests', async done => {
      const res = await server.get('/testCity');
      expect(res.body.city).toBe('Colorado');
      done()
    })
});