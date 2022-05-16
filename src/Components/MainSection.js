import React from 'react';
import './MainSection.css';

const MainSection = () => {
  return (
    <section className='Main'>
        <div className='Main-left'>
          <div className='path-wrapper'>
            <a href='#'>Home / <b>Product Detail Page</b></a>
          </div>
          <div className='tag-wrapper'>
            <h3>Tags:</h3>
            <label className='tag-label'>Kitchen</label>
          </div>
          <div className='img- wrapper'></div>
        </div>
        <div className='Main-right'></div>
    </section>
  )
}

export default MainSection