import { Note } from "./";
import PropTypes from 'prop-types';

export const NotesList = ({ notes, handleDeleteNote, handleUpdateNote }) => {
  const containerStyles = {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#393939",
    borderRadius: "12px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
  };

  const headerStyles = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#7FE4FF",
  };

  const listItemStyles = {
    marginBottom: "10px",
  };

  return (
    <div style={containerStyles}>
      <h2 style={headerStyles}>Notes</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {notes.map((note) => (
          <li key={note.id} style={listItemStyles}>
            <Note note={note} handleDeleteNote={handleDeleteNote} handleUpdateNote={handleUpdateNote}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleUpdateNote: PropTypes.func.isRequired
};
