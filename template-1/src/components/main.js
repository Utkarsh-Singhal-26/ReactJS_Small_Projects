import React from 'react';

const Main = () => {
  return (
    <div className='main'>
      <h2 className='main--title'>FAIR SCHEDULE</h2>
      <div className='main--details'>
        <div className='main--information'>
            <div className='main--date'>
                <p>FRIDAY</p>
                <p>MARCH 8</p>
            </div>
            <p className='main--description'>All entry forms must be emailed to utkarsh.singhal.2604@gmail.com with "Science Fair" in the subject line.</p>
        </div>
        <div className='main--information'>
            <div className='main--date'>
                <p>FRIDAY</p>
                <p>APRIL 10</p>
            </div>
            <p className='main--description'>Welcome to the Science Fair! Come learn about the scientific wonders of the world. It's an exciting opportunity to learn, present and teach others.</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
