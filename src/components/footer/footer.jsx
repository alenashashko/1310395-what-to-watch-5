import React from 'react';

import Logo from '../logo/logo';
import {CLASSNAME_FOR_LIGHT_LOGO_LINK} from '../../const';

const Footer = () => {
  return (
    <footer className="page-footer">
      <Logo className={CLASSNAME_FOR_LIGHT_LOGO_LINK} />
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
