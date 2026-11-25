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
import PlatformAdminDashboard from './Components/PlatFormAdminComponents/PlatformAdminDashboard.tsx';
import RoleProtectedRoute from './Components/RoleProtectedRoute.tsx';
import Unauthorized from './Components/unauthorized.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>

    <BrowserRouter>
      <Routes >
        <Route path='/' element=

          {<App />}></Route>
        <Route path='/unauthorized' element=

          {<Unauthorized />}></Route>
        <Route path='*' element=

          {<NotFound />}></Route>


        {/* PAdmin Routes*/}
        <Route element={<RoleProtectedRoute allowedRoles={["PAdmin"]} />}>
          <Route path='/PlatformAdminDashboard' element={<PlatformAdminDashboard></PlatformAdminDashboard>} ></Route>
        </Route>





        {/* User Routes */}


        {/* Admin Routes */}
        <Route element={<RoleProtectedRoute allowedRoles={["Admin"]} />}>

          <Route path='/admin/Dashboard' element={<AdminDashBoard />} />

          <Route path='/admin/Theatres' element={<Admin_Theatres />} />

          <Route path='/admin/TheatreApprovalStatus' element={<TheatreApprovalRequest />} />

          <Route path='/admin/Screens' element={<Screens />} />

          <Route path='/admin/Movies' element={<AdminMovies />} />

          <Route path='/admin/Shows' element={<Shows />} />

          <Route path='/admin/Bookings' element={<Bookings />} />

          <Route path='/admin/Customers' element={<Customers />} />

          <Route path='/admin/Revenue' element={<Revenue />} />

        </Route>
      </Routes>

    </BrowserRouter >
  </Provider>

)
