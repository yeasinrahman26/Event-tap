import AttendingEvents from "@/components/DashBoardRoutes/AttendingEvent/AttendingEvent";
import React from "react";

const attendingEvents = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4 space-y-6">
        <AttendingEvents />
      </div>
    </div>
  );
};

export default attendingEvents;
