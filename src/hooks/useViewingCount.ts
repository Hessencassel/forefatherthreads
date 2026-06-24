import { useState, useEffect } from 'react';

export function useViewingCount(productId: string): number {
  const base = productId.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % 24 + 13;
  const [count, setCount] = useState(base);

  useEffect(() => {
    const interval = setInterval(() => {
      const delta = Math.floor(Math.random() * 5) - 2;
      setCount((c) => Math.max(8, c + delta));
    }, 9000);
    return () => clearInterval(interval);
  }, [base]);

  return count;
}
