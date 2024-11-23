import React from 'react';
import './Main.styles.css';
import { Header } from '../../shared/layout/Header';
import { Footer } from '../../shared/layout/Footer';
import { MainNavBar } from '../../features/Main/components/MainNavBar';
import HaggleLogo from '../../assets/img/Haggle-logo.png';
import { Input, Button } from 'antd';

const { Search } = Input;

function MainPage() {

  const popularCate = () => {


    return (
      <div className='popularCate-container'>
        <div><a href='/buy/list'>상품 리스트 페이지</a></div>
        <div><a href='/buy/detail/payment'>상품 결제 페이지</a></div>
        <div><a href='/sign-in'>회원가입 페이지</a></div>
        <div><a href='/sell'>상품 판매 등록 페이지</a></div>
        <div></div>
        <div></div>
      </div>
      
    );
  }

  const shortsAd = () => {

    return (
      <div className='shorts-container'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }



  return(
    <>

      <Header/>
      <div className='title-logo'>
        <img src={HaggleLogo} height="100px"/>
      </div>

      <div className='main-search-container'>
        <Search
          className='main-search'
          style={{width:"60%"}}
          placeholder="무엇이든 검색하세요!"
          allowClear
          enterButton={
            <Button 
            type="primary" 
            style={{ width: "120px", backgroundColor: "#AADB99", borderColor: "#AADB99" }}
            >
              검색
            </Button>
          }
          size="large"
          // onSearch={onSearch}
        />
      </div>

      <div className='main-nav'>
        <MainNavBar/>
      </div>

      <div className='main-contents'>
        <div className='contents-1'>
          <div style={{height:"300px", width:"100%", backgroundColor:"#d3d3d3"}}>광고예정</div>
        </div>
        <div className='contents-2'>
          <div>인기 카테고리</div>
          {popularCate()}
        </div>
        <div className='contents-3'>
          <div>영상 속 그 상품</div>
          {shortsAd()}
        </div>
      </div>

      <Footer/>
    </>

  );
}

export default MainPage;