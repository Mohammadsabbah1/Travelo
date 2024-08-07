const request = require('supertest');
const app = require('../src/server/server'); // Import your server app

describe('Server Endpoints', () => {
  // Test the root endpoint
  test('should serve the main HTML file', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/html/);
  });

  // Test the /coordinates endpoint
  test('should return coordinates for a given location', async () => {
    const response = await request(app)
      .post('/coordinates')
      .send({ location: 'New York' });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toHaveProperty('lat');
    expect(response.body).toHaveProperty('lng');
  });

  // Test the /weather endpoint
 

  // Test the /image endpoint
  test('should return an image URL for a given location', async () => {
    const response = await request(app)
      .post('/image')
      .send({ location: 'New York' });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toHaveProperty('imageUrl');
  });

  // Test the /airports endpoint
  test('should serve the airports JSON file', async () => {
    const response = await request(app).get('/airports');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  });
});
