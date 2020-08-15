import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center" style={{ marginTop: '90px' }}>
      <Link to="/toDoList">
        <button className="btn btn-dark">ToDoList</button>
      </Link>
    </div>
  );
};

export default Home;
