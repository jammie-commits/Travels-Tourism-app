import React, { useEffect, useState } from 'react';
import styled from "styled-components";

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
    <section id="destinations">
      <div className='title'>
      <h1>Destinations</h1>
      </div>
      <DestinationsGrid>
        {destinations.map(destination => (
          <DestinationCard key={destination.id}>
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <img src={destination.image_url} alt={destination.name} />
            <p>Location: {destination.location}</p>
          </DestinationCard>

        ))}
        </DestinationsGrid>
      </section>
  );
};
      
  

export default Destinations;


const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding: 0 3rem;

  @media screen and (min-width: 280px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

const DestinationCard = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #8338ec14;
  border-radius: 1rem;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateX(0.4rem) translateY(-1rem);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  img {
    width: 100%;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
