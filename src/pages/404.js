import * as React from 'react';
import { Link } from 'gatsby';
import '../styles/404.css';

const NotFoundPage = () => {
  return (
    <main className='not-found-container'>
      <h1 className='not-found-header' >
        Page not found
      </h1>
      <p className='not-found-body'>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to='/'>Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
