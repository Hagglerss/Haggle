import { Route, Routes, Navigate } from "react-router-dom";

import MainPage from "./Main/Main";
import { BuyProductList } from "./Product/BuyProduct/BuyProductList";
import { BuyProductPayment as Payment } from "./Product/BuyProduct/BuyProductPayment";
import { Signin } from "./User/Signin";
import { SellProduct } from "./Product/SellProduct/SellProduct";

export const PageRoutes = () =>{


  return(
    <Routes>
      <Route path="/" element={ <MainPage/>}/> {/* 메인페이지 */}
      <Route path="/buy/list" element={ <BuyProductList/> } /> {/* 구매 상품 목록 */}
      <Route path="/buy/detail/payment" element={ <Payment/> } />  {/* 결제 페이지 /buy/detail/{상품번호}/payment 느낌으로 되어야할듯함 */}
      <Route path="/sign-in" element={ <Signin/> } /> {/* 회원가입 */}
      <Route path="/sell" element={ <SellProduct/> } /> {/* 판매 상품 등록 */}
    </Routes>
  );
}