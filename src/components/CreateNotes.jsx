import React from 'react';
import './Notes.css';

function CreateNotes({ inputText, setInputText, saveHandler }) {
  const char = 100;
  const charLimit = char - inputText.length;  
  
  return (
    <div className='note'>
      <textarea
        cols={8}
        rows={7}
        value={inputText}
        placeholder='Type here...'
        onChange={(e) => setInputText(e.target.value)}
        maxLength={100}
      ></textarea>
      <div className='note_footer'>
        <label className='label'>{charLimit} characters</label>
        <button className='note_save' onClick={saveHandler}>
          Save Notes
        </button>
      </div>
    </div>
  );
}

export default CreateNotes;
