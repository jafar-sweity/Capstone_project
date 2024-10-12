import supertest from "supertest";
const app = require("../app"); // Import your Express app

describe("GET /version", () => {
  it("should return the version", async () => {
    const res = await request(app).get("/version");
    expect(res.statusCode).toEqual(200);
    expect(res.body.version).toBe("v0.0.1");
  });
});
