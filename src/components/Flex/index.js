import React from "react";
import PropTypes from "prop-types";
import styles from "./Flex.module.scss";

const Flex = (props) => {
  const { children, fd, jc, ai, fw, style, ...restProps } = props;
  const inlineStyle = {
    ...style,
    display: "flex",
    flexDirection: fd,
    justifyContent: jc,
    alignItems: ai,
    flexWrap: fw,
  };
  return (
    <div className={styles.flex} style={inlineStyle} {...restProps}>
      {children}
    </div>
  );
};

Flex.defaultProps = {
  fd: "row",
  jc: "center",
  ai: "center",
  fw: "nowrap",
};

Flex.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  fd: PropTypes.string,
  jc: PropTypes.string,
  ai: PropTypes.string,
  fw: PropTypes.string,
};

export default Flex;
