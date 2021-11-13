import { useEffect, useState } from "react";

const Background = ({ children, mainRef, targetRefs = [] }) => {
  const [inBackground, setInbackGround] = useState(false);

  useEffect(() => {
    const func = () => {
      const {
        left: Mx,
        top: My,
        width: Mw,
        height: Mh
      } = mainRef.current.getBoundingClientRect();

      const Mcor = {
        x0: Mx,
        x1: Mx + Mw,
        y0: My,
        y1: My + Mh
      };

      const Tcordinates = [];

      targetRefs.forEach((ref) => {
        const {
          left: Tx,
          top: Ty,
          width: Tw,
          height: Th
        } = ref.current.getBoundingClientRect();

        Tcordinates.push({ x0: Tx, x1: Tx + Tw, y0: Ty, y1: Ty + Th });
      });

      setInbackGround(
        Tcordinates.some((Tcor) => {
          if (
            ((Tcor.x0 >= Mcor.x0 && Tcor.x0 <= Mcor.x1) ||
              (Tcor.x1 >= Mcor.x1 && Tcor.x1 <= Mcor.x0)) &&
            ((Tcor.y0 >= Mcor.y0 && Tcor.y0 <= Mcor.y1) ||
              (Tcor.y1 >= Mcor.y1 && Tcor.y1 <= Mcor.y0))
          ) {
            return true;
          } else if (
            ((Mcor.x0 >= Tcor.x0 && Mcor.x0 <= Tcor.x1) ||
              (Mcor.x1 >= Tcor.x1 && Mcor.x1 <= Tcor.x0)) &&
            ((Mcor.y0 >= Tcor.y0 && Mcor.y0 <= Tcor.y1) ||
              (Mcor.y1 >= Tcor.y1 && Mcor.y1 <= Tcor.y0))
          ) {
            return true;
          } else return false;
        })
      );
    };

    //  console.log({ targetRefs[0] });
    document.addEventListener("scroll", func, true);
    return () => {
      document.removeEventListener("scroll", func, true);
    };
  }, []);

  return { inBackground };
};

export default Background;
