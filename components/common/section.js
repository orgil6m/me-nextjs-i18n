import React from "react";
import Title from "./title";

const Section = ({ title = "", children, className, id }) => {
  return (
    <section className={className} id={id}>
      {title && <Title>{title}</Title>}
      {children}
    </section>
  );
};

export default Section;
