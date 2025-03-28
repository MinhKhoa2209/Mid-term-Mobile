import CountdownTimer from "../components/CountdownTimer";
import DatePicker from "../components/DatePicker";
import ShareButton from "../components/ShareButton";
import BatteryStatus from "../components/BatteryStatus";
import { useState, useEffect } from "react";

const Home = () => {
  const [birthDate, setBirthDate] = useState("");

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";

    return () => {
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 text-center">
      <h1 className="text-2xl font-bold mb-4 whitespace-nowrap">
        🎉 Birthday Countdown 🎂
      </h1>
      <DatePicker birthDate={birthDate} setBirthDate={setBirthDate} />
      <CountdownTimer birthDate={birthDate} />
      <ShareButton />
      <BatteryStatus />
    </div>
  );
};

export default Home;
