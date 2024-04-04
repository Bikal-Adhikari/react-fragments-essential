import React from "react";

const Tabs = ({ children, button, ButtonsContainer = "menu" }) => {
  //   const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{button}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
