import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: '',
  });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5555/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const addUser = async () => {
    try {
      const response = await fetch('http://localhost:5555/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) {
        throw new Error('Failed to add user');
      }
      const data = await response.json();
      setUsers([...users, data]);
      setNewUser({
        name: '',
        email: '',
        role: '',
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5555/users/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const editUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5555/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingUser),
      });
      if (!response.ok) {
        throw new Error('Failed to edit user');
      }
      const updatedUser = await response.json();
      const updatedUsers = users.map(user =>
        user.id === id ? updatedUser : user
      );
      setUsers(updatedUsers);
      setEditingUser(null);
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingUser({
      ...editingUser,
      [name]: value,
    });
  };

  const startEditingUser = (user) => {
    setEditingUser(user);
  };

  const cancelEditing = () => {
    setEditingUser(null);
  };

  return (
    <StyledSection>
      <Title>
        <h2>Users Management</h2>
      </Title>
      <UserContainer>
        {users.map(user => (
          <UserCard key={user.id}>
            <UserInfo>
              {editingUser && editingUser.id === user.id ? (
                <>
                  <InputContainer>
                    <label>Name:</label>
                    <input
                      type='text'
                      name='name'
                      value={editingUser.name}
                      onChange={handleEditInputChange}
                    />
                  </InputContainer>
                  <InputContainer>
                    <label>Email:</label>
                    <input
                      type='email'
                      name='email'
                      value={editingUser.email}
                      onChange={handleEditInputChange}
                    />
                  </InputContainer>
                  <InputContainer>
                    <label>Role:</label>
                    <input
                      type='text'
                      name='role'
                      value={editingUser.role}
                      onChange={handleEditInputChange}
                    />
                  </InputContainer>
                  <Button onClick={() => editUser(user.id)}>Save</Button>
                  <Button onClick={cancelEditing}>Cancel</Button>
                </>
              ) : (
                <>
                  <h3>{user.name}</h3>
                  <p>Email: {user.email}</p>
                  <p>Role: {user.role}</p>
                  <Button onClick={() => startEditingUser(user)}>Edit</Button>
                  <Button onClick={() => deleteUser(user.id)}>Delete</Button>
                </>
              )}
            </UserInfo>
          </UserCard>
        ))}
      </UserContainer>

      {/* Form for adding new user */}
      <AddUserForm>
        <h2>Add New User</h2>
        <InputContainer>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
        </InputContainer>
        <InputContainer>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
        </InputContainer>
        <InputContainer>
          <label>Role:</label>
          <input
            type='text'
            name='role'
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          />
        </InputContainer>
        <Button onClick={addUser}>Add User</Button>
      </AddUserForm>
    </StyledSection>
  );
};

export default Users;

const StyledSection = styled.section`
  margin: 5rem 0;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const UserCard = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.5rem;
    color: #555;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddUserForm = styled.div`
  background-color: #f0f0f0;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
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
    color: #333;
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
  margin-top: 0.5rem;
  margin-right: 0.5rem;

  &:hover {
    background-color: #0056b3;
  }
`;
