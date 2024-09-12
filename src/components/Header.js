// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import
import { AiOutlineSearch } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import './Header.css';
import logoLight from '../assets/logo-light.png';

const Header = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleLogin = () => {
    navigate('/login'); // /login 경로로 이동
  };

  // const handleSignUp = () => {
  //   navigate('/sign-up'); // /login 경로로 이동
  // };

  return (
    <header className="headerContainer">
      {/* 로고 이미지 */}
      <div className="logoContainer">
        <img src={logoLight} alt="Airbnb Logo" className="logoImage" />
      </div>
      <div className="searchBar">
        <input type="text" className="searchInput" placeholder="Search" />
        <button className="searchButton">
          <AiOutlineSearch size={20} />
        </button>
      </div>
      <div className="userMenu">
        <div className="userIcon">
          <MdAccountCircle size={32} />
          <div className="dropdownMenu">
            <div className="dropdownMenuItem" onClick={handleLogin}>Login</div>
            <div className="dropdownMenuItem" onClick={handleLogin}>Sign Up</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;