import React from 'react';
import PropTypes from 'prop-types';
import styles from '../components/component.module.css';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import Mail from '../components/mail'

const EmailList = () => {
    const { numMail } = useSelector((state) => state.user)
    return (
        <div>
            <div className={styles.mailBox}>
                <div className={styles.mailListBox}>
                    {numMail.map((mail) => (
                        <Mail mail={ mail } key={mail.id} />
                    ))}
                </div>
                <div className={styles.titleBox}>
                    <div className={styles.titleMail}>
                        <p className={styles.titleMailFuncWrite}>메일쓰기</p>
                        <p className={styles.titleMailFuncSend}>보낸메일</p>
                        <p className={styles.titlMailFuncGet}>받은메일</p>
                    </div>
                    <div className={styles.title_mail}>
                        <p className={styles.title_title}>Mail</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailList;