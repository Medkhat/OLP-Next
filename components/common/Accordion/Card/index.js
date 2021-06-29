import { AccordionCard } from "../style";

const CardBody = ({ children, ...props }) => {
  return (
    <div className={"body"} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, ...props }) => {
  return (
    <div className={"header"} {...props}>
      {children}
    </div>
  );
};

const Card = ({ children }) => {
  return <AccordionCard>{children}</AccordionCard>;
};

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
