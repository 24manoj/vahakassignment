import React from 'react';
import './Header.scss';
import src from '../../Assets/Startup.jpeg';
export default function Header() {
  return (
    <div className='heade-container'>
      <img className='header-log' src={src} />
      <p>Vahak</p>
    </div>
  );
}
