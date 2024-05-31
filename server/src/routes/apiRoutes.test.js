// In a test file (e.g., routes.test.js)
const request = require('supertest');
const app = require('../server');

describe('GET /api/products', () => {
  it('responds with JSON', async () => {
    const response = await request(app).get('/api/products');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('products');
    expect(Array.isArray(response.body.products)).toBe(true);
  });
});