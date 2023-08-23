import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 55px;
  font-weight: normal;
  color: #fff;
  flex: 1;
`;

const Today = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-size: 24px;
  margin-right: 30px;
  .year {
    font-weight: bold;
    letter-spacing: 7px;
  }
  .monthDate {
    font-size: 50px;
    font-weight: bold;
  }
`;

const Header = ({id}) => {
  return (
    <Container>
      <Title>My Diary</Title>
      <Today>
        <span className='year'>{id.slice(0, 4)}</span>
        <span className='monthDate'>{id.slice(4, 5)}.{id.slice(5, 8)}</span>
      </Today>
    </Container>
  )
}

export default Header;
