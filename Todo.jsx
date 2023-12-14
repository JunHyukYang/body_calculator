import React, {  useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import "./todo.css";
import "./todo2.css";

const Todo = () => {
  const navigate = useNavigate();
  const {id}=useParams();

  // 로컬 스토리지에서 상태를 로드하는 함수
  const loadState = (id) => {
    const savedState = localStorage.getItem(`board-${id}`);
    return savedState ? JSON.parse(savedState) : { contents: '' };
  };

  // 상태를 로컬 스토리지에 저장하는 함수
  const saveState = (state, id) => {
    localStorage.setItem(`board-${id}`, JSON.stringify(state));
  };

  const [board, setBoard] = useState(loadState(id));
  const { contents } = board; // 비구조화 할당

  useEffect(()=>
  {
    setBoard(loadState(id));
  },[id])
  useEffect(() => {
    saveState(board, id);
  }, [board, id]);

  const onChange = (event) => {
    const { value, name } = event.target; // event.target에서 name과 value만 가져오기
    setBoard({
      ...board,
      [name]: value,
    });
  };

 const saveBoard = async () => {
    try {
      await axios.post(`http://localhost:3003/board`, board);
      alert('등록되었습니다.');
      navigate('/report');

    } catch (error) {
      console.error(error);
    }
  };

  const cancelInput = () => {

    setBoard({ contents: '' }); // 취소 버튼을 누르면 input의 상태를 초기화

alert("삭제 되었습니다.")

  };

  const backToList = () => {
    navigate('/report');
  };

  return (
    <div className='detail-wrap'> 
      <div className='detail-container'>
        <h1 className= "content-title" id = "content-item">
          내용
        </h1>
        <textarea id = "content-item" className="contents" name="contents" cols="30" rows="10" value={contents} onChange={onChange}></textarea>
      
        <div className='colBtn'>
          <button className='gapBtn' id = "content-item" onClick={saveBoard}>저장</button>
          <button className='gapBtn' id = "content-item"onClick={cancelInput}>삭제</button>
          <button className='gapBtn' id = "content-item" onClick={backToList}>뒤로 가기</button>
        </div>
      </div>
    </div>


  );
};

export default Todo;