import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-pills justify-content-center">
      <li className="nav-item">
        <a
          href="/"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/addproduce"
          onClick={() => handlePageChange('AddProduce')}

          className={currentPage === 'AddProduce' ? 'nav-link active' : 'nav-link'}
        >
          Add Produce
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
