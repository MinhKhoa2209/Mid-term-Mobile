import { useEffect, useState } from "react";
import { Device } from "@capacitor/device";

const BatteryStatus = () => {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [charging, setCharging] = useState<boolean | null>(null);

  useEffect(() => {
    const getBatteryStatus = async () => {
      try {
        const batteryStatus = await Device.getBatteryInfo();
        if (typeof batteryStatus.batteryLevel === "number") {
          setBatteryLevel(Math.round(batteryStatus.batteryLevel * 100));
        }
        setCharging(batteryStatus.isCharging ?? null);
      } catch (error) {
        console.error("Failed to get battery status:", error);
      }
    };

    getBatteryStatus();
  }, []);

  return (
    <div className="mt-6 w-full max-w-xs bg-gray-800 p-5 rounded-xl text-center text-white shadow-lg border border-gray-700">
      <h2 className="text-lg font-semibold mb-2">🔋 Battery Status</h2>
      {batteryLevel !== null ? (
        <p className="text-xl font-bold">
          {batteryLevel}% {charging ? "⚡ Charging" : ""}
        </p>
      ) : (
        <p className="text-sm text-gray-400">Unable to retrieve data</p>
      )}
    </div>
  );
};

export default BatteryStatus;
