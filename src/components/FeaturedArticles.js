import React from 'react';
import './App.css'; // Import the CSS file

const FeaturedArticles = () => {
  const articles = [
    { title: "Basics of FrontEnd Development", description: "A comprehensive guide to learn basics of HTML,CSS,Js.", image: "https://picsum.photos/200/300?random=1" },
    { title: "Advanced Javascsript concepts", description: "Learn how closures work in JavaScript.", image: "https://picsum.photos/200/301?random=2" },
    { title: "Advanced CSS guide", description: "Master CSS advanced concepts of animations.", image: "https://picsum.photos/200/302?random=3" },
  ];

  return (
    <div>
      <h2>Featured Articles</h2>
      <div className="card-container">
        {articles.map((article, index) => (
          <div className="card" key={index}>
            <img src={article.image} alt={article.title} />
            <div className="card-content">
              <div className="card-header">{article.title}</div>
              <div className="card-description">{article.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
