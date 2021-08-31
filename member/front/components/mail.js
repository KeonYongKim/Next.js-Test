import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from '../components/component.module.css';
import classNames from 'classnames';

const Email = ({ mail }) => {
    // 받을 때는 객체{}로 받아야 함.
    return (
        <Fragment>
            <div className={styles.mailEntityBox}>
                <div className={styles.fileIconBox}>
                    <img className={styles.fileIcon} src="img/fileclip.png"></img>
                </div>
                <div className={styles.textBox}>
                    <p className={classNames({[styles.textDay]: true, [styles.mailTextStyle]: true})}>받은날짜 : {mail.day}</p>
                    <p className={classNames({[styles.textTitle]: true, [styles.mailTextStyle]: true})}>제목 : {mail.title}</p>
                    <p className={classNames({[styles.textSender]: true, [styles.mailTextStyle]: true})}>보낸 이 : {mail.sender}</p>
                </div>
            </div>
        </Fragment>
    )
}



export default Email;