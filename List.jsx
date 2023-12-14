import React, {useState, useRef,useEffect} from "react";
import TodoEditor from "./TodoEditor";
import {setPageTitle} from "../20191526/util.js";
import TodoList from "./TodoList";
import './List.css'
function FormattedDate()
{
  const Today = new Date();
  return(

<h3>{Today.getFullYear()}년 {Today.getMonth() + 1}월 {Today.getDate()}일</h3>
  )
}
function List(){
  useEffect(()=>{
    setPageTitle("운동 일지")
},[]);
  useEffect(()=>{
   
    const rawData = localStorage.getItem('todo');
    if (!rawData) {
      return;
    };
    const localData = JSON.parse(rawData);
    if (localData.length === 0) {
      return;
    };
    localData.sort((a,b)=> Number(b.id) - Number(a.id));
    idRef.current = localData[0].id + 1;

    setTodo(localData);
  },[]);
  const [todo, setTodo] = useState([]);
  const idRef = useRef(0);

  function onCreate(content){
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };
    const newTodo = [newItem, ...todo];
    setTodo(newTodo);
    localStorage.setItem('todo', JSON.stringify(newTodo));
    idRef.current += 1;
  }

  function onUpdate(targetId) {
    const newTodo = todo.map((item)=>
    item.id === targetId
    ? {...item, isDone: !item.isDone}
    : item
    );
    setTodo(newTodo);
    localStorage.setItem('todo', JSON.stringify(newTodo));
  }

  function onDelete(targetId) {
    const newTodo = todo.filter((item)=>item.id !== targetId);
    setTodo(newTodo);
    localStorage.setItem('todo', JSON.stringify(newTodo));
  }

  return(

    <div className="List">
      
      <h1>운동 일지</h1>
      <FormattedDate/>
      <TodoEditor onCreate={onCreate}></TodoEditor>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} ></TodoList>
    </div>
  );
};
export default List;