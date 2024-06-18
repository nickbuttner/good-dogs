import React from "react";
import classnames from "classnames";
import styles from "./button.module.css";

function Button({
  children,
  className,
  bg = "black",
  hoverStyle = "scale",
  ...rest
}) {
  return (
    <button
      className={classnames(
        className,
        styles.button,
        styles[`hover${hoverStyle}`]
      )}
      style={{ backgroundColor: bg }}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
