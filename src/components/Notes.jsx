import React, { useEffect, useState } from 'react';
import CreateNotes from './CreateNotes';
import Note from './Note';
import { v4 as uuid } from 'uuid';  

function Notes() {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("Notes")));
  const [editToggle, setEditToggle] = useState(null);  


  const saveHandler = () => {
    if(inputText){

      if (editToggle) {
        setNotes(
          notes.map((note) =>
            note.id === editToggle ? { ...note, text: inputText } : note
          )
        );
      } else {
        setNotes((prevNotes) => [
          ...prevNotes,
          {
            id: uuid(),
            text: inputText,
          },
        ]);
      }
        setInputText("");
        setEditToggle(null); 
    }
    
  };// Moved these two lines inside the else block
  

  const editHandler = (id, text) => {
    setEditToggle(id);
    setInputText(text);
  };

  const deleteHandler =(id)=>{
    const newNotes = notes.filter(n=> n.id !==id)
    setNotes(newNotes)
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));  
  }, [notes]);

  return (
    <div className='notes'>
      {notes.map((note) => (
        editToggle === note.id ? (
          <CreateNotes
            key={note.id}  
            inputText={inputText}
            setInputText={setInputText}
            saveHandler={saveHandler}
          />
        ) : (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
        )
      ))}
      {editToggle ===null ?
      <CreateNotes
        inputText={inputText}
        setInputText={setInputText}
        saveHandler={saveHandler}
      />: <></>}
    </div>
  );
}

export default Notes;
