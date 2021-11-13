import { useEffect, useState } from "react";

const InBackground = ({ children, mainRef, targetRefs: ref }) => {
  const [inBackground, setInbackGround] = useState(false);

  const callFunc = (entries) => {
    const [entry] = entries;
    setInbackGround(entry.isIntersecting);
    console.log(entry);
  };

  useEffect(() => {
    const options = {
      root: mainRef.current,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver(callFunc, options);
    const event = ref.current;
    if (event) observer.observe(event);
  }, [mainRef, ref]);

  return children({ inBackground });
};

export default InBackground;
