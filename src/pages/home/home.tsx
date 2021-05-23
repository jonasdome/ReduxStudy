import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

const Home: React.FC = () => {
  const { repositories } = useSelector((state: ApplicationState) => state);

  return (
    <ul>
      {repositories.data.map(repository => (
        <li key={repository.id}>{repository.name}</li>
      ))}
    </ul>
  );
};

export default Home;
