import React, { useState, useEffect } from 'react'
import {  useTranslation  } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom'
import { login } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import HeaderAuth from '../components/header/HeaderAuth'
import Lang from '../components/header/Lang';

const Login = () => {
    const {t, i18n} = useTranslation()
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
      <>
      <HeaderAuth />
        <div className="auth">
          <div className="auth__header">
            <h2 className="auth__title">{t("hello")}</h2>
            <h3 className="auth__subtitle">{t("enter_your_data_to_signin")}</h3>
          </div>
          <form className="auth__form  form" onSubmit={handleSubmit}>

            <div className="form__group">
              <label className="form__label" htmlFor="email">{t("email")}</label>
              <input 
                className="form__input" 
                type="email" 
                id="email" 
                placeholder={t("email_placeholder")}
                name="email"
                aria-describedby="emailHelp"
                onChange={handleChangeInput} 
                value={email} />
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="password">{t("password")}</label>
              <input 
                className="form__input" 
                type="password" id="password" 
                placeholder={t("password_placeholder")} 
                name='password' 
                onChange={handleChangeInput} 
                value={password} />
            </div>

            <button 
              className="form__btn"
              type='submit' 
              disabled={email && password ? false : true}>
                {t("login")}
            </button>
            <Link className="form__link" to="/register">{t("dont_have_an_account")}</Link>
          </form>
          <Lang />
        </div>
        </>
    )
}

export default Login