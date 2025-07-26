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
        <div>
          <h1 className="text-white text-2xl sm:px-2 sm:hidden md:block lg:font-bold md:text-[30px]">
            Aniket Das
          </h1>
          <h1 className="text-white font-special font-extrabold text-2xl sm:text-[30px] sm:flex md:hidden ">
            Aniket
          </h1>
        </div>
      )}
    </div>
  );
}
export default Navbarlogo