import React, { useEffect } from "react";

function Cam() {

  useEffect(() => {
    window.location.href = "https://cameronabbot.com";
  }, []);

  return (
    <div>
      <h2>Cameron Abbot dot Com</h2>
    </div>
  );
}

export default Cam;