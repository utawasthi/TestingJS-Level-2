import {describe , expect , test , it} from '@jest/globals'
import request from 'supertest'
import {app} from "../index"

describe("POST /sum" , () => {
  it("should reutrn the sum of two numbers" , async () => {
    const res = await request(app).post("/sum").send({
      a : 1 , 
      b : 2
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.ans).toBe(3);
  });

  it("should return the sum of two negative numbers" , async () => {
    const res = await request(app).post("/sum").send({
      a : -1 , 
      b : -2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.ans).toBe(-3);
  });

  it("should return the sum of two numbers of opposite nature" , async () => {
    const res = await request(app).post("/sum").send({
      a : 1 ,
      b : -2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.ans).toBe(-1);
  });
});

describe("POST /multiply" , () => {
  it("should reutrn the multiply of two numbers" , async () => {
    const res = await request(app).post("/multiply").send({
      a : 1 , 
      b : 2
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.ans).toBe(2);
  });

  it("should return the multiply of two negative numbers" , async () => {
    const res = await request(app).post("/multiply").send({
      a : -1 , 
      b : -2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.ans).toBe(2);
  });

  it("should return the multiply of two numbers of opposite nature" , async () => {
    const res = await request(app).post("/multiply").send({
      a : 1 ,
      b : -2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.ans).toBe(-2);
  });
});