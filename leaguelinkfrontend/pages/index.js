import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import GoogleButton from '../components/googleButton';
import Logo from '../components/logo';
import css from '../styles/index.scss';
import posed from 'react-pose';

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.08 }
});


function Home() {
  const [visible, setVisible] = useState(false);
  const [squareHover, setSquareHover ] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 500);
  }),[];

    return (
    <Box className={`${css.homeWrapper} ${css.homeBox}`} pose={visible ? 'visible' : 'hidden'}>
      <Head>
        <title>League Link</title>
        <link rel="shortcut icon" href="../static/images/favicon.png" />
      </Head>
      <div className={css.homeHerobanner}>
        <Logo/>
        <h1 className={css.homeTitle}>Introducing League Link</h1>
        <p className={css.homeDescription}>
          League Link is a multi purpose app for creating, managing and joining sports leagues and tournaments. From fun 'beer leagues' to leagues for 'hardos' we will be there to help you with the logistics.
        </p>
      </div>
      <Square className={css.homeBlock} 
          pose={squareHover ? "hovered" : "idle"}
          onMouseEnter={() => setSquareHover(true)}
          onMouseLeave={() => setSquareHover(false)}
        >
        <p className={css.homeBlockDescription}>
          We are working hard to bring the app to life. please sign up here to receive updates and for a chance to be a first user.
        </p>
        <GoogleButton/>
      </Square>
    </Box>
    );
};

export default Home;
