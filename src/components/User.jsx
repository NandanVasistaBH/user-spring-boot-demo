import axios from 'axios';
import { useState, useEffect } from 'react';

const User = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({});

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const resp = await axios.get("http://localhost:1212/all");
                setUsers(resp.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUsers();
    }, []);

    const addUser = async () => {
        const u = newUser;
        try {
            setNewUser({});
            const resp = await axios.post("http://localhost:1212/user", u);
            console.log(resp.data);
            // Refresh user list after adding a new user
            const updatedResp = await axios.get("http://localhost:1212/all");
            setUsers(updatedResp.data);
        } catch (error) {
            setNewUser(u);
            console.error(error);
        }
    };

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
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>List of Users</h1>
            {users && users.map((user, index) => (
                <div key={user.email} style={userStyle}>
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
