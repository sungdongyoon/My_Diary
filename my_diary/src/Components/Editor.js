import React from 'react';
import Header from './Header';
import EditContent from './EditContent';
import Content from './Content';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const Wrap = styled.div`
  position: relative;
`;

const BackBtn = styled.span`
  color: #606C5D;
  font-weight: bold;
  background-color: #fff;
  padding: 5px 20px;
  position: absolute;
  top: 0;
  cursor: pointer;
`;

const Editor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <Wrap>
      <Header id={id}/>
      <BackBtn onClick={goBack}>홈으로</BackBtn>
      <div className='container'>
        <EditContent/>
        <Content/>
      </div>
    </Wrap>
  )
}

export default Editor;
