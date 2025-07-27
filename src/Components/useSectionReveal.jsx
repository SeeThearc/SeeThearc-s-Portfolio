import { useRef, useState, useEffect } from 'react';
function useSectionReveal() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleReveal = (entries) => {
      if (entries[0].isIntersecting) setVisible(true);
    };
    const obs = new window.IntersectionObserver(handleReveal, { threshold: 0.25 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}
export default useSectionReveal;