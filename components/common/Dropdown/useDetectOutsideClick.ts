import { useEffect, useState } from "react";

export const useDetectOutsideClick: Function = (
  elem: any,
  initialState: boolean
) => {
  const [isActive, setIsActive] = useState<boolean>(initialState);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (elem.current !== null && !elem.current.contains(event.target))
        setIsActive(!isActive);
    };

    if (isActive) window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive, elem]);

  return [isActive, setIsActive];
};
