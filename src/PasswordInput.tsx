import React, { ChangeEvent } from 'react';

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  

  return (
    <div className="mb-4">
      <input
        type="password"
        id="password"
        className="w-full px-4 py-2 border-2 border-brown-3 rounded-lg bg-brown-2 text-white placeholder-white shadow-none outline-none"
        placeholder="Password"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default PasswordInput;
