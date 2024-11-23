import React from 'react';
import './layout.styles.css';
import { BellFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import HaggleLogo from '../../assets/img/Haggle-logo.png';

export const Header = () => {

  const location = useLocation();

  const isLogoVisible = location.pathname === '/';

  return(
    <div className='header'>
      <div className='header-l'>
        <span>오늘의 특가</span>
        <span>도움말 및 문의하기</span>
      </div>

      {!isLogoVisible && <div><img src={HaggleLogo} height="30px"/></div>}

      <div className='header-r'>
        <span>판매</span>
        <span>관심목록</span>
        <span>내 Haggle</span>
        <span><BellFilled style={{color:"#AADB99", fontSize:"20px"}} /></span>
        <span><ShoppingCartOutlined style={{color:"#AADB99", fontSize:"20px"}} /></span>
      </div>

    </div>
  );



}