// src/components/background/MovingBackground.tsx
'use client';

import React, { useEffect, useRef } from 'react';

// src/components/background/CircularGradient.tsx
const CircularGradient = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
      <div className="w-full h-full rounded-full bg-gradient-to-br from-red-500/30 via-blue-500/30 to-yellow-500/30 blur-3xl animate-spin-slow" />
    </div>
  );
};

export default CircularGradient;