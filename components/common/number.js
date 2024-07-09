import PropTypes from "prop-types";

const NumberFormat = ({ className, number, suffix }) => {
  return (
    <span className={className}>
      {parseInt(number).toLocaleString("en-US")}
      {suffix}
    </span>
  );
};

export default NumberFormat;

NumberFormat.propTypes = {
  className: PropTypes.string,
  number: PropTypes.number.isRequired,
  suffix: PropTypes.string,
};
