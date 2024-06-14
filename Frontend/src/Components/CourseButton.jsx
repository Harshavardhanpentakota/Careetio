import PropTypes from 'prop-types';
export const CourseButton = ({label, onClick}) => {
  return (
    <button
    onClick={onClick}
    type="button"
    className="text-black border-white bg-white hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2"
  >
    {label}
  </button>
  )
}

CourseButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired
};


export default CourseButton