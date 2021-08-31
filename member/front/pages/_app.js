import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore';
import AppLayout from '../components/AppLayout';
import '../styles.css';

const ReactCMS = ({ Component }) => (
  <AppLayout>
    <Head>
      <meta charSet="utf-8" />
      <title>ReactCMS</title>
    </Head>
    <Component />
  </AppLayout>
);

AppLayout.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(ReactCMS));