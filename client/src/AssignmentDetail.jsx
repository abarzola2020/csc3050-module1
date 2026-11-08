import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function AssignmentDetail() {
  const { id } = useParams();
  const [status, setStatus] = useState("loading");
  const [assignment, setAssignment] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/assignments/${id}`);
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json();
        setAssignment(data);
        setStatus("success");
      } catch (err) {
        setError(err.message);
        setStatus("error");
      }
    }
    load();
  }, [id]);

  if (status === "loading") return <p>Loading details...</p>;
  if (status === "error") return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Assignment Detail</h2>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <Link to="/">Volver a la lista</Link>
    </div>
  );
}