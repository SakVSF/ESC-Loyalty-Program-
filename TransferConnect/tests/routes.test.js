const { json } = require('body-parser')
const request = require('supertest')
const app = require('../server')

// Test for GET
describe('GET Endpoints', () => {
  it('should return an array of loyalty program', async () => {
    const res = await request(app)
      .get('/record')
    expect(res.statusCode).toEqual(200)
    
  })

  it('should get a single record by id', async () => {
    const res = await request(app)
      .get('/transactions')
    expect(res.statusCode).toEqual(200)
  })

  it('should return an array of jsons of transactions', async () => {
    const res = await request(app)
      .get('/record/:id')
    
    expect(res.statusCode).toEqual(200)
  })

})

// TEST FOR POST 

describe('POST Endpoints', function() {
    it('should create a new record in the database', function(done) {
    request(app)
      .post('/record/add')
      .send({name: 'hello123', position: 'testing123',level:'3'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
    });

    it('should create a new record in the database given a valid id', function(done) {
        request(app)
          .post('/update/:id')
          .send({params:'123',name: 'hello123', position: 'testing123',level:'3'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
        });

   
  });

  describe('DELETE', function ()
  {
    it('should delete record in the database given a valid id', function(done) {
        request(app)
          .post(':id')
          .send({params:'123',})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(202)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
        });
  })