import React, { useEffect, useState } from 'react';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5555/destinations')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setDestinations(data);
      })
      .catch(error => console.error('Error fetching destinations:', error));
  }, []);

  return (
    <div>
      <h1>Destinations</h1>
      <ul>
        {destinations.map(destination => (
          <li key={destination.id}>
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <img src={destination.image_url} alt={destination.name} />
            <p>Location: {destination.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Destinations;
