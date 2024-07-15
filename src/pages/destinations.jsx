import React, { useEffect, useState } from 'react';
import styled from "styled-components";
// import homeImage from "../assets/hero.png";


const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [newDestination, setNewDestination] = useState({
    name: '',
    description: '',
    image_url: '',
    location: ''
  });

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

  const handleAddDestination = () => {
    //  backend endpoint for adding destinations
    fetch('http://127.0.0.1:5555/destinations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDestination),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Successfully added destination:', data);
        // Update new destination 
        setDestinations([...destinations, data]);
        setNewDestination({
          name: '',
          description: '',
          image_url: '',
          location: ''
        });
      })
      .catch(error => console.error('Error adding destination:', error));
  };

  const handleDeleteDestination = (id) => {
    //  backend endpoint for deleting destinations
    fetch(`http://127.0.0.1:5555/destinations/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          console.log('Successfully deleted destination');
          // filtering out the deleted destination
          const updatedDestinations = destinations.filter(dest => dest.id !== id);
          setDestinations(updatedDestinations);
        } else {
          throw new Error('Failed to delete destination');
        }
      })
      .catch(error => console.error('Error deleting destination:', error));
  };

  const handleEditDestination = (id) => {
    //  edit functionality
    alert(`Edit destination with ID ${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDestination({
      ...newDestination,
      [name]: value
    });
  };

  return (
    <Section id="destinations">
      {/* <Background>
        <img src={homeImage} alt="Background" />
      </Background> */}
      <div className='title'>
        <h1>Available Destinations</h1>
      </div>
      <DestinationsGrid>
        {destinations.map(destination => (
          <DestinationCard key={destination.id}>
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <img src={destination.image_url} alt={destination.name} />
            <p>Location: {destination.location}</p>
            <Button onClick={() => handleDeleteDestination(destination.id)}>Delete</Button>
            <Button onClick={() => handleEditDestination(destination.id)}>Edit</Button>
          </DestinationCard>
        ))}
      </DestinationsGrid>

      {/* Form for adding new destination */}
      <AddDestinationForm>
        <h2>Add New Destination</h2>
        <InputContainer>
          <label>Name:</label>
          <input type="text" name="name" value={newDestination.name} onChange={handleChange} />
        </InputContainer>
        <InputContainer>
          <label>Description:</label>
          <input type="text" name="description" value={newDestination.description} onChange={handleChange} />
        </InputContainer>
        <InputContainer>
          <label>Image URL:</label>
          <input type="text" name="image_url" value={newDestination.image_url} onChange={handleChange} />
        </InputContainer>
        <InputContainer>
          <label>Location:</label>
          <input type="text" name="location" value={newDestination.location} onChange={handleChange} />
        </InputContainer>
        <Button onClick={handleAddDestination}>Add Destination</Button>
      </AddDestinationForm>
    </Section>
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

const AddDestinationForm = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 2rem;
  width: 100%;
  max-width: 600px;

  h2 {
    margin-bottom: 1rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    margin-bottom: 0.5rem;
    color: #fff;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

// const Background = styled.div`
//   position: relative;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     filter: brightness(0.7);
//   }
// `;