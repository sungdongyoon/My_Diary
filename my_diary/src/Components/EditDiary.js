import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 3px dashed #fff;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  color: #606C5D;
  font-size: 35px;
  text-shadow: 3px 3px 1px #fff;
`;

const Textarea = styled.textarea`
  padding: 20px;
  height: 200px;
  margin-bottom: 30px;
  border-radius: 5px;
  border: none;
  background-color: #F7FFE5;
  outline: none;
  font-size: 18px;
  color: #777;
  resize: none;
  &::placeholder {
    color: #999;
  }
`;

const Emotion = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  border: 1px solid #fff;
  border-radius: 5px;
  width: 200px;
  span {
    color: #606C5D;
    margin-right: 10px;
  }
  select {
    border: none;
    background-color: #C4D7B2;
    ouline: none;
    font-size: 25px;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 15px 0px;
  color: #000;
  font-size: 18px;
  background-color: #E1ECC8;
  margin-bottom: 100px;
  cursor: pointer;
  &:hover {
    background-color: #B3C890;
    color: #606C5D;
  }
`;


const EditDiary = ({onCreateDiary}) => {
  const { id } = useParams();
  const contentRef = useRef();
  const [state, setState] = useState({
    id: id,
    content: "",
    emotion: "😄",
    date: id,
  });

  const handleChange = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    })
  }
  const AddDiary = () => {
    if(state.content.length < 1) {
      contentRef.current.focus();
      return;
    }
    const setDiaryData = JSON.stringify(state);
    localStorage.setItem('diaryData', setDiaryData);
    const getDiaryData = localStorage.getItem('diaryData');
    const diaryData = JSON.parse(getDiaryData);
    onCreateDiary(state.id, state.content, state.emotion);
    alert("저장이 완료되었습니다!");
    setState({
      id: id,
      content: "",
      emotion: "😄",
      date: id,
    })
    console.log(state);
  }
  
  return (
    <Container>
      <Title>오늘의 일기</Title>
      <Textarea ref={contentRef} value={state.content} name='content' onChange={handleChange} placeholder='이곳에서 일기 입력 또는 수정이 가능합니다'></Textarea>
      <Emotion>
        <span>오늘의 기분</span>
        <select name='emotion' onChange={handleChange} value={state.emotion}>
          <option value={"😄"}>😄</option>
          <option value={"🙂"}>🙂</option>
          <option value={"😐"}>😐</option>
          <option value={"😕"}>😕</option>
          <option value={"😠"}>😠</option>
        </select>
      </Emotion>
      <Button onClick={AddDiary}>일기 등록하기</Button>
    </Container>
  )
}

export default EditDiary;
