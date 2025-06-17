import Followers from '@/components/DashBoardRoutes/Followers/Followers';
import React from 'react';

const followers = () => {
    return (
      <div className="min-h-screen bg-gray-100 p-4 md:p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4 space-y-6">
        <Followers />
        </div>
      </div>
    );
};

export default followers;