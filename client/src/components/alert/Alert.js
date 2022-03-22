import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { useTranslation } from 'react-i18next'

import Loading from './Loading'
import Toast from './Toast'

const Notify = () => {
    const { t } = useTranslation();
    const { alert } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div>
            {alert.loading && <Loading />}

            {
                alert.error && 
                <Toast msg={{title: t("error"), body: alert.error}}
                handleShow={() => dispatch({type: GLOBALTYPES.ALERT, payload: {}})} 
                bgColor="bg-danger" />
            }

            {
                alert.success && 
                <Toast msg={{title: t("success"), body: alert.success}} 
                handleShow={() => dispatch({type: GLOBALTYPES.ALERT, payload: {}})}
                bgColor="bg-success" />
            }
        </div>
    )
}

export default Notify
