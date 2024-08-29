import axios from 'axios';
import { useState, useEffect } from 'react';

// Get the base URL from environment variables
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const User = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({});

    // Fetch users from the server
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const resp = await axios.get(`${API_BASE_URL}/all`);
                setUsers(resp.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUsers();
    }, []);

    // Add a new user
    const addUser = async () => {
        const u = newUser;
        try {
            setNewUser({});
            await axios.post(`${API_BASE_URL}/user`, u);
            // Refresh the user list
            const updatedResp = await axios.get(`${API_BASE_URL}/all`);
            setUsers(updatedResp.data);
        } catch (error) {
            setNewUser(u);
            console.error(error);
        }
    };

    // Delete a user by email
    const deleteUser = async (email) => {
        try {
            await axios.delete(`${API_BASE_URL}/user?email=${email}`);
            // Refresh the user list after deletion
            const updatedResp = await axios.get(`${API_BASE_URL}/all`);
            setUsers(updatedResp.data);
        } catch (error) {
            console.error(error);
        }
    };

    // Styles
    const containerStyle = {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    };

    const headerStyle = {
        marginBottom: '20px',
        color: '#333',
    };

    const userStyle = {
        border: '1px solid #ddd',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
        position: 'relative', // For positioning the delete button
    };

    const inputStyle = {
        margin: '5px 0',
        padding: '8px',
        width: '100%',
        boxSizing: 'border-box',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '5px 0',
    };

    const deleteButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        padding: '5px 10px',
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>List of Users</h1>
            {users && users.map((user, index) => (
                <div key={index} style={userStyle}>
                    <button
                        style={deleteButtonStyle}
                        onClick={() => deleteUser(user.email)}
                    >
                        Delete
                    </button>
                    <h3>{user.name}</h3>
                    <h3>{user.email}</h3>
                    <h3>{user.age}</h3>
                </div>
            ))}
            <h2 style={headerStyle}>Add a new User</h2>
            <input
                type='text'
                placeholder='Name'
                value={newUser.name || ''}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                style={inputStyle}
            />
            <input
                type='text'
                placeholder='Email'
                value={newUser.email || ''}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                style={inputStyle}
            />
            <input
                type='number'
                placeholder='Age'
                value={newUser.age || ''}
                onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
                style={inputStyle}
            />
            <button onClick={addUser} style={buttonStyle}>Add User</button>
        </div>
    );
};

export default User;
