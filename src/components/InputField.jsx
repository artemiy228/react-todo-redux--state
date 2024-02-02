import React from 'react';

const InputField = ({handleInput, handleSubmit, text}) => {
  return (
    <div>
      <input value={text} onChange={(e) => handleInput(e.target.value)}/>
      <button onClick={handleSubmit}>Add Post</button>
    </div>
  );
};

export default InputField;