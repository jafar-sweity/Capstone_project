import request from "supertest"; // Import request from supertest
import app from "../app"; // Adjust the path based on your file structure

describe("GET /version", () => {
  it("responds with the app version", async () => {
    const response = await request(app).get("/version");
    expect(response.statusCode).toBe(200);
    expect(response.body.version).toBeDefined();
  });
});
