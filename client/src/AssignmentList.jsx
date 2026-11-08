import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AssignmentList() {
  const [status, setStatus] = useState("loading");
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/assignments");
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json();
        setAssignments(data);
        setStatus("success");
      } catch (err) {
        setError(err.message);
        setStatus("error");
      }
    }
    load();
  }, []);

  if (status === "loading") return <p>Loading assignments...</p>;
  if (status === "error") return <p>Error: {error}</p>;

  return (
    <div>
      <h2>All Assignments</h2>
      <ul>
        {assignments.map(a => (
          <li key={a.id || Math.random()}>
            <Link to={`/assignments/${a.id}`}>{a.name || a.title || "Assignment"} (Ver detalles)</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}