import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { register } from '../redux/actions/authAction'
import HeaderAuth from '../components/header/HeaderAuth'
import Lang from '../components/header/Lang'
import { useTranslation } from 'react-i18next'

const Register = () => {
    const { t } = useTranslation()
    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const initialState = { 
        fullname: '', username: '', email: '', password: '', cf_password: '', gender: 'male'
    }
    const [userData, setUserData] = useState(initialState)
    const { fullname, username, email, password, cf_password } = userData

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    
    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(register(userData))
    }

    return (
        <>
        <HeaderAuth />
          <div className="auth">
          <div className="auth__header">
            <h2 className="auth__title">{t("hello")}
            </h2>
            <h3 className="auth__subtitle">{t("enter_your_data_to_signup")}
            </h3>
          </div>
          <form className="auth__form  form" onSubmit={handleSubmit}>

              <div className="form__group">
                <label className="form__label" htmlFor="fullname">{t("full_name")}</label>
                <input 
                    className="form__input" 
                    type="text" 
                    id="fullname" 
                    placeholder={t("fullname_placeholder")}  
                    onChange={handleChangeInput} 
                    value={fullname} 
                    name='fullname'
                    style={{background: `${alert.fullname ? '#fd2d6a14' : ''}`}}
                />
              </div>

              <small className="form-text text-danger">
                        {alert.fullname ? alert.fullname : ''}
              </small>

              <div className="form__group">
                <label className="form__label" htmlFor="username">{t("username")}</label>
                <input  
                    className="form__input" 
                    type="text" 
                    id="username" 
                    placeholder={t("username_placeholder")}
                    name="username"
                    onChange={handleChangeInput} 
                    value={username.toLowerCase().replace(/ /g, '')}
                    style={{background: `${alert.username ? '#fd2d6a14' : ''}`}} 
                />
              </div>
            <small className="form-text text-danger">
                {alert.username ? alert.username : ''}
            </small>
            
            <div className="form__group">
              <label className="form__label" htmlFor="email">{t("email")}</label>
              <input 
                className="form__input" 
                type="email" 
                id="email" 
                placeholder={t("email_placeholder")} 
                name="email"
                onChange={handleChangeInput} 
                value={email}
                style={{background: `${alert.email ? '#fd2d6a14' : ''}`}}/>

            <small className="form-text text-danger">
                {alert.email ? alert.email : ''}
            </small>

            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="password">{t("password")}</label>
              <input 
                className="form__input" 
                type="password" 
                id="password" 
                placeholder={t("password_placeholder")}  
                onChange={handleChangeInput} 
                value={password} 
                name="password"
                style={{background: `${alert.password ? '#fd2d6a14' : ''}`}}
              />

            <small className="form-text text-danger">
                {alert.password ? alert.password : ''}
            </small>

            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="cf_password">{t("cnf_password")}</label>
              <input 
                className="form__input" 
                type="password" 
                id="cf_password" 
                placeholder={t("cnf_password_placeholder")} 
                onChange={handleChangeInput} 
                value={cf_password} 
                name="cf_password"
                style={{background: `${alert.password ? '#fd2d6a14' : ''}`}} 
              />

            <small className="form-text text-danger">
                {alert.cf_password ? alert.cf_password : ''}
            </small>

            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="">{t("gender")}</label>
            </div>

            <div className="form__group">
              <div className="form__gender">
                <label htmlFor="">
                  {t("gender_male")} : <input type="radio" value="male" name="gender" onChange={handleChangeInput}/>
                </label>
                <label htmlFor="">
                 {t("gender_female")} : <input type="radio" value="female" name="gender" onChange={handleChangeInput}/>
                </label>
              </div>
            </div>

            <button 
                type='submit' 
                className="form__btn"
            >
                {t("create_account")}
            </button>
            <Link to="/" className="form__link">{t("have_an_account")}</Link>
          </form>
          <Lang />
        </div>
        </>
    )
}

export default Register