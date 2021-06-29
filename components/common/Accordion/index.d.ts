declare const Accordion: {
  ({
    element: Component,
    activeEventKey,
    onToggle,
    children,
    ...otherProps
  }: {
    [x: string]: any;
    element: any;
    activeEventKey: any;
    onToggle: any;
    children: any;
  }): JSX.Element;
  defaultProps: {
    element: string;
    onToggle: () => void;
  };
  Toggle: any;
  Collapse: any;
};
export default Accordion;
