import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AssignmentList() {
  const [status, setStatus] = useState("loading");
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/assignments");

        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }

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

  if (status === "loading") {
    return <p role="status">Loading assignments...</p>;
  }

  if (status === "error") {
    return <p role="alert">Error: {error}</p>;
  }
  async function handleDelete(id) {
    try {
      const res = await fetch(`/api/assignments/${id}`, {
        method: "DELETE"
      });

      if (!res.ok) {
        throw new Error(`Delete failed: ${res.status}`);
      }

      setAssignments((current) =>
        current.filter((assignment) => assignment.id !== id)
      );

      setMessage("Assignment removed successfully!");
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  }
  //search bar functionality
  const filteredAssignments = assignments.filter((assignment) =>
  assignment.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  
  

  return (
    <section id="list">
      <h2>List of Assignments</h2>

      <label htmlFor="search-input">Search assignments</label>
      <input
        type="search"
        id="search-input"
        placeholder="Search by assignment name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredAssignments.length === 0 ? (
        <p>
          {assignments.length === 0
            ? "No assignments yet. Add one to get started!"
            : "No assignments match your search."}
        </p>
      ) : (
        <ul className="cards" id="assignment-list">
          {filteredAssignments.map((assignment) => (
            <li className="assignment-card" key={assignment.id}>
              <article>
                <h3>{assignment.name}</h3>

                <p>
                  Due:{" "}
                  <time dateTime={assignment.dueDate}>
                    {assignment.dueDate}
                  </time>
                </p>

                <Link to={`/assignments/${assignment.id}`}>
                  View details
                </Link>

                <button
                  type="button"
                  onClick={() => handleDelete(assignment.id)}
                >
                  Remove
                </button>
              </article>
            </li>
          ))}
        </ul>
      )}

      <p role="status" aria-live="polite">
        {message}
      </p>
    </section>
  );
  
}