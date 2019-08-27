import React from 'react';
import Link from 'next/link';
import css from '../styles/index.scss';

const Logo = () => (
  <Link href="/">
   <div className={css.logo}>
        <img className={css.logoImage} src="../static/images/leagueLinkLogo.svg" aria-hidden="true" focusable="false"/>
    </div>
  </Link>
);

export default Logo;
