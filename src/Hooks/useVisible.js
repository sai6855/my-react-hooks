import { useEffect, useState } from "react";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
};

const useVisible = (ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const callFunc = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
    if (entry.isIntersecting) {
      setIsFirstRender(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callFunc, options);
    const event = ref.current;
    if (event) observer.observe(event);

    return () => {
      if (event) observer.unobserve(event);
    };
  }, [ref]);

  return { isVisible: isVisible, isFirstRender: isFirstRender };
};

export default useVisible;
