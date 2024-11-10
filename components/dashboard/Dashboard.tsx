// pages/index.tsx
"use client";
import { useState, useEffect } from "react";
import { db } from "@/database/db";
import { ref, get, update } from "firebase/database";
import { FiSun, FiWind, FiTv } from "react-icons/fi";
import { TfiLightBulb } from "react-icons/tfi";
import { FaPowerOff } from "react-icons/fa";
import { LuPowerOff } from "react-icons/lu";

// Define devices array with labels, db_keys, and default values
const initialDevices = [
  { label: "Bulb", db_key: "LED1", value: 0 },
  { label: "Ceiling Light", db_key: "LED2", value: 0 },
  { label: "Fan", db_key: "LED3", value: 0 },
  { label: "Socket", db_key: "LED4", value: 0 },
];

const Home = () => {
  // State for devices
  const [devices, setDevices] = useState(initialDevices);

  // Fetch initial data from Firebase
  useEffect(() => {
    const fetchDeviceData = async () => {
      try {
        const snapshot = await get(ref(db));

        if (snapshot.exists()) {
          const data = snapshot.val();
          const updatedDevices = devices.map((device) => ({
            ...device,
            value: data[device.db_key] || 0,
          }));
          setDevices(updatedDevices);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching device data:", error);
      }
    };

    fetchDeviceData();
  }, []);

  // Toggle device state and update Firebase
  const toggleDevice = async (db_key: string) => {
    const updatedDevices = devices.map((device) =>
      device.db_key === db_key
        ? { ...device, value: device.value === 0 ? 1 : 0 }
        : device
    );
    setDevices(updatedDevices);

    try {
      // Update the specific key in Firebase
      await update(ref(db), {
        [db_key]: updatedDevices.find((device) => device.db_key === db_key)
          ?.value,
      });
      console.log(`${db_key} updated successfully`);
    } catch (error) {
      console.error("Error updating device value:", error);
    }
  };

  // Map each device label to the relevant icon
  const deviceIcons: { [key: string]: JSX.Element } = {
    Bulb: <TfiLightBulb className="w-8 h-8 text-white" />,
    "Ceiling Light": <FiSun className="w-8 h-8 text-white" />,
    Fan: <FiWind className="w-8 h-8 text-white" />,
    Socket: <FiTv className="w-8 h-8 text-white" />,
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-[#1E2140] text-white">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between">
          <button className="text-2xl">☰</button>
          <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" className="w-10 h-10 bg-gray-400 rounded-full"/>
        </div>
        <h1 className="mt-6 text-2xl font-bold">Hello John 👋</h1>
        <p className="text-sm text-gray-300">Welcome to Home</p>
      </div>

      <div className="w-full max-w-md p-4 mt-4 bg-[#2A2D50] rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12">
              <img
                src="https://img.icons8.com/ios/50/FFFFFF/cloud.png"
                alt="Cloud Icon"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">Mostly Cloudy</p>
              <p className="text-sm text-gray-300">Sydney, Australia</p>
            </div>
          </div>
          <div className="text-4xl font-semibold">22°</div>
        </div>
        <div className="flex justify-between mt-4 text-sm text-gray-300">
          <p>
            27°C <span className="font-semibold text-white">Sensible</span>
          </p>
          <p>
            4% <span className="font-semibold text-white">Precipitation</span>
          </p>
          <p>
            66% <span className="font-semibold text-white">Humidity</span>
          </p>
          <p>
            16 km/h <span className="font-semibold text-white">Wind</span>
          </p>
        </div>
      </div>

      <div className="w-full max-w-md mt-6">
        <h2 className="text-lg font-semibold">Your Devices</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {devices.map(({ label, db_key, value }) => (
            <div
              key={db_key}
              className="p-4 bg-[#2A2D50] rounded-xl shadow-lg flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-center">
                {/* Render the icon for each device */}
                {deviceIcons[label]}
                <p className="mt-2 font-semibold">{label}</p>
              </div>

              <p className="mt-1 text-sm text-gray-300">
                {value ? "On" : "Off"}
              </p>

              <button
                onClick={() => toggleDevice(db_key)}
                className={`mt-4 h-12 w-12 flex items-center justify-center rounded-full transition-colors duration-200 ${
                  value
                    ? "bg-green-500"
                    : // ? "bg-gradient-to-r from-pink-500 to-orange-500 shadow-[0_0_10px_rgba(255,153,102,0.6)]"
                      "bg-gray-300 dark:bg-gray-700"
                }`}
              >
                {value ? (
                  <FaPowerOff className="text-gray-700 dark:text-gray-400 text-xl" />
                ) : (
                  <LuPowerOff className="text-yellow-500 text-xl" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
