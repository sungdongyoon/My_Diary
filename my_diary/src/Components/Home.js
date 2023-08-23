import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { format, addMonths, subMonths, startOfMonth, startOfWeek } from 'date-fns';
import CalendarHeader from '../Calendar/CalendarHeader';
import CalendarDays from '../Calendar/CalendarDays';
import CalendarBody from '../Calendar/CalendarBody';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CalendarWrap = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
`;

const Header = styled.div`
  width: 100%;
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Title = styled.h1`
  color: #fff;
  font-size: 50px;
`;

const Content = styled.div`
  width: 100%;
  height: 600px;
`;

const Guide = styled.span`
  font-size: 14px;
  color: red;
  position: absolute;
  top: 100px;
  right: 0px;
`;

const Home = ({today}) => {
  const [currentMonth, setCurrentMonth] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);
 

  const getDiaryData = localStorage.getItem('diaryData');
  const diaryData = JSON.parse(getDiaryData);
  const [hasDiarydate, setHasDiaryDate] = useState(diaryData);

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  }
  return (
    <Container>
      <Title>My Diary</Title>
      <CalendarWrap>
        <Header>
          <CalendarHeader currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth}/>
        </Header>
        <Content>
          <CalendarDays/>
          <CalendarBody currentMonth={currentMonth} selectedDate={selectedDate} hasDiarydate={hasDiarydate}/>
        </Content>
      </CalendarWrap>
      <Guide>
        ※ 해당 날짜를 클릭하여 일기와 투두리스트를 작성해보세요
      </Guide>
    </Container>
  )
}

export default Home;
