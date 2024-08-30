import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import pp1 from "./assets/person/1.jpeg";

ChartJS.register(ArcElement, Tooltip, Legend);

const Profile = () => {
  const data = {
    labels: ["SEO", "Web Development", "Logo Design"],
    datasets: [
      {
        data: [300, 500, 200],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 4,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
    layout: {
      padding: 10,
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="p-6 mx-auto bg-white shadow-md rounded-lg transition duration-500 hover:shadow-xl ">
        <div className="flex gap-20 items-center">
          <div className="w-1/4 h-screen p-4 bg-blue-500 text-white rounded-lg">
            <div className="text-center mb-4">
              <img
                src={pp1}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h2 className="mt-4 text-3xl font-bold">Mr. Rahul Tiwari</h2>
            </div>
            <div className="text-sm p-[2vw] pt-4">
              <p className="mb-5 ">123 Rajiv Chowk, Delhi</p>
              <p className="mb-5">Rahul.tiwari@gmail.com</p>
              <p className="mb-5">Cell: +91 82989349</p>
            </div>
            <div>
              <h5 className="font-semibold text-3xl pl-[2vw]">Skills</h5>
              <div className="text-md p-[2vw] pt-4">
                <ul className="list-disc list-inside">
                  <li className="mb-5">SEO</li>
                  <li className="mb-5">Web Development</li>
                  <li className="mb-5">Logo Design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 p-4">
            <div className="flex items-center mb-4 gap-[19.2vw]">
              <div>
                <h3 className="text-xl font-semibold">Freelance Stats</h3>
                <p className="text-sm text-gray-600">Overall</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Total Earnings</h3>
                <p className="text-sm text-gray-600">All Time</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-10 rounded-lg shadow flex flex-col items-center">
                <Pie data={data} options={options} />
                <p className="text-sm mt-4">Skills Distribution</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <h4 className="text-lg font-semibold">$22,099</h4>
                <p className="text-sm text-gray-500">Total Earnings</p>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h4 className="text-lg font-semibold mb-2">Recent Projects</h4>
              <ul>
                <li className="mb-2">E-commerce Website - Completed - $3000</li>
                <li className="mb-2">Portfolio Website - In Progress - $1200</li>
                <li className="mb-2">Mobile App Design - Completed - $2000</li>
                <li className="mb-2">SEO Optimization - Completed - $800</li>
                <li className="mb-2">WordPress Theme - In Progress - $1500</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
