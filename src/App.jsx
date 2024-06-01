import { useNotes } from "./hooks";
import { NotesList, CreateNoteForm } from "./components";

function App() {
  const {
    notes,
    handleNewNote,
    handleDeleteNote,
    handleUpdateNote,
  } = useNotes();

  const containerStyles = {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#7FE4FF",
    borderRadius: "12px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
  };
  

  const formContainerStyles = {
    marginBottom: "20px",
    backgroundColor: "#393939",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={containerStyles}>
      <div style={formContainerStyles}>
        <CreateNoteForm handleNewNote={handleNewNote} />
      </div>
      <div>
        <NotesList notes={notes} handleDeleteNote={handleDeleteNote} handleUpdateNote={handleUpdateNote} />
      </div>
    </div>
  );
}

export default App;
