import React from 'react';
import './Header.scss';
import src from '../../Assets/vahak-logo.png';
export default function Header() {
  return (
    <div className='heade-container'>
      <img className='heder-logo' src={src}></img>
    </div>
  );
}
