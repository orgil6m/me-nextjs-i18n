import PropTypes from "prop-types";

const Title = ({ children, className }) => {
  return (
    <div className={`flex-center p-8 ${className}`}>
      <h1 className="shrink title text-center">{children}</h1>
    </div>
  );
};

export default Title;

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
