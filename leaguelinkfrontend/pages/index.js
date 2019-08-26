import React from 'react';
import Head from 'next/head';
import css from '../index.scss';

const Home = () => (
  <div className={css.homeWrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <div className={css.homeBlock}>
      <img className={css.homeImage} src="../static/images/League-Link.png"/>
      <h1 className={css.homeTitle}>Introducing League Link</h1>
      <p className={css.homeDescription}>
        League Link is a multi purpose app for creating, managing and joining sports leagues and tournaments. From fun 'beer leagues' to leagues for 'hardos' we will be there to help you with the logistics. We are currently in the development process, however, please sign up here to receive updates and for a chance to be a first user.
      </p>
    </div>
  </div>
);

export default Home;
