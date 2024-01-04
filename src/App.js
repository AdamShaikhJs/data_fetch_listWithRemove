import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [user, setUser] = useState([]);
  const fetchUser = async () => {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      response = await response.json();
      setUser(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const removerUser = (id) => {
    let newList = user.filter((val) => val.id !== id);
    setUser(newList);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <h1>React data fetch!</h1>
      <p>fetch user from fake api and delete item by id</p>
      <div style={{ border: '2px solid gray', padding: '10px' }}>
        {user?.map((val) => (
          <div className="listStyle">
            <h6>{val.name}</h6>{' '}
            <button onClick={() => removerUser(val.id)}>remove</button>
          </div>
        ))}
      </div>
      {user.length < 1 && (
        <div style={{ marginLeft: '40%' }}>
          <button onClick={fetchUser}>reset </button>
        </div>
      )}
    </div>
  );
}
