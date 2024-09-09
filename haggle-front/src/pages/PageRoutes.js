import { Route, Routes, Navigate } from "react-router-dom";

import MainPage from "./Main/Main";


export const PageRoutes = () =>{


  return(
    <Routes>
      <Route path="/" element={ <MainPage/>}/>
    </Routes>
  );
}