const request = require('supertest')
const app = require('../app')


describe("Test all songs", () => {
  test("It should return an array of songs with their artists", async () => {
    const response = await request(app).get("/songs");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test successful single song", () => {
  test("It should return a single song with its artists", async () => {
    const response = await request(app).get("/songs/1");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('results')
    expect(response.body.results.id).toBe(1)
  });
});

describe("Test not existing single song", () => {
  test("It should return a single song with its artists", async () => {
    const response = await request(app).get("/songs/0");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('results')
    expect(response.body.results).toHaveLength(0)
  });
});

describe("Test bad type single song", () => {
  test("It should return a single song with its artists", async () => {
    const response = await request(app).get("/songs/abc");
    expect(response.statusCode).toBe(500);
  });
});

describe("Test update song", () => {
  test("It should update the song and return OK", async () => {
    const response = await request(app)
      .put("/songs/1")
      .send({
        name: 'New value'
      });
    expect(response.statusCode).toBe(200);
  });
});

describe("Test bad input update song", () => {
  test("It should fail to update the song and return 500", async () => {
    const response = await request(app)
      .put("/songs/1")
      .send({
        test: true
      });
    expect(response.statusCode).toBe(400);
  });
});

describe("Test delete song", () => {
  test("It should delete the song and return OK", async () => {
    const response = await request(app).delete("/songs/1");
    expect(response.statusCode).toBe(200);
  });
});