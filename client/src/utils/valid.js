import { t } from "i18next"

const valid = ({fullname, username, email, password, cf_password}) => {
    const err = {}

    if(!fullname) {
        err.fullname = t("pls_add_your_fullname")
    }else if(fullname.length > 25){
        err.fullname = t("fullname_upto_25_chars")
    }

    if(!username) {
        err.username = t("pls_add_your_username")
    }else if(username.replace(/ /g, '').length > 25){
        err.username = t("username_upto_25_chars")
    }

    if(!email) {
        err.email = t("pls_add_your_email")
    }else if(!validateEmail(email)){
        err.email = t("email_incorrect")
    }

    if(!password) {
        err.password = t("pls_add_your_password")
    }else if(password.length < 6){
        err.password = t("password_6_chars")
    }

    if(password !== cf_password) {
        err.cf_password = t("confirm_password_not_match")
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }
}



function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  
export default valid