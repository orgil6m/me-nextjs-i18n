import React from "react";
import PropTypes from "prop-types";

const ButtonWrapper = ({ children, className, onClick }) => {
  return (
    <button className={`me-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

const MeButton = ({
  type = "filled",
  children,
  onClick,
  className = "",
  color = "primary",
}) => {
  const colorVariants = {
    filled: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      dark: "bg-dark",
      white: "bg-white",
      green: "bg-green",
      red: "bg-red",
      yellow: "bg-yellow",
    },
    outlined: {
      primary: "border-primary",
      secondary: "border-secondary",
      dark: "border-dark",
      white: "border-white",
      green: "border-green",
      red: "border-red",
      yellow: "border-yellow",
    },
  };

  const colorClassName = colorVariants[type][color];
  const additionalClass = type === "outlined" ? "border" : "";

  return (
    <ButtonWrapper
      className={`${additionalClass} ${colorClassName} ${className}`}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};

ButtonWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

MeButton.propTypes = {
  type: PropTypes.oneOf(["filled", "outlined"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default MeButton;
