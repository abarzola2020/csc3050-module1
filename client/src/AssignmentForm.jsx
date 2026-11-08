import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AssignmentForm() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/assignments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }) 
      });
      if (!res.ok) throw new Error("No se pudo crear");
      navigate("/"); // Regresa a la lista si tiene éxito
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Assignment</h2>
      {status === "error" && <p style={{color: 'red'}}>Error: {error}</p>}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre del assignment"
        required
      />
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}