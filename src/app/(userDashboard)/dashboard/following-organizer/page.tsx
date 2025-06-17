import Following from "@/components/DashBoardRoutes/Following/Following";
import React from "react";

const followingOrganizer = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4 space-y-6">
      <Following /> 
      </div>
    </div>
  );
};

export default followingOrganizer;
