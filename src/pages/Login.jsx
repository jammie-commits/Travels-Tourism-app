import React, { useState } from 'react';
import styled from 'styled-components';

export default function LoginForm({ closeForm }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before new request
    try {
      const response = await fetch('http://localhost:5555/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.msg || 'An error occurred. Please try again.');
        return;
      }

      const data = await response.json();
      localStorage.setItem('access_token', data.access_token);
      alert('Login successful');
      closeForm(); // Close the form after successful login
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <FormContainer>
      <FormTitle>Login</FormTitle>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form onSubmit={handleSubmit}>
        <Label>Username</Label>
        <Input 
          type="text" 
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required 
        />
        <Label>Password</Label>
        <Input 
          type="password" 
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <SubmitButton type="submit">Login</SubmitButton>
        <CloseButton type="button" onClick={closeForm}>Close</CloseButton>
      </Form>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const FormTitle = styled.h2`
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  background-color: #48cae4;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: #023e8a;
  }
`;

const CloseButton = styled.button`
  padding: 0.5rem;
  background-color: #ccc;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #999;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 1rem;
`;
