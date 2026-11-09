import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AssignmentForm() {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/assignments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          dueDate
        })
      });

      if (!res.ok) {
        throw new Error(`Failed to create assignment: ${res.status}`);
      }

      navigate("/");

    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Assignment</h2>

      {status === "error" && (
        <p role="alert" style={{ color: "red" }}>
          Error: {error}
        </p>
      )}

      <label htmlFor="assignment-name">
        Assignment Name
      </label>

      <input
        id="assignment-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Assignment name"
        required
      />

      <label htmlFor="assignment-date">
        Due Date
      </label>

      <input
        id="assignment-date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />

      <button
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Saving..." : "Save Assignment"}
      </button>
    </form>
  );
}