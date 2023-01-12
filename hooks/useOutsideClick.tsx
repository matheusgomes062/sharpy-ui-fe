import { useEffect } from 'react';

const useClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    const listener = (event: { target: any; }) => {
      const el = ref?.current;

      if (!el || el.contains(event.target)) return;
      
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default useClickOutside
