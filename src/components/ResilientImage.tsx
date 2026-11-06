import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#141414] via-[#1C1214] to-[#0A0A0A] border border-[#D4AF37]/15 text-[#C5A880]/70 p-6 text-center ${className}`}
      >
        <Utensils className="w-7 h-7 mb-2 text-[#D4AF37]/60" strokeWidth={1.25} />
        <span className="font-serif text-sm tracking-wide text-[#F5F2EB]/70">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
