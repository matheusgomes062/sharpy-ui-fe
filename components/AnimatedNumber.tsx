import { useEffect, useState, FunctionComponent } from "react";

interface AnimatedNumberProps {
  value: number;
  step?: number;
}

const AnimatedNumber: FunctionComponent<AnimatedNumberProps> = ({ value, step = 1 }) => {
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    if (isNaN(value)) {
      console.error(`AnimatedNumber received an invalid value: ${value}`);
      return;
    }

    const interval = setInterval(() => {
      setDisplayedValue((prevValue) => {
        if (prevValue === value) {
          clearInterval(interval);
          return value;
        }

        const diff = value - prevValue;
        const increment = Math.ceil(Math.abs(diff) / 10) * step;
        const randomIncrement = step * Math.floor(Math.random() * 3);
        const newValue = diff > 0
          ? Math.min(prevValue + increment + randomIncrement, value)
          : Math.max(prevValue - increment - randomIncrement, value);

        return newValue;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [value, step]);

  return <span data-cy="animatedNumber">{displayedValue}</span>;
};

export default AnimatedNumber;