import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function LoadingToRedirect() {
  const [counter, setCounter] = useState(3);
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => --prevCounter);
    }, 1000);

    counter === 0 && history.push("/");

    return () => clearInterval(interval);
  }, [counter, history]);

  return (
    <div className="grid place-items-center mt-5">
      <p>Redirecting you in {counter}...</p>
    </div>
  );
}
