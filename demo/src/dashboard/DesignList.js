import React from 'react';
import { useMatch, Link } from 'react-router-dom'

const DesignList = (props) => {
  const match = useMatch();

  return (
    <div>
      <h1>My Designs</h1>
      <p><Link to={`${match.url}/new`}>New Design</Link></p>
    </div>
  );
};

export default DesignList;
