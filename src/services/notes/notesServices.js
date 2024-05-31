const BASE_URL = import.meta.env.VITE_BASE_URL;
const URL_PATH = "notes";
const URL_FETCH_NOTES = `${BASE_URL}/${URL_PATH}`;

const getNotes = () => {
  return fetch(URL_FETCH_NOTES, { 
    method: "GET" }).then((response) => {
    return response.json();
  });
};

const createNote = (newNote) => {
  return fetch(URL_FETCH_NOTES, {
    method: "POST",
    body: JSON.stringify(newNote),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const deleteNotes = (id) => {
  return fetch(`${URL_FETCH_NOTES}/${id}`, {
    method: "DELETE",
  });
};

const updateNotes = (id, updatedNote) => {
  return fetch(`${URL_FETCH_NOTES}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedNote),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default {
    getNotes,
    createNote,
    deleteNotes,
    updateNotes,
};