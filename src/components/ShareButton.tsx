import { Share } from "@capacitor/share";

const ShareButton = () => {
  const shareContent = async () => {
    await Share.share({
      title: "Birthday Countdown",
      text: "Check out my birthday countdown app!",
      url: window.location.href,
    });
  };

  return (
    <button
      onClick={shareContent}
      className="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition">
      Share
    </button>
  );
};

export default ShareButton;
