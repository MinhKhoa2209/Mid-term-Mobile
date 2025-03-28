import React, { useState} from "react";
import Notification from "./Notification";

interface CountdownTimerProps {
  birthDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ birthDate }) => {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [showNotification, setShowNotification] = useState(false); // Thêm state để kích hoạt thông báo

  const calculateDaysLeft = () => {
    if (!birthDate) return;

    const today = new Date();
    const birth = new Date(birthDate);
    let nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());

    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const timeDiff = nextBirthday.getTime() - today.getTime();
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    setDaysLeft(days);
    setShowNotification(true); // Sau khi tính toán xong, hiển thị thông báo
  };

  return (
    <div className="text-center">
      <button
        onClick={calculateDaysLeft}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Calculate Days Left
      </button>

      {daysLeft !== null && (
        <p className="mt-4 text-lg">
          {daysLeft > 0
            ? `Only ${daysLeft} days left until your birthday!`
            : "Happy Birthday! 🎉"}
        </p>
      )}

      {showNotification && daysLeft !== null && <Notification daysLeft={daysLeft} />}
    </div>
  );
};

export default CountdownTimer;
