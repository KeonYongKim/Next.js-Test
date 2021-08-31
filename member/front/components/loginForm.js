import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import useInput from '../Hooks/useInput';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';
import styles from './component.module.css'

const loginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const { userCheck } = useSelector((state) => state.user)

  const path = "http://localhost:3060";
  const idOnChange = useCallback((e) => {
    setId(e.target.value);
  },[])
  const passwordOnChange = useCallback((e) => {
      setPassword(e.target.value);
  },[])
  const onChange = useCallback(() => {
      console.log("더미입니다.")
  })
  const dispatch = useDispatch();
  const onSubmit = useCallback(() => {
    if (id === '') {
      return alert("아이디를 입력하세요")
    } else if (password === '') {
      return alert("비밀번호를 입력하세요.")
    }
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        id: id,
        password: password,
      }
    })
  }, [id, password])
  if (userCheck === true) {
    setId('');
    setPassword('');
  }
  return (
    <div>
        <div className={styles.a}>
          <p className={styles.b}>React CMS</p>
        </div>
        <div className={styles.loginForm}>
          <input type="text" name="id" placeholder="아이디" className={styles.idInput} onChange={idOnChange}></input>
          <input type="text" name="password" placeholder="패스워드" className={styles.idInput2} onChange={passwordOnChange}></input>
          <button name="logInBtn" className={styles.idInput3} onClick={onSubmit}>로그인</button>
          <button name="naverBtn" className={styles.idInput4} onClick={onChange}>네이버 계정 로그인</button>
          <button name="daumBtn" className={styles.idInput5} onClick={onChange}>다음 계정 로그인</button>
          <div className={styles.line}></div>
          <div className={styles.ltr}>
            <a href={path + "/signUp"} className={styles.noUnderLine}><p name="signUp" className={styles.signUp} onClick={onChange}>회원가입</p></a>
            <a href={path} className={styles.noUnderLine}><p name="searchPassword" className={styles.searchPassword} onClick={onChange}>비밀번호 찾기</p></a>
          </div>
        </div>
    </div>
  );
}

export default loginForm;