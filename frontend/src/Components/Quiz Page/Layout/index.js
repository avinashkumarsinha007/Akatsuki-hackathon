import React, { Fragment } from 'react';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <main>{children}</main>
    </Fragment>
  );
};


export default Layout;
