import React from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, format } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

const Container = styled.div`
  .body {
    height: 100px;
    .row {
      width: 100%;
      height: 100%;
      display: flex;
      .col {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 15px;
        cursor: pointer;
      }
      .disabled {
        color: #555;
      }
      .selected {
        color: #fff;
        background-color: tomato;
        border-radius: 30px;
      }
      .hasDiary {
        color: #000;
        background-color: #FFBFBF;
        padding: 3px;
        border-radius: 50%;
      }
      .not-valid {
        color: #999;
      }
      .valid {
        color: #000;
      }
    }
  }
`;

const CalendarBody = ({currentMonth, selectedDate, hasDiarydate}) => {
  const navigate = useNavigate();
  let { id } = useParams();
  
  const monthStart = startOfMonth(currentMonth); // 이번 달의 첫날
  const monthEnd = endOfMonth(monthStart); // 이번 달의 마지막날
  const startDate = startOfWeek(monthStart); //  monthStart가 속한 주의 시작일
  const endDate = endOfWeek(monthEnd); // monthEnd가 속한 주의 마지막일

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';
  let dayId = '';
  let hasDiary = hasDiarydate?.date;
  while(day <= endDate) {
    for(let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      dayId = format(day, 'yMd');
      id = dayId;
      days.push(
        <div className={`col cell ${!isSameMonth(day, monthStart) 
        ? 'disabled' : isSameDay(day, selectedDate)   // 이번 달에 해당하지 않는 날짜 = disabled
        ? 'selected' : format(currentMonth, 'M') !== format(day, 'M')   // 오늘 날짜 = selected
        ? 'not-valid' : 'valid'}`}
        key={day} onClick={(e) => navigate(`/editor/${e.target.id}`)} id={dayId}>
          <span className={format(currentMonth, 'M') !== format(day, 'M') ? 'text not-valid' : id === hasDiary ? 'hasDiary' : "none"} id={dayId}>
            {formattedDate}
          </span>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className='row' key={day}>
        {days}
      </div>
    );
    days = [];
  }
  return (
    <Container>
      <div className='body'>{rows}</div>
    </Container>
  )
}

export default CalendarBody;
