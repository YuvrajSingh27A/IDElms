
import React from 'react';
import UserManagement from './UserManagement';
import CourseManagement from './CourseManagement';
import Statistics from './Statistics';
import Announcements from './Announcements';
import Settings from './Settings';

const AdminDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-4">
        <div className="container mx-auto">
          {/* Section: Users */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">User Management</h2>
            <UserManagement />
          </div>

          {/* Section: Courses */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Course Management</h2>
            <CourseManagement />
          </div>

          {/* Section: Statistics */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Statistics</h2>
            <Statistics />
          </div>

          {/* Section: Announcements */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Announcements</h2>
            <Announcements />
          </div>

          {/* Section: Settings */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <Settings />
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}

export default AdminDashboard;
