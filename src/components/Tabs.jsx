import React from "react";

const Tabs = ({ children, button, ButtonsContainer }) => {
//   const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{button}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
