import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import GoogleButton from '../components/googleButton';
import Logo from '../components/logo';
import css from '../styles/index.scss';

function Updates() {
    return (
    <>
    <Head>
        <title>League Link | Updates</title>
        <link rel="shortcut icon" href="../static/images/favicon.png" />
    </Head>
    <div key="box" className={`${css.homeWrapper} ${css.homeBox}`}>
        <div className={css.homeHerobanner}>
        <Logo/>
        <h1 className={css.homeTitle}>Updates</h1>
        <p className={css.homeDescription}>
            Come back for more updates surrounding events, promotion and app updates.
        </p>
        </div>
    </div>
    </>
    );
};

export default Updates;
