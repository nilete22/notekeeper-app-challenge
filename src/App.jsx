import { useEffect } from "react";
import  notesServices  from "./services/notes/notesServices.js";

function App() {

  useEffect(() => {
    notesServices
      .getNotes()
      .then((notes)=>{
        console.log("Tus ntas",notes)
      });
  }, []);

  return


}

export default App
