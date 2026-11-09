
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

//details button! could potentially add comment section though that isnt implemented in server yet

export default function AssignmentDetail() {
  const { id } = useParams();

  const [status, setStatus] = useState("loading");
  const [assignment, setAssignment] = useState(null);
  const [error, setError] = useState("");

  // New state for editing
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // GET: Load assignment details
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/assignments/${id}`);

        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }

        const data = await res.json();

        setAssignment(data);
        setName(data.name);
        setDueDate(data.dueDate);
        setStatus("success");
      } catch (err) {
        setError(err.message);
        setStatus("error");
      }
    }

    load();
  }, [id]);

  // PUT: THE EDIT FORM & BUTTON!
  async function handleUpdate(e) {
    e.preventDefault();
    //conditional rendering...
    setIsSaving(true);
    // Clear any previous error
    setError("");

    try {
      const res = await fetch(`/api/assignments/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, dueDate })
      });

      if (!res.ok) {
        throw new Error(`Update failed: ${res.status}`);
      }

      const updatedAssignment = await res.json();

      setAssignment(updatedAssignment);
      setIsEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSaving(false);
    }
  }

  if (status === "loading") {
    return <p role="status">Loading assignment...</p>;
  }

  if (status === "error") {
    return <p role="alert">Error: {error}</p>;
  }

  return (
    <section>
      <h2>Assignment Details</h2>

      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <label htmlFor="edit-name">Assignment name</label>
          <input
            id="edit-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="edit-date">Due date</label>
          <input
            id="edit-date"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />

          <button type="submit" disabled={isSaving}>
            {isSaving ? "Saving..." : "Save Changes"}
          </button>

          <button
            type="button"
            disabled={isSaving}
            onClick={() => {
              setName(assignment.name);
              setDueDate(assignment.dueDate);
              setError("");
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </form>
      ) : (
        <article>
          <h3>{assignment.name}</h3>
          <p>Due: {assignment.dueDate}</p>

          <button
            type="button"
            onClick={() => setIsEditing(true)}
          >
            Edit Assignment
          </button>
        </article>
      )}

      {error && <p role="alert">{error}</p>}

      <p>
        <Link to="/">Back to assignments</Link>
      </p>
    </section>
  );
}
