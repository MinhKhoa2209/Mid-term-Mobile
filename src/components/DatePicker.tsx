import React from "react";

interface DatePickerProps {
  birthDate: string;
  setBirthDate: (date: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ birthDate, setBirthDate }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-lg">Select your birthdate:</label>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
        max={new Date().toISOString().split("T")[0]}
      />
    </div>
  );
};

export default DatePicker;
