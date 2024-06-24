import { useEffect, useState } from "react";

const UseCheckStatus = () => {
  const [status, SetStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("Online", () => {
      SetStatus(true);
    });
    window.addEventListener("offline", () => {
      SetStatus(false);
    });
  }, []);
  return status;
};
export default UseCheckStatus;
