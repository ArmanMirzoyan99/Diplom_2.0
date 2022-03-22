import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {  useTranslation  } from 'react-i18next';
import { logout } from '../../redux/actions/authAction'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import Avatar from '../Avatar'
import NotifyModal from '../NotifyModal'

const Menu = () => {
    const { t } = useTranslation()
    const navLinks = [
        { label: `${t('home')}`, icon: 'home', path: '/'},
        { label: `${t('message')}`, icon: 'chat', path: '/message'},
        { label: `${t('discover')}`, icon: 'explore', path: '/discover'}
    ]

    const { auth, theme, notify } = useSelector(state => state)
    const dispatch = useDispatch()
    const { pathname } = useLocation()

    const isActive = (pn) => {
        if(pn === pathname) return 'active'
    }

    return (
        <div className="menu">
            <ul className="navbar-nav flex-row">
                {
                    navLinks.map((link, index, label) => (
                        <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
                            <Link className="nav-link" to={link.path}>
                                <span className="material-icons">{link.icon}</span>
                                <span className="icons-names">{link.label}</span>
                            </Link>
                        </li>
                    ))
                }

                <li className="nav-item dropdown" style={{opacity: 1}} >
                    <span className="nav-link position-relative" id="navbarDropdown" 
                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                        <span className="material-icons" 
                        style={{color: notify.data.length > 0 ? 'crimson' : ''}}>
                            favorite
                        </span>

                        <span className="notify_length">{notify.data.length}</span>

                    </span>

                    <div className="dropdown-menu" aria-labelledby="navbarDropdown"
                    style={{transform: 'translateX(75px)'}}>
                        <NotifyModal />
                    </div>
                        
                </li>
           
            
                <li className="nav-item dropdown" style={{opacity: 1}} >
                    <span className="nav-link" id="navbarDropdown" 
                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <Avatar src={auth.user.avatar} size="medium-avatar" />
                    </span>

                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>{t("profile")}</Link>

                    <label htmlFor="theme" className="dropdown-item"
                    onClick={() => dispatch({
                        type: GLOBALTYPES.THEME, payload: !theme
                    })}>

                        {theme ? t("light_mode") : t("dark_mode")}
                    </label>

                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/"
                    onClick={() => dispatch(logout())}>
                        {t("logout")}
                    </Link>
                </div>
            </li>
        </ul>
    </div>

    )
}

export default Menu
