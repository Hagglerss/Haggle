import React from 'react';

export const Header = () => {

  return(
    <>
      <div style={{ height:"200px", border:"solid 1px",display:"flex", flexDirection:"column"}}>
        HEADER
        <div style={{ height:"40%", border:"solid 1px red", margin:"10px"}}>진짜 헤더</div>
        <div style={{ height:"60%", border:"solid 1px red", margin:"10px"}}>검색 부분</div>
      </div>
    </>
  );



}