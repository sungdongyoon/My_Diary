import React, { useContext } from 'react';
import { styled } from 'styled-components';
import EditDiary from './EditDiary';
import EditTodo from './EditTodo';
import { DiaryStateContext } from '../App';

const Container = styled.div`
  background-color: #C4D7B2;
  border: 3px dashed #fff;
  border-radius: 10px;
  width: 500px;
  height: 1000px;
  padding: 0 30px;
`;

const EditContent = () => {
  const {onCreateDiary, onCreateTodo} = useContext(DiaryStateContext);
  return (
    <Container>
      <EditDiary onCreateDiary={onCreateDiary}/>
      <EditTodo onCreateTodo={onCreateTodo}/>
    </Container>
  )
}

export default EditContent;
