import React, { useEffect, useState } from 'react';
import Card from './Card';

const Home = () => {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    fetch('https://cat-fact.herokuapp.com/facts')
      .then((res) => res.json())
      .then((data) => setFacts(data.all));
  });
  return (
    <div>
      <h1>Home</h1>
      {facts.map((fact, index) => {
        return <Card key={index} data={fact} />;
      })}
    </div>
  );
};

export default Home;
