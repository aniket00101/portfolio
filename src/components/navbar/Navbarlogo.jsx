import React, { useState, useEffect } from "react";

function Navbarlogo() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {width < 360 ? (
        <h1 className="text-white text-2xl font-bold">AD</h1>
      ) : (
        <>
          <h1 className="text-white text-2xl sm:px-2 sm:hidden md:block lg:font-bold">
            Aniket Das
          </h1>
          <h1 className="text-white font-special font-extrabold text-4xl sm:text-2xl md:hidden">
            Aniket
          </h1>
        </>
      )}
    </div>
  );
}
export default Navbarlogo