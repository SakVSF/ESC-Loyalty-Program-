const { json } = require('body-parser')
const request = require('supertest')
const app = require('../server')

// Test for GET
describe('GET Endpoints', () => {
  it('should return an array of loyalty program', async () => {
    const res = await request(app)
      .get('/routes/record')
      
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty(json)  /// Check if the result is a list
  })

  it('array of jsons of transactions', async () => {
    const res = await request(app)
      .get('/routes/record')
      
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty(json)  /// Check if the result is a list
  })

})


describe('POST /login', function() {
    it('responds with json', function(done) {
    request(app)
      .post('/api/auth/login')
      .send({email: 'user@email.com', password: 'yourpassword'}
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
    });
  });