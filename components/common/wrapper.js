import PropTypes from "prop-types";

const ConditionalWrapper = ({ condition, wrapper, wrapper2, children }) => {
  if (condition) {
    return wrapper(children);
  }
  if (wrapper2) {
    return wrapper2(children);
  }
  return children;
};

ConditionalWrapper.propTypes = {
  condition: PropTypes.bool.isRequired,
  wrapper: PropTypes.func.isRequired,
  wrapper2: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default ConditionalWrapper;
