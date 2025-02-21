import React from 'react';

const CircularGradient = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-96 h-96">
          {/* Increased blur-3xl to blur-[100px] for more noticeable effect */}
          {/* Added motion-safe to ensure animation only runs when user hasn't set reduce motion */}
          <div 
            className="
              w-full 
              h-full 
              rounded-full 
              bg-gradient-to-br 
              from-red-500/30 
              via-blue-500/30 
              to-yellow-500/30 
              blur-[100px]
              motion-safe:animate-[spin_8s_linear_infinite]
            "
          />
        </div>
      </div>
    </div>
  );
};

export default CircularGradient;