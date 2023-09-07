import React, { ChangeEvent } from 'react';

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ value, onChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="email"
        id="email"
        className="w-full px-4 py-2 border-2 border-brown-3 rounded-lg bg-brown-2 text-white placeholder-white shadow-none outline-none"
        placeholder="Email"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default EmailInput;
