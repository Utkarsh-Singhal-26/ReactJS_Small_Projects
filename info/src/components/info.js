import React from 'react';
import Logo from './U.jpg';

const Info = () => {
  return (
    <div className='info'>
      <img src={ Logo } alt='Profile Photo' className='profile-photo' />
      <div className='information'>
        <h2>Utkarsh Singhal</h2>
        <h4>Frontend <br /> Development</h4>
        <p>utkarshsinghal.developer</p>
        <a href='#' className='email'><i class="fa-solid fa-envelope"></i> &nbsp; Email</a>
        <a href='#' className='linkedin'><i class="fa-brands fa-linkedin-in"></i> &nbsp; Linked - In</a>
      </div>
    </div>
  );
}

export default Info;
