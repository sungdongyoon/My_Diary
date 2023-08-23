import logo from './logo.svg';
import './App.css';
import { styled } from 'styled-components';
import React, { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import EditContent from './Components/EditContent';
import Content from './Components/Content';
import Home from './Components/Home';
import Editor from './Components/Editor';


export const DiaryStateContext = React.createContext();

function App() {
  // Diary
  const [diaryData, setDiaryData] = useState([]);
  const onCreateDiary = (id, content, emotion) => {
    const newItem = {
      id,
      content,
      emotion,
    }
    setDiaryData(newItem);
  }
  const diaryRemove = () => {
    if(window.confirm("일기를 삭제하시겠습니까?")) {
      setDiaryData("");
      localStorage.removeItem('diaryData');
    }
  }
  
  // Todo
  const [todoData, setTodoData] = useState([]);
  const idRef = useRef(1);
  const onCreateTodo = (todoContent) => {
    const newItem = {
      todoContent,
      isDone: false,
      id: idRef.current,
    }
    setTodoData([newItem, ...todoData]);
    idRef.current += 1;
  }
  const todoRemove = (targetId) => {
    setTodoData(todoData.filter((it) => it.id !== targetId));
  }
  const todoIsDone = (targetId) => {
    setTodoData(todoData.map((it) => it.id === targetId ? {...it, isDone: !it.isDone}: it));
  }
  const today = new Date();
  return (
    <DiaryStateContext.Provider value={{onCreateDiary, diaryRemove, diaryData, onCreateTodo, todoRemove, todoIsDone, todoData}}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home today={today}/>}/>
          <Route path='/editor/:id' element={<Editor/>}/>
        </Routes>
      </div>
    </DiaryStateContext.Provider>
  );
}

export default App;
