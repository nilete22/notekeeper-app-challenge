import { useEffect, useState } from "react";
import notesServices from "../services/notes/notesServices";

export const useNotes = () => {
  const [notes, setNotes] = useState([]);

  const handleNewNotesValue = (newValue) => {
    setNotes(newValue);
  };

  useEffect(() => {
    const getAllNotesHandler = async () => {
      notesServices
        .getNotes()
        .then((data) => handleNewNotesValue(data.notes))
        .catch((error) =>
          console.error("Error al carregar totes les notes:", error),
        );
    };
    getAllNotesHandler();
  }, []);

  const handleNewNote = async (noteValues) => {
    try {
      await notesServices.createNote(noteValues);
      const data = await notesServices.getNotes();
      handleNewNotesValue(data.notes);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUpdateNote = async (id, noteValues) => {
    try {
      await notesServices.updateNotes(id, noteValues);
      const data = await notesServices.getNotes();
      handleNewNotesValue(data.notes);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleDeleteNote = async (id) => {
    try {
      await notesServices.deleteNotes(id);
      const data = await notesServices.getNotes();
      handleNewNotesValue(data.notes);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return {
    notes,
    handleNewNotesValue,
    handleNewNote,
    handleDeleteNote,
    handleUpdateNote,
  };
};