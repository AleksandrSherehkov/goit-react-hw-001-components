import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section>
      <div>{title && <h2>{title}</h2>}</div>
      {children}
    </section>
  );
};

export default Section;
