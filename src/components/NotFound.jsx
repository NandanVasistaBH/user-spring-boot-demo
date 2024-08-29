import React from 'react';

const NotFoundPage = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8d7da',
    color: '#721c24',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '4rem',
    margin: '0',
  };

  const messageStyle = {
    fontSize: '1.5rem',
    margin: '10px 0',
  };

  const linkStyle = {
    color: '#155724',
    textDecoration: 'none',
    fontSize: '1rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>404</h1>
      <p style={messageStyle}>Oops! The page you're looking for does not exist.</p>
      <a href="/" style={linkStyle}>Go back to the homepage</a>
    </div>
  );
};

export default NotFoundPage;
