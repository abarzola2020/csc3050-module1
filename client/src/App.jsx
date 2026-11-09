import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import AssignmentList from "./components/AssignmentList.jsx";
import AssignmentDetail from "./components/AssignmentDetail.jsx";
import AssignmentForm from "./components/AssignmentForm.jsx";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <header className="site-header">
        <h1>Assignment Tracker</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">All Assignments</Link>
            </li>
            <li>
              <Link to="/assignments/new">Add Assignment</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<AssignmentList />} />
          <Route path="/assignments/new" element={<AssignmentForm />} />
          <Route path="/assignments/:id" element={<AssignmentDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}