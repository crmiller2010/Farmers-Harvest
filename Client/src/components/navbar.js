import React from 'react';
import style from './Style/navbar.css';

//navigation bar. currentPage and HandlePage Change need additional help with

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='navtab'>
    <ul className="nav">
      <li className="item">
        <a 
          href="/"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="item">
        <a
          href="/addproduce"
          onClick={() => handlePageChange('AddProduce')}

          className={currentPage === 'AddProduce' ? 'nav-link active' : 'nav-link'}
        >
          Add Produce
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
