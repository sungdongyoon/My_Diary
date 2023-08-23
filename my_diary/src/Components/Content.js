import React, { useContext } from 'react';
import { styled } from 'styled-components';
import Diary from './Diary';
import TodoList from './TodoList';
import { DiaryStateContext } from '../App';

const Container = styled.div`
  background-color: #C4D7B2;
  border: 3px dashed #fff;
  border-radius: 10px;
  width: 500px;
  height: 1000px;
  padding: 0 30px;
`;

const Content = () => {
  const {diaryData, diaryRemove, todoData, todoRemove, todoIsDone} = useContext(DiaryStateContext);
  return (
    <Container>
      <Diary diaryData={diaryData} diaryRemove={diaryRemove}/>
      <TodoList todoData={todoData} todoRemove={todoRemove} todoIsDone={todoIsDone}/>
    </Container>
  )
}

export default Content;
