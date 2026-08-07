import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'header' }) => {
  const sizeClasses =
    variant === 'footer'
      ? 'w-[175px] sm:w-[190px] lg:w-[205px] h-auto object-contain'
      : 'w-[132px] sm:w-[145px] md:w-[155px] lg:w-[172px] h-auto object-contain';

  return (
    <Link
      to="/"
      className={`inline-flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2891CB] rounded ${className}`}
      aria-label="MakeMyCampaign Home"
    >
      <img
        src="/mmc-logo.svg"
        alt="MakeMyCampaign"
        className={sizeClasses}
        loading="eager"
        width={variant === 'footer' ? 205 : 172}
        height={50}
      />
    </Link>
  );
};
