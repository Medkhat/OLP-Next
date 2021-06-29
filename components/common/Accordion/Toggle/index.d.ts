declare const Toggle: {
  ({
    element: Component,
    eventKey,
    onClick,
    children,
    ...otherProps
  }: {
    [x: string]: any;
    element: any;
    eventKey: any;
    onClick: any;
    children: any;
  }): JSX.Element;
  defaultProps: {
    element: string;
  };
};
export default Toggle;
