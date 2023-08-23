import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  border-bottom: 2px solid #fff;
  margin-bottom: 10px;
  padding: 10px 0;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  flex: 1;
  input {
    width: 15px;
    height: 15px;
    margin-right: 20px;
  }
  label {
    font-size: 18px;
    font-weight: bold;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  margin-left: 30px;
  padding: 8px 20px;
  font-size: 12px;
  color: #fff;
  background-color: rgb(248, 162, 162);
  cursor: pointer;
`;

const TodoItem = ({id, todoContent, isDone, todoRemove, todoIsDone}) => {
  const handleRemove = () => {
    todoRemove(id);
  }
  const handleIsDone = () => {
    todoIsDone(id);
  }
  return (
    <Container>
      <Content>
        <input onChange={handleIsDone} checked={isDone} type='checkbox'/>
        <label>{todoContent}</label>
      </Content>
      <Button onClick={handleRemove}>삭제</Button>
    </Container>
  )
}

export default TodoItem;
