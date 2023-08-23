import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  .days {
    display: flex;
    justify-content: space-between;
    .col {
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 25px;
      color: #000;
    }
  }
`;

const CalendarDays = () => {
  const days = [];
  const date = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  for(let i = 0; i < 7; i ++) {
    days.push(
      <div className='col' key={i}>
        {date[i]}
      </div>
    );
  };
  return (
    <Container>
      <div className='days row'>{days}</div>
    </Container>
  )
}

export default CalendarDays;
