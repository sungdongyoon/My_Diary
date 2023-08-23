import React from 'react';
import { format } from 'date-fns';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    .col-start {
      font-size: 30px;
      color: #000;
      .text {
        span {
          margin: 0 5px;
        }
      }
    }
    .prevBtn,
    .nextBtn {
      display: inline-block;
      width: 50px;
      height: 50px;
      font-size: 30px;
      color: #000;
      cursor: pointer;
    }
  }
`;


const CalendarHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <Container>
      <div className='header row'>
        <span className='prevBtn' onClick={prevMonth}>{"<"}</span>
        <div className='col col-start'>
          <span className='text'>
            <span>{format(currentMonth, "yyyy")}년</span>
            <span>{format(currentMonth, "M")}월</span>
          </span>
        </div>
        <span className='nextBtn' onClick={nextMonth}>{">"}</span>
      </div>
    </Container>
  )
}

export default CalendarHeader;
