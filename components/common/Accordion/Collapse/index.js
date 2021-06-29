import { useAccordionContext } from "../Hooks";

const Collapse = ({
  element: Component,
  eventKey,
  children,
  ...otherProps
}) => {
  const { activeEventKey } = useAccordionContext();

  return activeEventKey === eventKey ? (
    <Component {...otherProps}>{children}</Component>
  ) : null;
};

Collapse.defaultProps = {
  element: "div",
};

export default Collapse;
