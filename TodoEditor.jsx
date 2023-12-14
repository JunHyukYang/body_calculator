import React, {useState,useRef, useEffect} from "react";
import "./TodoEditor.css"

function TodoEditor({onCreate}) {
  const [content, setContent] = useState("");
  const inputRef=useRef(null);
  function onChangeContent(e) {
    setContent(e.target.value);
  }
  function onSubmit() {
    if(content === "") {
      inputRef.current.focus();
    } else {
      onCreate(content);
      setContent("");
    }

  }
  const handleKeyDown=(e)=>
  {
if(e.key==='Enter')
{
  onSubmit();
}
  }
  return (
    <div className="TodoEditor">
      <h3>오늘의 운동 목표</h3>
      <div className="editor_wrapper">
        <input 
        ref={inputRef}
          value = {content}
          onChange = {onChangeContent}
          onKeyDown={handleKeyDown}
          placeholder="입력"
        />
        <button className= "add-button" onClick={onSubmit}>추가</button>
      </div>
    </div>
  )
};
export default TodoEditor;

