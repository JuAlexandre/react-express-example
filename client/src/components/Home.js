import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="container">
      <h1>Project Home</h1>
      <Link to={'./list'}>
        <button variant="raised">My List</button>
      </Link>
    </div>
  );
}
export default Home;