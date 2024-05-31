export const DeleteButton = ({ id, handleDeleteNote }) => {
  const buttonStyles = {
    padding: "8px 16px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <button
      onClick={() => {
        handleDeleteNote(id);
      }}
      style={buttonStyles}
    >
      Delete
    </button>
  );
};
