import React from 'react';
import './BuyProduct.style.css';
import { Header } from '../../../shared/layout/Header';
import { Footer } from '../../../shared/layout/Footer';
import HaggleLogo from '../../../assets/img/Haggle-logo.png';

function BuyProductPayment(){

  // 조각1-1 : 결제방법
  
  // 조각1-2 : 배송 도착지

  // 조각1-3 : 주문 검토 


  // 조각 1 합본


  // 조각2-1 : 주문 합계

  // 전체그림 : 조각{1}|조각{2}
  return (
    <>
      <Header/>
      <div className='title-logo'>
        <img src={HaggleLogo} height="100px"/>
      </div>

      

      <div style={{height:"300px"}}>결제페이지</div>
      <Footer/>
    </>
  );





}


export default BuyProductPayment;