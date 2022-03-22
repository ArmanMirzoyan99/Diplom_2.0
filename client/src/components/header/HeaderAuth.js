import React from 'react'
import { Link } from 'react-router-dom'
import HeaderLogo from '../../images/snlogo_titillium.svg'

const HeaderAuth = () => {

    return (
      <header className="header-auth">
        <Link to="/" className="logo">
          <img src={HeaderLogo} alt="logo" />
        </Link>
      </header>
    )
}

export default HeaderAuth