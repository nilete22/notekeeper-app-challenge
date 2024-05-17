const baseurl = import.meta.env.VITE_BASE_URL;

const URL_PATH = 'notes';

const URL_FETCH = `${baseurl}/${URL_PATH}`;

const getNotes = () => {
    return fetch(URL_FETCH)
    .then(response => response.json())
    .then((data)=>data.notes);
};

const createNote = (newNote) => {
    return fetch(URL_FETCH, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newNote)
    }).then(response => response.json())
    .catch(error => {
        console.error('Error al crear la nota: ', error);
    });
}

const updateNotes = (id, updatedNote) => {
    const URL = `${URL_FETCH}/${id}`;
    return fetch(URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedNote)
    }).then(response => response.json())
    .catch(error => {
        console.error('Error al actualizar la nota: ', error);
    });
}

const deleteNotes = (id) => {
    const URL = `${URL_FETCH}/${id}`;
    return fetch(URL, {
        method: 'DELETE'
    }).then(response => response.json())
    .catch(error => {
        console.error('Error al eliminar la nota: ', error);
    });
}
const notesServices = {
    getNotes,
    createNote,
    updateNotes,
    deleteNotes
};
export default notesServices;