import React from 'react';

import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <p>Hello, world!</p>
      <Link to="/about/123">About page</Link>
    </>
  );
}

export default HomePage;
