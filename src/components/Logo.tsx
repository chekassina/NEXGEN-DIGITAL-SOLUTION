import React from "react";

interface LogoIconProps {
  className?: string;
}

export function LogoIcon({ className = "w-6 h-6 object-contain" }: LogoIconProps) {
  return (
    <img
      src="/images/logo1.png"
      alt="Logo"
      className={className}
    />
  );
}