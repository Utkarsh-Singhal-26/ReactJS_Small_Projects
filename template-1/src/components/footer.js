import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer--details'>
        <h3 className='footer--date'>FRIDAY, APRIL 10</h3>
        <h3 className='footer--time'>7:00 - 9:00 PM</h3>
        <hr className='footer--hr' />
        <p className='footer--instructions'>6:30 PM - Students set up in the Cafeteria</p>
      </div>
      <div className='footer--info'>
        <p className='footer--question'>Questions? Contact</p>
        <p className='footer--email'>utkarsh.singhal.2604@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
