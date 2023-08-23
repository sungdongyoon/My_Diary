import React from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
  border-bottom: 3px dashed #fff;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  color: #606C5D;
  text-shadow: 3px 3px 1px #fff;
  h3 {
    font-size: 35px;
  }
  span {
    margin-right: 10px;
    font-size: 30px;
  }
`;

const Content = styled.div`
  border: none;
  border-radius: 5px;
  background-color: #F7FFE5;
  height: 200px;
  margin-bottom: 30px;
  padding: 15px;
  color: #777;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  button {
    margin-left: 10px;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    color: #fff;
  }
  .removeBtn {
    background-color: rgb(248, 162, 162);
  }
  .addBtn {
    background-color: rgb(88, 88, 247);
  }
`;

const Diary = ({diaryRemove}) => {
  const { id } = useParams();
  const getDiaryData = localStorage.getItem('diaryData');
  const diaryData = JSON.parse(getDiaryData);
  return (
    <Container>
      <Title>
        <span>{diaryData?.id === id && diaryData?.emotion}</span>
        <h3>Diary</h3>
      </Title>
      <Content>
        {diaryData?.id === id && diaryData?.content}
      </Content>
      <Buttons>
        <button onClick={diaryRemove} className='removeBtn'>삭제하기</button>
      </Buttons>
    </Container>
  )
}

export default Diary;
