const supertest = require("supertest");
const server = require("../server");
const db = require("../data/config");

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe("users integration tests", () => {
  it("GET /users", async () => {
    const res = await supertest(server).get("/users");

    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("application/json");
    expect(res.body).toHaveLength(3);
    expect(res.body[0].name).toBe("Bob");
    expect(res.body[1].age).toBe(26);
  });

  it("DELETE /users/:id", async () => {
    const res = await supertest(server).delete("/users/1");
    const users = await supertest(server).get("/users");

    expect(res.statusCode).toBe(204);
    expect(users.body).toHaveLength(2);
  });

  it("POST /users", async () => {
    const data = { name: "Elijah", age: 20 };
    const res = await supertest(server).post("/users").send(data);

    const users = await supertest(server).get("/users");

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Elijah");
    expect(res.type).toBe("application/json");
    expect(users.body).toHaveLength(4);
  });
});
