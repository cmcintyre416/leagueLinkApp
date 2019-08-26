import React from 'react';
import Head from 'next/head';
import GoogleButton from '../components/googleButton';
import css from '../styles/index.scss';

const Home = () => (
  <div className={css.homeWrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <div className={css.homeHerobanner}>
      <div className={css.logo}>
        <img className={css.logoImage} src="../static/images/roundedLogo.svg" aria-hidden="true" focusable="false"/>
        <span className={css.logoTextTop}>eague</span>
        <span className={css.logoTextBottom}>link</span>
      </div>
      <h1 className={css.homeTitle}>Introducing League Link</h1>
      <p className={css.homeDescription}>
        League Link is a multi purpose app for creating, managing and joining sports leagues and tournaments. From fun 'beer leagues' to leagues for 'hardos' we will be there to help you with the logistics.
      </p>
    </div>
    <div className={css.homeBlock}>
      <p className={css.homeBlockDescription}>
        We are working hard to bring the app to life. please sign up here to receive updates and for a chance to be a first user.
      </p>
      <GoogleButton/>
    </div>
  </div>
);

export default Home;
