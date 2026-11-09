//The controller does all of the backend opperations
//randomUUID is used to generate unique IDs for assignments
import { randomUUID } from "crypto";

// In server storage! (will be lost on server restart)
let assignments = [];

// Validate assignment fields
function isValidAssignment(name, dueDate) {
  if (
    typeof name !== "string" ||
    name.trim() === "" ||
    typeof dueDate !== "string"
  ) {
    return false;
  }

  // Check YYYY-MM-DD format and actual calendar date
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dueDate)) {
    return false;
  }

  const date = new Date(`${dueDate}T00:00:00.000Z`);

  return !Number.isNaN(date.getTime()) &&
    date.toISOString().slice(0, 10) === dueDate;
}

// GET all assignments
function getAssignments(req, res) {
  res.status(200).json(assignments);
}

// GET one assignment
function getAssignmentById(req, res) {
  const assignment = assignments.find(
    item => item.id === req.params.id
  );

  if (!assignment) {
    return res.status(404).json({
      error: "Assignment not found"
    });
  }

  res.status(200).json(assignment);
}

// POST create assignment
function createAssignment(req, res) {
        //req.body ?? {};, if req.body is null or undefined, it will default to an empty object, else server crashes
  const { name, dueDate } = req.body ?? {};

  if (!isValidAssignment(name, dueDate)) {
    return res.status(400).json({
      error: "Valid assignment name and due date are required"
    });
  }

  const newAssignment = {
    id: randomUUID(),
    name: name.trim(),
    dueDate
  };

  assignments.push(newAssignment);

  res.status(201).json(newAssignment);
}

// PUT update assignment
function updateAssignment(req, res) {
  const { name, dueDate } = req.body;

  if (!isValidAssignment(name, dueDate)) {
    return res.status(400).json({
      error: "Valid assignment name and due date are required"
    });
  }

  const index = assignments.findIndex(
    item => item.id === req.params.id
  );

  if (index === -1) {
    return res.status(404).json({
      error: "Assignment not found"
    });
  }

  assignments[index] = {
    id: req.params.id,
    name: name.trim(),
    dueDate
  };

  res.status(200).json(assignments[index]);
}

// DELETE assignment
function deleteAssignment(req, res) {
  const index = assignments.findIndex(
    item => item.id === req.params.id
  );

  if (index === -1) {
    return res.status(404).json({
      error: "Assignment not found"
    });
  }

  assignments.splice(index, 1);

  res.status(204).end();
}

export {
  getAssignments,
  getAssignmentById,
  createAssignment,
  updateAssignment,
  deleteAssignment
};