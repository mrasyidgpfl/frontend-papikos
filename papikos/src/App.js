import React from 'react';
import './App.css';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile';
import Wallet from './pages/Wallet';
import TopUp from './pages/TopUp';
import Booking from './pages/Booking';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<UpdateProfile />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/wallet/topup" element={<TopUp />} />
        <Route path="/houses/:id" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}
