import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  .diary_item {
    width: cacl(100% - 20px);
    padding: 0 20px;
    display: flex;
    align-items: center;
    height: 100px;
    border: 1px solid #ccc;
    .diary_date {
      margin-right: 10px;
      font-size: 18px;
      font-weight: bold;
    }
    .diary_emotion {
      margin-right: 50px;
      font-size: 30px;
    }
    .diary_content {
      font-size: 18px;
    }
  }
`;

const DiaryList = () => {
  const diaryData = JSON.parse(localStorage.getItem("diaryData"));
  return (
    <Container>
      <div className='diary_item' id={diaryData?.id}>
        <div className='diary_date'>{diaryData?.date}</div>
        <span className='diary_emotion'>{diaryData?.emotion}</span>
        <span className='diary_content'>{diaryData?.content}</span>
      </div>
    </Container>
  )
}

export default DiaryList;
