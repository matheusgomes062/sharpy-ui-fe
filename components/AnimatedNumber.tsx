import { useEffect, useState, FunctionComponent } from "react";

const AnimatedNumber: FunctionComponent<{ value: number }> = ({ value }) => {
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedValue((prevValue) => {
        if (prevValue === value) {
          clearInterval(interval);
          return value;
        }
        const diff = value - prevValue;
        const increment = Math.ceil(Math.abs(diff) / 10);
        let newValue;
        if (diff > 0) {
          newValue = prevValue + increment + Math.floor(Math.random() * 10);
          newValue = Math.min(newValue, value);
        } else {
          newValue = prevValue - increment - Math.floor(Math.random() * 10);
          newValue = Math.max(newValue, value);
        }
        return newValue;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [value]);

  return <span data-cy="animatedNumber">{displayedValue}</span>;
};

export default AnimatedNumber;
