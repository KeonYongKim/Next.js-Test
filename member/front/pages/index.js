import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/loginForm';
import UserProfile from '../components/UserProfile';
import TabMenu from '../components/tabmenu';
import Test from '../components/test';
import StudentList from '../components/StudentsList';
import EmailList from '../components/mailList';

const Home = () => {
  const { me, userCheck, numMail } = useSelector((state) => state.user);
  console.log(me);
  console.log(userCheck);
  return (
    <AppLayout>
      <TabMenu></TabMenu>
      {/* <EmailList></EmailList> */}
      {/* {userCheck ? <UserProfile /> : <LoginForm />} */}
    </AppLayout>
  );
}

export default Home;