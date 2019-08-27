import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import GoogleButton from '../components/googleButton';
import Logo from '../components/logo';
import css from '../styles/index.scss';
import posed, { PoseGroup } from 'react-pose';

const Box = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    delayChildren: 200,
    staggerChildren: 50,
    transition: {
      y: { type: 'spring', stiffness: 500, damping: 50 },
      default: { duration: 1000 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 100 }
  }
});

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.08 }
});


function Home() {
  const [boxVisible, setBoxVisible] = useState(false);
  const [squareHover, setSquareHover ] = useState(false);

  useEffect(() => {
      setBoxVisible(true);
  }),[];

    return (
    <>
      <Head>
        <title>League Link</title>
        <link rel="shortcut icon" href="../static/images/favicon.png" />
      </Head>
      <PoseGroup>
        {boxVisible && [
        <Box key="box" className={`${css.homeWrapper} ${css.homeBox}`}>
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
        ]}
      </PoseGroup>
    </>
    );
};

export default Home;
