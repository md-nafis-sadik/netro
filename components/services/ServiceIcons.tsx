import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const PythonIcon = ({ className, size = 48 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    <path
      d="M24 4L14 8V16H24V18H10L6 22V32L10 36H16V28H26V26H38L42 22V12L38 8L28 4H24Z"
      fill="#FFC400"
    />
    <circle cx="20" cy="12" r="2" fill="#000" />
  </svg>
);

export const TypeScriptIcon = ({ className, size = 48 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    <rect width="48" height="48" rx="4" fill="#3178C6" />
    <text
      x="24"
      y="32"
      fontSize="24"
      fontWeight="bold"
      textAnchor="middle"
      fill="white"
      fontFamily="monospace"
    >
      TS
    </text>
  </svg>
);

export const AIIcon = ({ className, size = 48 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    <text
      x="24"
      y="32"
      fontSize="28"
      fontWeight="bold"
      textAnchor="middle"
      fill="#FFC400"
      fontFamily="sans-serif"
    >
      ai
    </text>
  </svg>
);

export const DatabaseIcon = ({ className, size = 48 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    <ellipse cx="24" cy="12" rx="14" ry="6" fill="#FFC400" />
    <path
      d="M10 12V24C10 27.314 16.268 30 24 30C31.732 30 38 27.314 38 24V12"
      stroke="#FFC400"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M10 24V36C10 39.314 16.268 42 24 42C31.732 42 38 39.314 38 36V24"
      stroke="#FFC400"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

export const PostgreSQLIcon = ({ className, size = 48 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    <path
      d="M24 4C14 4 8 8 8 14V34C8 40 14 44 24 44C34 44 40 40 40 34V14C40 8 34 4 24 4Z"
      fill="#336791"
    />
    <circle cx="24" cy="20" r="4" fill="white" />
  </svg>
);

export const APIIcon = ({ className, size = 48 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    <path
      d="M8 12H16V20H8V12Z M26 12H34V20H26V12Z M8 28H16V36H8V28Z M26 28H34V36H26V28Z"
      fill="#FFC400"
    />
    <path d="M16 16H26M16 32H26M12 20V28M30 20V28" stroke="#FFC400" strokeWidth="2" />
  </svg>
);

export const ReactIcon = ({ className, size = 48 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    <circle cx="24" cy="24" r="3" fill="#61DAFB" />
    <ellipse cx="24" cy="24" rx="18" ry="7" stroke="#61DAFB" strokeWidth="2" fill="none" />
    <ellipse
      cx="24"
      cy="24"
      rx="18"
      ry="7"
      stroke="#61DAFB"
      strokeWidth="2"
      fill="none"
      transform="rotate(60 24 24)"
    />
    <ellipse
      cx="24"
      cy="24"
      rx="18"
      ry="7"
      stroke="#61DAFB"
      strokeWidth="2"
      fill="none"
      transform="rotate(-60 24 24)"
    />
  </svg>
);

export const CloudIcon = ({ className, size = 48 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    <path
      d="M36 32H12C8.686 32 6 29.314 6 26C6 22.686 8.686 20 12 20C12 14.477 16.477 10 22 10C27.523 10 32 14.477 32 20H36C39.314 20 42 22.686 42 26C42 29.314 39.314 32 36 32Z"
      fill="#FFC400"
    />
  </svg>
);

export const LLMIcon = ({ className, size = 48 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    <rect x="8" y="18" width="32" height="4" fill="#FFC400" />
    <rect x="8" y="26" width="24" height="4" fill="#FFC400" />
    <rect x="8" y="34" width="28" height="4" fill="#FFC400" />
    <path d="M38 10L42 14L38 18" stroke="#FFC400" strokeWidth="2" fill="none" />
  </svg>
);
