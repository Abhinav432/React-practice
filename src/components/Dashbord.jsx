import React, { useState } from "react";


  // Dummy data
const students = [
  { id: 1, name: "Alice Johnson", room: "101", attendance: { "2024-06-01": true, "2024-06-02": false, "2024-06-03": true } },
  { id: 2, name: "Bob Smith", room: "102", attendance: { "2024-06-01": true, "2024-06-02": true, "2024-06-03": true } },
  { id: 3, name: "Charlie Lee", room: "101", attendance: { "2024-06-01": false, "2024-06-02": true, "2024-06-03": false } },
  { id: 4, name: "Diana King", room: "103", attendance: { "2024-06-01": true, "2024-06-02": true, "2024-06-03": true } },
];
const dates = ["2024-06-01", "2024-06-02", "2024-06-03"];
const rooms = ["All", ...Array.from(new Set(students.map((s) => s.room)))];

// Dummy attendance trend data (last 30 days)
const trendData = Array.from({ length: 30 }, (_, i) => ({
  date: `2024-05-${String(31 - i).padStart(2, "0")}`,
  present: Math.floor(Math.random() * students.length),
})).reverse();



const  Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState("2024-06-01");
  const [selectedRoom, setSelectedRoom] = useState("All");


  // Filter students by room
  const filteredStudents = students.filter(
    (s) => selectedRoom === "All" || s.room === selectedRoom
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Attendance Dashboard</h1>
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <label className="flex flex-col">
          <span className="mb-1 font-medium">Date</span>
          <select
            className="p-2 border rounded shadow"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            {dates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col">
          <span className="mb-1 font-medium">Room</span>
          <select
            className="p-2 border rounded shadow"
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
          >
            {rooms.map((room) => (
              <option key={room} value={room}>
                {room}
              </option>
            ))}
          </select>
        </label>
      </div>
      {/* Table */}
      <div className="overflow-x-auto rounded shadow mb-8">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Room</th>
              <th className="py-2 px-4 border-b">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-2 px-4 border-b">{student.name}</td>
                <td className="py-2 px-4 border-b">{student.room}</td>
                <td className="py-2 px-4 border-b text-center">
                  {student.attendance[selectedDate] ? (
                    <span className="inline-block px-2 py-1 bg-green-200 text-green-800 rounded-full text-xs font-semibold">Present</span>
                  ) : (
                    <span className="inline-block px-2 py-1 bg-red-200 text-red-800 rounded-full text-xs font-semibold">Absent</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Attendance Trend Graph */}
      <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Attendance Trends (Last 30 Days)</h2>
        <svg viewBox="0 0 320 100" className="w-full h-32">
          {/* X and Y axis */}
          <line x1="30" y1="10" x2="30" y2="90" stroke="#888" strokeWidth="1" />
          <line x1="30" y1="90" x2="310" y2="90" stroke="#888" strokeWidth="1" />
          {/* Trend line */}
          <polyline
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            points={trendData
              .map((d, i) => {
                const x = 30 + (i * 280) / (trendData.length - 1);
                const y = 90 - (d.present * 70) / students.length;
                return `${x},${y}`;
              })
              .join(" ")}
          />
          {/* Dots */}
          {trendData.map((d, i) => {
            const x = 30 + (i * 280) / (trendData.length - 1);
            const y = 90 - (d.present * 70) / students.length;
            return <circle key={i} cx={x} cy={y} r="2" fill="#3b82f6" />;
          })}
        </svg>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>{trendData[0].date}</span>
          <span>{trendData[trendData.length - 1].date}</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;