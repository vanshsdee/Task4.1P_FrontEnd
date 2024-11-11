import React, { useState } from 'react';
import {Button, Form } from 'semantic-ui-react';
import './App.css'; // Import the CSS file

const Tutorials = () => {
  const [email, setEmail] = useState(''); // State for email input

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update email state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission (e.g., send to backend)
    alert(`Subscribed with email: ${email}`);
    setEmail(''); // Clear the input after submission
  };

  const tutorials = [
    { title: "REACT BASICS", description: "Learn the basics of React.", image: "https://picsum.photos/200/303?random=4" },
    { title: "Advanced React Patterns", description: "Explore advanced concepts in React development.", image: "https://picsum.photos/200/304?random=5" },
    { title: "Node Js tutorials", description: "Learn how to create a safe backend for fullstack projects", image: "https://picsum.photos/200/305?random=6" },
  ];

  return (
    <div>
      <h2>Tutorials</h2>
      <div className="card-container">
        {tutorials.map((tutorial, index) => (
          <div className="card" key={index}>
            <img src={tutorial.image} alt={tutorial.title} />
            <div className="card-content">
              <div className="card-header">{tutorial.title}</div>
              <div className="card-description">{tutorial.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* New section for links */}
      <div className="links-section">
        <h3>Links</h3>
        <Form onSubmit={handleSubmit} inline>
          <Form.Field>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </Form.Field>
          <Button type="submit">Signup for our daily insider</Button>
        </Form>
        <ul>
          <li><a>Dev@Deakin22</a></li>
          <li><a>Privacy Policy</a></li>
          <li><a>Code of Conduct</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Tutorials;
