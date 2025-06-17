import Invite from '@/components/DashBoardRoutes/Invite/Invite';
import React from 'react';

const invite = () => {
    return (
      <div className="min-h-screen bg-gray-100 p-4 md:p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4 space-y-6">
          <Invite />
        </div>
      </div>
    );
};

export default invite;