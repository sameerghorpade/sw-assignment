const request = require("supertest");
let server = require("../../app");

describe("/api/products", () => {
  beforeEach(() => {});
  afterEach(() => {
    server.close();
  });
  describe("GET /:consumption", () => {
    it("should return products if valid consumption kWh is passed", async () => {
      var consumption = 3500;
      var res = await  request(server)
        .get("/api/products/" + consumption);
        expect(res.status).toBe(200);
         
        expect(res.body.some(g => g.tariffName === 'basic electricity tariff')).toBeTruthy();
        expect(res.body.some(g => g.annualCost === '830 €/year')).toBeTruthy();
        expect(res.body.some(g => g.tariffName === 'Packaged tariff')).toBeTruthy();
        expect(res.body.some(g => g.annualCost === '800 €/year')).toBeTruthy();
         
    });
  });

  describe("GET /:consumption", () => {
    it("should return 404 if invalid consumption is passed", () => {
      const invalidComsumption = ["xyb", -123, 0];
       invalidComsumption.forEach(async (input)=> {
        var res = await request(server)
        .get("/api/products/" + input);
        expect(res.status).toBe(400);
       })
    });
  });
});
