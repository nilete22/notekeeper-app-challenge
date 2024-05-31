import PropTypes from "prop-types";
import { DeleteButton } from "./buttons";
import { UpdateNoteForm } from "./";

export const Note = ({ note, handleDeleteNote, handleUpdateNote }) => {
  const containerStyles = {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  };

  const titleStyles = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  };

  const textStyles = {
    marginBottom: "10px",
  };

  const buttonContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div style={containerStyles}>
      <h1 style={titleStyles}>{`${note.name}`}</h1>
      <p style={textStyles}>{`Description: ${note.description}`}</p>
      <p style={textStyles}>{`Important: ${note.important ? "Important" : "Not important"}`}</p>
      <p style={textStyles}>{`Status: ${note.status}`}</p>
      <p style={textStyles}>{`Due date: ${note.dueDate}`}</p>
      <div style={buttonContainerStyles}>
        <DeleteButton id={note.id} handleDeleteNote={handleDeleteNote} />
        <UpdateNoteForm note={note} handleUpdateNote={handleUpdateNote} />
      </div>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.object.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleUpdateNote: PropTypes.func.isRequired,
};
