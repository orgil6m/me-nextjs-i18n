import PropTypes from "prop-types";

const ListViewer = ({ data, child }) => {
  return data.map((row, index) => child(row, index));
};

ListViewer.propTypes = {
  data: PropTypes.array.isRequired,
  child: PropTypes.func.isRequired,
};

export default ListViewer;
