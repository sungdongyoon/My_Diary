import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #606C5D;
  font-size: 35px;
  text-shadow: 3px 3px 1px #fff;
`;

const TodoInput = styled.div`
  display: flex;
  align-items: center;
  input {
    border: none;
    border-radius: 5px;
    width: 80%;
    height: 40px;
    padding: 0 10px;
    outline: none;
  }
  button {
    border: none;
    border-radius: 5px;
    width: 20%;
    height: 40px;
    margin-left: 20px;
    padding: 10px 20px;
    background-color: rgb(88, 88, 247);
    color: #fff;
    cursor: pointer;
  }
`;

const EditTodo = ({onCreateTodo}) => {
  const inputRef = useRef();
  const [createTodo, setCreateTodo] = useState("");
  const addTodo = () => {
    if(!createTodo) {
      inputRef.current.focus();
      return;
    } else {
      console.log(createTodo);
      setCreateTodo("");
      onCreateTodo(createTodo);
    }
  }
  const onKeyDown = (e) => {
    if(e.keyCode === 13){
      addTodo();
    }
  }
  const setTodoData = JSON.stringify(createTodo);
  console.log(setTodoData);
  return (
    <Container>
      <Title>오늘의 할 일</Title>
      <TodoInput>
        <input ref={inputRef} onKeyDown={onKeyDown} value={createTodo} onChange={(e) => setCreateTodo(e.target.value)} type='text' placeholder='할 일을 입력해주세요'/>
        <button onClick={addTodo}>추가</button>
      </TodoInput>
    </Container>
  )
}

export default EditTodo;
