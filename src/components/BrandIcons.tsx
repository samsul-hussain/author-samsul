import React from 'react';

export const UpworkIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.794 0-5.467 2.85-6.07 4.793-1.464-2.222-2.39-4.839-2.584-6.811H6.702v7.712c0 2.215-1.798 4.013-4.013 4.013H2v3.082h.689c3.916 0 7.095-3.179 7.095-7.095V8.12c.23 1.674 1.026 4.316 2.68 6.945l-1.995 9.435h3.197l1.455-6.883c1.077.72 2.28 1.157 3.45 1.157 3.208 0 5.808-2.6 5.808-5.808.001-3.208-2.599-5.808-5.808-5.808z" />
  </svg>
);

export const FiverrIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" fill="#1DBF73" />
    <path
      fill="#FFFFFF"
      d="M8.2 16.5h-1.6v-7h1.6v7zm-.8-8.2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4.7 8.2h-1.5V12h-1v-1.3h1V9.5c0-1.1.7-1.8 1.8-1.8h1.1v1.4h-.8c-.5 0-.6.2-.6.6v1h1.4v1.3h-1.4v4.5zm5.1 0h-1.6l-1.2-3.8-1.2 3.8h-1.6l1.9-5.3-1.8-5h1.6l1.1 3.5 1.1-3.5h1.6l-1.8 5 1.9 5.3z"
    />
  </svg>
);

export const AmazonIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M13.9 14.5c-2.3 1.7-5.6 2.6-8.5 2.6-4 0-7.6-1.5-10.4-4-.2-.2 0-.5.2-.4 3 1.7 6.7 2.8 10.5 2.8 2.5 0 5.4-.6 8-1.7.4-.2.7.2.2.7zm1.1-.9c-.3-.4-1.9-.2-2.6-.1-.2 0-.3-.2-.1-.3 1.1-.9 3-1.6 4-1.2.9.4.9 2.5.3 3.6-.1.2-.3.2-.4 0-.3-.5-.9-1.5-1.2-2zm-3.2-3.7c0-2.3.8-3.7 2.3-3.7.8 0 1.5.5 1.8 1.1V6.9h2.3v7.3c0 1.4-.4 2.5-1.2 3.2-.8.7-2 .9-3.2.9-1.3 0-2.4-.3-3.2-.9-.3-.2-.2-.5.1-.6l1.2-.7c.3-.2.5 0 .8.2.5.4 1.1.5 1.8.5.6 0 1.2-.2 1.6-.5.4-.3.6-.9.6-1.6v-.9c-.4.7-1.2 1.2-2.1 1.2-1.5 0-2.8-1.4-2.8-3.7zm2.3 0c0 1.4.6 2.2 1.5 2.2.9 0 1.5-.8 1.5-2.2 0-1.4-.6-2.2-1.5-2.2-.9 0-1.5.8-1.5 2.2z" />
  </svg>
);

/**
 * Authentic Amazon KDP (Kindle Direct Publishing) logo mark
 */
export const AmazonKdpLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Amazon KDP"
  >
    <rect width="32" height="32" rx="7" fill="#232F3E" />
    {/* Open book / Kindle pages */}
    <path
      d="M7 10.5C9.5 9 13 9.5 15.5 11.2V22C13 20.3 9.5 20 7 21.2V10.5Z"
      fill="#FF9900"
      opacity="0.95"
    />
    <path
      d="M25 10.5C22.5 9 19 9.5 16.5 11.2V22C19 20.3 22.5 20 25 21.2V10.5Z"
      fill="#FFFFFF"
    />
    <path
      d="M16 11V22"
      stroke="#232F3E"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    {/* Amazon smile curve */}
    <path
      d="M9 24.5C13.5 26.8 18.5 26.8 23 24.5"
      stroke="#FF9900"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <path
      d="M21.5 24L23.2 24.6L22.2 26"
      fill="#FF9900"
    />
  </svg>
);

/**
 * Official United Nations Volunteers (UNV) emblem logo
 */
export const UnvLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="United Nations Volunteers"
  >
    <rect width="32" height="32" rx="7" fill="#008FD5" />
    {/* Globe coordinate grid */}
    <circle cx="16" cy="15" r="7.5" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />
    <ellipse cx="16" cy="15" rx="3.5" ry="7.5" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.4" />
    <line x1="8.5" y1="15" x2="23.5" y2="15" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.4" />
    <line x1="16" y1="7.5" x2="16" y2="22.5" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.4" />
    {/* UN Laurel Olive Leaves */}
    <path
      d="M9 18.5C8 16 8 13 10 10.5C9.5 12.5 10 14.5 11 16"
      stroke="#FFFFFF"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M23 18.5C24 16 24 13 22 10.5C22.5 12.5 22 14.5 21 16"
      stroke="#FFFFFF"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    {/* UNV text / volunteer badge banner */}
    <rect x="7" y="22" width="18" height="6.5" rx="3.25" fill="#FFFFFF" />
    <text
      x="16"
      y="26.8"
      textAnchor="middle"
      fill="#008FD5"
      fontSize="5.2"
      fontWeight="900"
      fontFamily="system-ui, -apple-system, sans-serif"
      letterSpacing="0.4"
    >
      UNV
    </text>
  </svg>
);

/**
 * Harvard University official Veritas shield crest logo
 */
export const HarvardLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Harvard University"
  >
    {/* Crimson Harvard Shield */}
    <path
      d="M5 6C5 6 11 5 16 5C21 5 27 6 27 6V18C27 23.5 16 27.5 16 27.5C16 27.5 5 23.5 5 18V6Z"
      fill="#A51C30"
    />
    <path
      d="M6.2 7.2C8 6.5 12 5.9 16 5.9C20 5.9 24 6.5 25.8 7.2V17.8C25.8 22.5 16 26.2 16 26.2C16 26.2 6.2 22.5 6.2 17.8V7.2Z"
      stroke="#FFFFFF"
      strokeWidth="0.8"
      strokeOpacity="0.8"
    />
    {/* Book 1 (VE) Top Left */}
    <rect x="9.5" y="9" width="5.5" height="4.2" rx="0.5" fill="#FFFFFF" />
    <text
      x="12.2"
      y="12.3"
      textAnchor="middle"
      fill="#A51C30"
      fontSize="2.8"
      fontWeight="900"
      fontFamily="serif"
    >
      VE
    </text>
    {/* Book 2 (RI) Top Right */}
    <rect x="17" y="9" width="5.5" height="4.2" rx="0.5" fill="#FFFFFF" />
    <text
      x="19.7"
      y="12.3"
      textAnchor="middle"
      fill="#A51C30"
      fontSize="2.8"
      fontWeight="900"
      fontFamily="serif"
    >
      RI
    </text>
    {/* Book 3 (TAS) Bottom Center */}
    <rect x="13.2" y="15" width="5.6" height="4.2" rx="0.5" fill="#FFFFFF" />
    <text
      x="16"
      y="18.3"
      textAnchor="middle"
      fill="#A51C30"
      fontSize="2.4"
      fontWeight="900"
      fontFamily="serif"
    >
      TAS
    </text>
  </svg>
);
