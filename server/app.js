//app.js defines the API while server.js starts it.
import express from "express";
import assignmentRoutes from "./routes/assignments.js";

const app = express();

app.use(express.json());

app.use("/api/assignments", assignmentRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({
      error: "Invalid JSON in request body"
    });
  }

  console.error(err);
  res.status(500).json({
    error: "Internal server error"
  });
});

export default app;
