
const request = require("supertest")
const baseURL = "http://localhost:5001"
const ObjectId = require("mongodb").ObjectId;

describe('GET test', () => {

  it('should return an array of loyalty program', async () => {
   
    const res = await request(baseURL).get("/record");
    expect(res.statusCode).toBe(200); // Check status code is correct
    expect(res.body).toEqual(expect.anything());  // Check the body of response is not null or undefined
  
  })
  it ('should returns an array of jsons of transactions',async()=>
  {
    const res = await request(baseURL).get("/transactions");
    expect(res.statusCode).toBe(200); // Check status code is correct
    expect(res.body).toEqual(expect.anything());  // Check the body of response is not null or undefined
  }
  )

  it ('should return a single loyalty program',async ()=>
  { 

    const res = await request(baseURL).get("/record/62d784e44a7de48ac4e31d3a");
    expect(res.statusCode).toBe(200); // Check status code is correct
    expect(res.body).toEqual(expect.anything());  // Check the body of response is not null or undefined
  })
  it ('should throw error as it is trying to access an object not in the database',async ()=>
  { let myquery = { _id: "62d784e44a7de48ac4e31d3aa" };

    const res = await request(baseURL).get("/record/62d784e44a7de48ac4e31d3aa");
    expect(res.statusCode).toBe(500); // Check status code is correct
    expect(res.body).toEqual(expect.anything());  // Check the body of response is not null or undefined
  })

});

describe("POST test",()=>
{
it ('should add a record into the database',async () => {
    const testbody = {
        "name":"test123",
        "position":"test123",
        "level":2
      };
    const response = await request(baseURL).post("/record/add").send(testbody);
   
    await request(baseURL).delete(`/${response.body.insertedId}`);
    expect(response.statusCode).toBe(201);  // Check if post request has succeeded

});

});
