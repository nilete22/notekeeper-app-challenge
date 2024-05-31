import { useState } from "react";

export const UpdateNoteForm = ({ note, handleUpdateNote }) => {
  const [formData, setFormData] = useState({
    name: note.name || "",
    description: note.description || "",
    important: note.important || false,
    status: note.status || "pending",
    dueDate: note.dueDate || "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateNote(note.id, formData);
  };

  const formContainerStyles = {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#7FE4FF",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  };

  const titleStyles = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  };

  const inputStyles = {
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
      <h2 style={titleStyles}>Update Note:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input style={inputStyles} name="name" id="name" type="text" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input style={inputStyles} id="description" name="description" type="text" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="important">Important: </label>
          <input style={{ marginRight: "10px" }} id="important" name="important" type="checkbox" checked={formData.important} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="status">Status: </label>
          <select style={inputStyles} id="status" name="status" value={formData.status} onChange={handleChange} >
            <option value="done">done</option>
            <option value="pending">pending</option>
            <option value="in progress">in progress</option>
          </select>
        </div>
        <div>
          <label htmlFor="dueDate">Due Date: </label>
          <input style={inputStyles} id="dueDate" name="dueDate" type="date" value={formData.dueDate} onChange={handleChange} />
        </div>
        <div style={{ textAlign: "center" }}>
          <button style={buttonStyles} type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};
