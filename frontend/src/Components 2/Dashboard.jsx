"use client";

import { useState, useEffect } from "react";
import {
  Search,
  LayoutDashboard,
  FolderKanban,
  ListTodo,
  Wrench,
  Bell,
  MessageSquare,
} from "lucide-react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Link } from "react-router-dom";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const NavItem = ({ icon, label, active, badge, darkMode }) => {
  return (
    <div
      className={`flex items-center p-2 space-x-3 rounded-lg cursor-pointer ${active
        ? "bg-blue-500 text-white"
        : `${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
        }`
        }`}
    >
      {icon}
      <span className="flex-1">{label}</span>
      {badge && (
        <span className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
};

const tasks = [
  {
    name: "Client Onboarding - Circle",
    admin: { name: "Samanta J.", avatar: "/placeholder.svg?height=32&width=32" },
    members: 3,
    status: "in-progress",
    runTime: "6 hours",
    finishDate: "6 Mon",
  },
  {
    name: "Meeting with Webflow & Notion",
    admin: { name: "Bob P.", avatar: "/placeholder.svg?height=32&width=32" },
    members: 4,
    status: "done",
    runTime: "2 hours",
    finishDate: "7 Tue",
  },
  {
    name: "First Handoff with Engineers",
    admin: { name: "Kate O.", avatar: "/placeholder.svg?height=32&width=32" },
    members: 10,
    status: "in-progress",
    runTime: "3 days",
    finishDate: "10 Fri",
  },
  {
    name: "Client Drafting (5) with Lawrence",
    admin: { name: "Jack F.", avatar: "/placeholder.svg?height=32&width=32" },
    members: 7,
    status: "in-progress",
    runTime: "1 week",
    finishDate: "16 Sun",
  },
];

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("list");
  const [darkMode, setDarkMode] = useState(false);

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggles the dark mode class on the body element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Bar chart data
  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June,"],
    datasets: [
      {
        label: "Monthly booking",
        data: [30, 45, 60, 80, 90, 100],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Bar chart options
  const barChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Villa Booking Over Time",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Doughnut chart data
  const doughnutChartData = {
    labels: ["Budget Villas", "Premium Villas", "Luxury Villas"],
    datasets: [
      {
        label: "Villa Distribution",
        data: [300, 50, 100],
        backgroundColor: ["#FF0000", "#0000FF", "#FFFF00"],
        hoverOffset: 4,
      },
    ],
  };

  // Doughnut chart options
  const doughnutChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "villa Distribution",
      },
    },
  };

  return (
    <div
      className={`flex flex-col md:flex-row h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100"}`}
    >
      {/* Sidebar */}
      <div
        className={`${darkMode ? "bg-gray-800" : "bg-white"} w-full md:w-64 shadow-lg md:h-screen`}
      >
        <div className="p-4">
          <h1 className="text-xl font-bold mb-8">BRESS</h1>
          <nav className="space-y-2">
            <Link to="/dashboard" className="flex items-center p-2 space-x-3 rounded-lg decoration-none cursor-pointer dark:hover:bg-gray-200">
              <LayoutDashboard size={20} />
              <span className="flex-1">Dashboard</span>
            </Link>
            <Link to="/orders" className="flex items-center p-2 space-x-3 rounded-lg decoration-none cursor-pointer dark:hover:bg-gray-200">
              <FolderKanban size={20} />
              <span className="flex-1">Orders</span>
            </Link>
            <Link to="/addVillas" className="flex items-center p-2 space-x-3 rounded-lg decoration-none cursor-pointer dark:hover:bg-gray-200">
              <ListTodo size={20} />
              <span className="flex-1">Add Villas</span>
            </Link>
            <Link to="/settings" className="flex items-center p-2 space-x-3 rounded-lg decoration-none cursor-pointer dark:hover:bg-gray-200">
              <Wrench size={20} />
              <span className="flex-1">Settings</span>
            </Link>
            <Link to="/notifications" className="flex items-center p-2 space-x-3 rounded-lg decoration-none cursor-pointer dark:hover:bg-gray-200">
              <Bell size={20} />
              <span className="flex-1">Notifications</span>
            </Link>
            <Link to="/logout" className="flex items-center p-2 space-x-3 rounded-lg decoration-none cursor-pointer dark:hover:bg-gray-200">
              <MessageSquare size={20} />
              <span className="flex-1">Logout</span>
            </Link>
            {/* <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" darkMode={darkMode} active />
            <NavItem icon={<FolderKanban size={20} />} to="/orders" label="Orders" darkMode={darkMode} />
            <NavItem icon={<ListTodo size={20} />} to="/addVillas" label="Add Villas" darkMode={darkMode} />
            <NavItem icon={<Wrench size={20} />} label="Settings" darkMode={darkMode} />
            <NavItem icon={<Bell size={20} />} label="Notifications" badge="3" darkMode={darkMode} />
            <NavItem icon={<MessageSquare size={20} />} label="Logout" darkMode={darkMode} /> */}
          </nav>
        </div>

        {/* User Profile */}
        <div className="absolute bottom-0 w-full md:w-64 border-t p-4">
          <div className="flex items-center space-x-3">
            <img
              src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">Emily Jonson</p>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                jonson@bress.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 overflow-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="relative w-full md:w-[400px] mb-2 md:mb-0">
            <input
              type="text"
              placeholder="Search"
              className={`pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900"}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <div className="flex items-center space-x-4">
            <button
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${viewMode === "card" ? "bg-gray-900 text-white" : "text-gray-600"}`}
              onClick={() => setViewMode("card")}
            >
              <span className="text-sm">Card</span>
            </button>
            <button
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${viewMode === "list" ? "bg-gray-900 text-white" : "text-gray-600"}`}
              onClick={() => setViewMode("list")}
            >
              <span className="text-sm">List</span>
            </button>
            <button
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-600"}`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <span className="text-sm">{darkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>

        {/* Bar Chart and Donut Chart */}
        <div className="flex flex-col md:flex-row justify-center space-x-8 mb-8">
          <div className="w-full max-w-[500px]">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
          <div className="w-full max-w-[400px]">
            <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
