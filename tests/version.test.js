import app from "../app";
describe("GET /version", () => {
  it("responds with the app version", async () => {
    const response = await request(app).get("/version");
    expect(response.statusCode).toBe(200);
    expect(response.body.version).toBeDefined();
  });
});
