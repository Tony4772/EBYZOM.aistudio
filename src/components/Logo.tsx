import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'full', size = 'md' }) => {
  const [imageError, setImageError] = React.useState(false);
  const logoUrl = "https://lh3.googleusercontent.com/aida/AEtjO1XvVSPNFBg1VLBUutwDZfw6-hbwtXHTzNdV_4UuYxV3fBjG0BZcRd0oFuSWscTJYCIS4v5WP6Wpi-gD_VGdc8HHgtBU0LiBmHxk73ZJjA1gQzGeUYsDjzKRFrcO0KF90F5DhEUsNGK8Qs8QgmZJ9CqymP6Aa_zw7Rc6yayQYzwxDyEJC6YZz5SZOqOOoyLn2ILlGF7P1ojX1mzTmE_dSX3PoWGkmgwDPeqNWkXAvcyl6MGbpT2T0VaqxdtG2yRe1-HUrYTCkTcblLk";

  const heightClass = size === 'sm' ? 'h-7' : size === 'lg' ? 'h-10' : 'h-8';

  if (!imageError) {
    return (
      <img
        src={logoUrl}
        alt="EBYZOM E.I.R.L. Logo"
        referrerPolicy="no-referrer"
        className={`${heightClass} w-auto object-contain ${className}`}
        onError={() => setImageError(true)}
      />
    );
  }

  // High-fidelity SVG Fallback matching Image 1 & 2
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        className={heightClass}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="46" stroke="#2E9B3D" strokeWidth="6" fill="#F8F9FF" />
        {/* Left E in green */}
        <path
          d="M45 28 C45 23 41 20 34 20 L22 20 C14 20 10 25 10 33 L10 67 C10 75 14 80 22 80 L34 80 C41 80 45 77 45 72 L45 56 L24 56 L24 44 L45 44 Z"
          fill="#2E9B3D"
        />
        {/* Right B / 3 in blue */}
        <path
          d="M55 20 L76 20 C84 20 90 25 90 34 C90 41 86 46 80 48 C87 50 90 55 90 64 C90 73 84 80 76 80 L55 80 Z M67 43 L74 43 C78 43 80 40 80 35 C80 30 78 28 74 28 L67 28 Z M67 72 L74 72 C78 72 80 69 80 64 C80 59 78 57 74 57 L67 57 Z"
          fill="#2962BA"
        />
      </svg>
      {variant === 'full' && (
        <span className="font-display font-bold tracking-tight text-xl text-[#0b1c30]">
          EBYZOM <span className="text-[#006b1e] font-semibold text-sm">E.I.R.L.</span>
        </span>
      )}
    </div>
  );
};
