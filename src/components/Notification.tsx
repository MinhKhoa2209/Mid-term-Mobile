import { useEffect } from "react";
import { LocalNotifications } from "@capacitor/local-notifications";

interface NotificationProps {
  daysLeft: number;
}

const Notification: React.FC<NotificationProps> = ({ daysLeft }) => {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const perm = await LocalNotifications.requestPermissions();
        if (perm.display !== "granted") {
          console.error("Notification permission denied");
        }
      } catch (error) {
        console.error("Failed to request notification permission:", error);
      }
    };

    requestPermission();
  }, []);

  useEffect(() => {
    const scheduleNotification = async () => {
      if (daysLeft === null || daysLeft > 7 || daysLeft < 0) {
        console.warn("Notification not scheduled. Days left:", daysLeft);
        return;
      }

      try {
        await LocalNotifications.schedule({
          notifications: [
            {
              id: new Date().getTime(),
              title: "🎂 Birthday Reminder!",
              body: `Only ${daysLeft} days left until your birthday! 🎉`,
              schedule: { at: new Date(Date.now() + 1000) }, // Hiển thị sau 1 giây
            },
          ],
        });

        console.log("🎉 Notification scheduled successfully");
      } catch (error) {
        console.error("❌ Error scheduling notification:", error);
      }
    };

    scheduleNotification();
  }, [daysLeft]); // Tự động chạy khi daysLeft thay đổi

  return null; // Không cần render UI
};

export default Notification;
