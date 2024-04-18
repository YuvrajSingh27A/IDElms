// UserManagement.js
import React, { useState } from 'react';

const UserManagement = () => {
  // Sample user data for demonstration
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Instructor' },
    { id: 3, name: 'Alex Johnson', email: 'alex@example.com', role: 'Admin' },
  ]);

  // Function to delete a user
  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">User Management</h3>
      {/* User list */}
      <div className="mb-4">
        <h4 className="text-xl font-bold mb-2">User List</h4>
        <ul>
          {users.map(user => (
            <li key={user.id} className="flex items-center justify-between py-2">
              <div>
                <span className="font-semibold">{user.name}</span> - {user.email} ({user.role})
              </div>
              <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white px-2 py-1 rounded-md">Delete</button>
            </li>
          ))}
        </ul>
      </div>
      {/* User roles and permissions management - Placeholder */}
      <div>
        <h4 className="text-xl font-bold mb-2">Roles & Permissions Management</h4>
        <p>This section can include functionality to manage user roles and permissions.</p>
        {/* Placeholder for role and permissions management */}
      </div>
    </div>
  );
}

export default UserManagement;
