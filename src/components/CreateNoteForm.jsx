import { useState } from "react";

import PropTypes from "prop-types";

export const CreateNoteForm = ({ handleNewNote }) => {

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    important: false,
    status: "pending",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const addNewNote = async (e) => {
    e.preventDefault();
    handleNewNote(formData);
    setFormData({
      name: "",
      description: "",
      important: false,
      status: "pending",
      dueDate: "",
    });
  };

  const formContainerStyles = {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "12px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
  };

  const inputStyles = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    marginBottom: "20px",
  };

  const checkboxStyles = {
    marginRight: "10px",
    marginBottom: "20px",
  };

  const selectStyles = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    marginBottom: "20px",
  };

  const buttonStyles = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={formContainerStyles}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Create new note</h2>
      <form onSubmit={addNewNote}>
        <div>
          <label htmlFor="name">Name: </label>
          <input style={inputStyles} name="name" id="name" type="text" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input style={inputStyles} id="description" name="description" type="text" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="important">Important </label>
          <input style={checkboxStyles} id="important" name="important" type="checkbox" checked={formData.important} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="status">State: </label>
          <select style={selectStyles} id="status" name="status" value={formData.status} onChange={handleChange} required >
            <option value="done">Done</option>
            <option value="pending">Pending</option>
            <option value="in progress">In progress</option>
          </select>
        </div>
        <div>
          <label htmlFor="dueDate">Due date: </label>
          <input style={inputStyles} id="dueDate" name="dueDate" type="date" value={formData.dueDate} onChange={handleChange} required />
        </div>
        <div>
          <button style={buttonStyles} type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};


CreateNoteForm.propTypes = {
  handleNewNote: PropTypes.func.isRequired,
};