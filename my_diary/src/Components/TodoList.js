import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Title = styled.h3`
  font-size: 35px;
  color: #606C5D;
  text-shadow: 3px 3px 1px #fff;
`;

const TodoCount = styled.div`
  color: #fff;
  font-size: 14px;
  span {
    margin: 0 5px;
    padding: 7px 10px;
    border-radius: 5px;
  }
  .todo {
    background-color: #F08A5D;
  }
  .complete {
    background-color: #3F72AF;
  }
  .incomplete {
    background-color: #E23E57;
  }
`;

const SearchInput = styled.input`
  height: 40px;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 30px;
  outline: none;
`;

const TodoList = ({todoData, todoRemove, todoIsDone}) => {
  const [search, setSearch] = useState("");
  const getSearchResult = () => {
    return search === "" ? todoData : todoData.filter((it) => it.todoContent.toLowerCase().includes(search.toLowerCase()));
  }
  const countTodo = () => {
    const totalTodo = todoData.length;
    const doneTodo = todoData.filter((it) => it.isDone).length;
    const notDoneTodo = totalTodo - doneTodo;
    return {totalTodo, doneTodo, notDoneTodo};
  }
  const {totalTodo, doneTodo, notDoneTodo} = countTodo();
  return (
    <Container>
      <TitleWrap>
        <Title>Todo List</Title>
        <TodoCount>
          <span className='todo'>오늘의 해야할 일 : {totalTodo}</span>
          <span className='complete'>완료 : {doneTodo}</span>
          <span className='incomplete'>미완료 : {notDoneTodo}</span>
        </TodoCount>
      </TitleWrap>
      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} type='text' placeholder='할 일을 검색해주세요'/>
      {getSearchResult().map((it) => (
        <TodoItem key={it.id} {...it} todoRemove={todoRemove} todoIsDone={todoIsDone}/>
      ))}
    </Container>
  )
}

export default TodoList;
