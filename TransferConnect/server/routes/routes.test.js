
const request = require("supertest")
const baseURL = "http://localhost:5001"
const ObjectId = require("mongodb").ObjectId;
const url =
"mongodb+srv://hith:chun@merntest0.hqr9i9x.mongodb.net/merntest0?retryWrites=true&w=majority";
const mongodb = require("mongodb").MongoClient;
describe('GET test', () => {

  it('should return an array of loyalty program', async () => {
   
    const res = await request(baseURL).get("/record");
    expect(res.statusCode).toBe(200); // Check status code is correct
    expect(res.body).toEqual(expect.anything());  // Check the body of response is not null or undefined
  
  })


  it ('should return a single loyalty program',async ()=>
  { 
    
    const res = await request(baseURL).get("/record/62d784e44a7de48ac4e31d3a");
    expect(res.statusCode).toBe(200); // Check status code is correct
    expect(res.body).toEqual(expect.anything());  // Check the body of response is not null or undefined
  })
  it ('should throw error as it is trying to access an object not in the database',async ()=>
  { 

    const res = await request(baseURL).get("/record/62d784e44a7de48ac4e31d3aa");
    expect(res.statusCode).toBe(500); // Check status code is correct
    expect(res.body).toEqual(expect.anything());  // Check the body of response is not null or undefined
  })

  it ('should return a transaction record given a valid member id',async ()=>
  { 
    const body= {memberid:100097739895};
    const res =  await request(baseURL).get("/getTransaction/MemberID").send(body);
    expect(res.statusCode).toBe(200); // Check status code is correct
    expect(res.body).toEqual(expect.anything());  // Check the body of response is not null or undefined
  })

  it ('should try and fetch a transaction with an invalid member id and return empty array ',async ()=>
  { 
    const body= {memberid:"6616"};
    const res =  await request(baseURL).get("/getTransaction/MemberID").send(body);
    expect(res.statusCode).toBe(200); // Check status code is correct
    expect(res.body).toEqual([]);
  
  })

  it ('should try and fetch a transaction with a valid refno and return that transaction',async ()=>
  { 
    const body= {refno:"1"};
    const res =  await request(baseURL).get("/getTransaction/refno").send(body);
    expect(res.statusCode).toBe(200); // Check status code is correct
    expect(res.body).toEqual(expect.anything());

  })
  it ('should try and fetch a transaction with an invalid request body and return empty array',async ()=>
  { 
    const body= {random:"6616"};
    const res =  await request(baseURL).get("/getTransaction/refno").send(body);

    expect(res.statusCode).toBe(200); // Check status code is correct
    expect(res.body).toEqual(null);

  
  })
  it ('should try and fetch a transaction with an invalid refno and return an empty array',async ()=>
  { 
    const body= {refno:"13"};
    const res =  await request(baseURL).get("/getTransaction/refno").send(body);
    expect(res.statusCode).toBe(200); // Check status code is correct
    expect(res.body).toEqual(null);

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


it ('should add a transaction into the database',async () => {
  const testbody = {
    
    amount: "1",
    status: "2",
    memberid: "3",
    programid: "4"

};
  const response = await request(baseURL).post("/transactions/add").send(testbody);

  expect(response.statusCode).toBe(200);  // Check if post request has succeeded

});


it ('should return a error 404 when accessing an api that does not exist', async ()=>
{
  const response = await request(baseURL).post("/transactifons/add").send({}); // wrong post address
  expect(response.statusCode).toBe(404)

})


});

describe("UPDATE TEST", ()=>
{
  it ('should update a transaction in the mongodb',()=>
  {
  
    const updates = {
      $set: {
        Description: "random"
      }
    };
    const res = mongodb.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
          if (err) throw err;
          client
              .db("TransferConnect")
              .collection("Fuzzingtest").updateOne({"RefNo":1},updates)})
  }
  )
})

describe("DELETE TEST", ()=>
{
  it ('should update a delete a record in the mongodb',()=>
  {
  
    mongodb.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
          if (err) throw err;
          client
              .db("TransferConnect")
              .collection("Fuzzingtest").deleteOne({"RefNo":1}).
  }
  )
})
})



