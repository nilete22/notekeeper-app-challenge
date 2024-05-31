import { UpdateNoteForm } from "../";

import PropTypes from "prop-types";

export const UpdateButton = ({ id, setNotes }) => {
  const buttonStyles = {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const handleUpdate = () => {};

  return (
    <div>
      <button onClick={handleUpdate} style={buttonStyles}>
        Update
      </button>
      <UpdateNoteForm id={id} setNotes={setNotes} />
    </div>
  );
};

UpdateButton.propTypes = {
  id: PropTypes.string.isRequired,
  setNotes: PropTypes.func.isRequired,
};
