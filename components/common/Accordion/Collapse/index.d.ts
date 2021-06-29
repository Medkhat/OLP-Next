declare const Collapse: {
  ({
    element: Component,
    eventKey,
    children,
    ...otherProps
  }: {
    [x: string]: any;
    element: any;
    eventKey: any;
    children: any;
  }): JSX.Element | null;
  defaultProps: {
    element: string;
  };
};
export default Collapse;
