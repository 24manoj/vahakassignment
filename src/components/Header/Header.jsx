import React from 'react';
import './Header.scss';
import src from '../../Assets/Startup.jpeg';
export default function Header() {
  return (
    <div className='heade-container'>
      <div className='header-div'>
        <p>
          <img className='header-log' src={src} />
          <span className='header-text'>Vahak</span>
        </p>
      </div>
    </div>
  );
}
