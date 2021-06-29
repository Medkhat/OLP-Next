import React from "react";
import { useAccordionContext } from "../Hooks";

const useAccordionClick = (eventKey, onClick) => {
  const { onToggle, activeEventKey } = useAccordionContext();
  return (event) => {
    onToggle(activeEventKey === eventKey ? null : eventKey);
    if (onClick) {
      onClick(event);
    }
  };
};

const Toggle = ({
  element: Component,
  eventKey,
  onClick,
  children,
  ...otherProps
}) => {
  const accordionClick = useAccordionClick(eventKey, onClick);

  return (
    <Component onClick={accordionClick} {...otherProps}>
      {children}
    </Component>
  );
};

Toggle.defaultProps = {
  element: "div",
};

export default Toggle;
