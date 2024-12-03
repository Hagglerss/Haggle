import React from 'react';
import navImg from '../../../assets/img/nav-test.png'

export const MainNavBar = () => {

  return(
    <ul className='nav-container'>
      <li className='nav-item'>
        <a href='/Electronics'>전자 제품</a>
        <div className='nav-item-sub'>
          <div className='sub-container'>
            <div style={{width:"50%", display:"flex"}}>
              <div style={{width:"50%", padding:"0 20px"}}>
                <h4>최고 인기 카테고리</h4>
                <ul>
                  <li><a href='/Phones'>휴대폰 및 액세서리</a></li>
                  <li><a href='/VideoGames'>비디오 게임 및 콘솔</a></li>
                </ul>
              </div>
              <div style={{width:"50%", padding:"0 20px"}}>
                <h4>카테고리 더 보기</h4>
                <ul>
                  <li><a href='/Apple'>Apple</a></li>
                  <li><a href='/Samsung'>삼성</a></li>
                </ul>
              </div>
            </div>
            <div style={{width:"50%"}}>
              <img src={navImg} style={{width:"100%"}}/>
            </div>
          </div>
        </div>
      </li>


      <li className='nav-item'>모터스</li>
      <li className='nav-item'>패션</li>
      <li className='nav-item'>수집품 및 예술</li>
      <li className='nav-item'>스포츠</li>
    </ul>
  );

}