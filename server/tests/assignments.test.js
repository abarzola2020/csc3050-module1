
//tests for the assignment API endpoints

import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../app.js";

describe("Assignment API", () => {

  it("GET /api/assignments returns 200 and an array", async () => {
    const res = await request(app)
      .get("/api/assignments");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("POST /api/assignments creates an assignment", async () => {
    const res = await request(app)
      .post("/api/assignments")
      .send({
        name: "Vitest Homework",
        dueDate: "2026-11-15"
      });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe("Vitest Homework");
    expect(res.body.dueDate).toBe("2026-11-15");
    expect(res.body.id).toBeDefined();
  });

  it("POST rejects missing due dates with 400", async () => {
    const res = await request(app)
      .post("/api/assignments")
      .send({
        name: "Invalid Assignment"
      });

    expect(res.status).toBe(400);
  });

  it("GET nonexistent assignment returns 404", async () => {
    const res = await request(app)
      .get("/api/assignments/does-not-exist");

    expect(res.status).toBe(404);
  });

});
