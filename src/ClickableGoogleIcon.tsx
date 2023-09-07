import React, { MouseEvent } from 'react';

interface ClickableGoogleIconProps {
  href: string;
  onClick?: () => void;
}

function ClickableGoogleIcon({ href, onClick }: ClickableGoogleIconProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <a href={href} onClick={handleClick}>
      <div className="w-200 h-10 bg-white bg-opacity-50 rounded-lg flex items-center justify-center">
        <img
          src="/google.png"
          alt="Google Icon"
          className="w-6 h-6" // Adjust the width and height as needed
        />
      </div>
    </a>
  );
}

export default ClickableGoogleIcon;
