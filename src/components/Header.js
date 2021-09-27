import React from 'react'
import Form from './Form';
import './Header.css';

function Header({setSearchResult}) {
    return (
        <div className="header-container">
            <Form setSearchResult={setSearchResult}/>
        </div>
    )
}

export default Header
