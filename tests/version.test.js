import request from "supertest"; // Import request from supertest
import app from "../app"; // Import your Express app

describe("GET /version", () => {
  it("responds with the app version", async () => {
    const response = await request(app).get("/version"); // Use request to test the route
    expect(response.statusCode).toBe(200);
    expect(response.body.version).toBeDefined(); // Adjust this assertion based on your response structure
  });
});
