'use client'
import { useState, useEffect } from 'react';

const ResponsiveComponentWithHook = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 460);
    };

    // Check screen size on mount
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isSmallScreen ? (
        // Componente que se muestra en pantallas pequeñas
        <div>
          <h1>Componente para pantallas pequeñas </h1>
        </div>
      ) : (
        // Componente que se muestra en pantallas grandes
        <div>
          <h1>Componente para pantallas grandes </h1>
        </div>
      )}
    </div>
  );
};

export default ResponsiveComponentWithHook;