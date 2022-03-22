import React from 'react'
import { Link } from 'react-router-dom'
import Lang from './Lang'
import Menu from './Menu'
import Search from './Search'

const Header = () => {

    return (
        <div className="header bg-light">
            <nav className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between align-middle">

                <Link to="/" className="logo">
                    <h1 className="navbar-brand text-primary text-uppercase p-0 m-0"
                    onClick={() => window.scrollTo({top: 0})}>
                        Էլեկտրոն
                    </h1>
                </Link>

                <Search />

                <Menu />
                <Lang />
            </nav>
        </div>
    )
}

export default Header
