import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import SignUpForm from '../components/signUpForm';

const signUp = () => {
  const { userCheck } = useSelector((state) => state.user)
  if (userCheck === true) {
    alert("회원가입이 완료되었습니다.");
  // 모달창으로 만들어서 회원가입이 완료된 후 로그인 페이지로 이동
  }
  return (
    <AppLayout>
      <Head>
          <title>React CMS</title>
      </Head>
      <SignUpForm></SignUpForm>
    </AppLayout>
  )
}

export default signUp;