import React from 'react';
import './Main.styles.css';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

function MainPage() {


  const navBar = () => {





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
                  <img width='100%' height='100%' src='https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202304/21/bemypet/20230421120037737gfub.jpg'/>
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


  const popularCate = () => {
    return(
      <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <span style={{width:"200px", height:"200px", border:"1px solid green", margin:"5px"}}>1</span>
        <span style={{width:"200px", height:"200px", border:"1px solid green", margin:"5px"}}>2</span>
        <span style={{width:"200px", height:"200px", border:"1px solid green", margin:"5px"}}>3</span>
        <span style={{width:"200px", height:"200px", border:"1px solid green", margin:"5px"}}>4</span>
        <span style={{width:"200px", height:"200px", border:"1px solid green", margin:"5px"}}>5</span>
        <span style={{width:"200px", height:"200px", border:"1px solid green", margin:"5px"}}>6</span>
        <span style={{width:"200px", height:"200px", border:"1px solid green", margin:"5px"}}>7</span>
        <span style={{width:"200px", height:"200px", border:"1px solid green", margin:"5px"}}>8</span>
      </div>
    );


  }

  return(
    <>

      <Header/>
    
      <div style={{ height:"600px", border:"solid 1px", display:"flex", flexDirection:"column"}}>
        MainPage
        <div style={{ height:"10%", border:"solid 1px blue", margin:"10px", display:"flex", justifyContent:"center"}}>{navBar()}</div>
        <div style={{ height:"45%", border:"solid 1px blue", margin:"10px"}}>광고 이미지</div>
        <div style={{ height:"45%", border:"solid 1px blue", margin:"10px"}}>카테고리 바로가기 {popularCate()}</div>
      </div>
    
    
      <Footer/>
    </>

  );
}

export default MainPage;