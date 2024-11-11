import React from 'react';
import Header from './components/Header';
import FeaturedArticles from './components/FeaturedArticles';
import Tutorials from './components/Tutorials';
import './components/App.css';

const App = () => {
  return (
    <div>
      <Header />
      <FeaturedArticles />
      <Tutorials />
    </div>
  );
};

export default App;
