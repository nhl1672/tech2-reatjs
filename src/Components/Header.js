import React from 'react'
import Hotline from './Header/Hotline';

function Header({title, hotline}) {
  return (
    <header className='header'>
        <div className='container'>
            <h1 className='text-center'>{title}</h1>
            <Hotline phone={hotline}/>
        </div>
    </header>
  )
}
export default Header;
