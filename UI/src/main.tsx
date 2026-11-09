import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from './Components/AdminComponents/AdminLogin.tsx';
import AdminSignUp from './Components/AdminComponents/AdminSingUp.tsx';
import AdminDashBoard from './Components/AdminComponents/AdminDashBoard.tsx';
import App from './App.tsx';
import { store } from './Store/store.ts';
import { Provider } from "react-redux";
import Admin_Theatres from './Components/AdminComponents/Admin_Theatres.tsx';
import NotFound from './Components/AdminComponents/PageNotFound.tsx';
import TheatreApprovalRequest from './Components/AdminComponents/TheatreApprovalRequest .tsx';
import Screens from './Components/AdminComponents/AdminScreens.tsx';
import AdminMovies from './Components/AdminComponents/AdminMovies.tsx';
import Shows from './Components/AdminComponents/Shows.tsx';
import Bookings from './Components/AdminComponents/Bookings.tsx';
import Customers from './Components/AdminComponents/Customers.tsx';
import Revenue from './Components/AdminComponents/Revenue.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>

    <BrowserRouter>
      <Routes >
        <Route path='/' element=

          {<App />}></Route>
        <Route path='*' element=

          {<NotFound />}></Route>
        <Route path='/admin/Dashboard' element={<AdminDashBoard></AdminDashBoard>} ></Route>
        <Route path='/admin/Theatres' element={<Admin_Theatres></Admin_Theatres>} ></Route>
        <Route path='/admin/TheatreApprovalStatus' element={<TheatreApprovalRequest />} ></Route>
        <Route path='/admin/Screens' element={<Screens />} ></Route>
        <Route path='/admin/Movies' element={<AdminMovies />} ></Route>
        <Route path='/admin/Shows' element={<Shows />} ></Route>
        <Route path='/admin/Bookings' element={<Bookings />} ></Route>
        <Route path='/admin/Customers' element={<Customers />} ></Route>
        <Route path='/admin/Revenue' element={<Revenue />} ></Route>
        <Route path='/admin/login' element={<AdminLogin></AdminLogin>} ></Route>
        <Route path='/admin/signup' element={<AdminSignUp></AdminSignUp>} ></Route>
      </Routes>

    </BrowserRouter >
  </Provider>

)
