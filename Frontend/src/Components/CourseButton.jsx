
export const CourseButton = ({label, onClick}) => {
  return (
    <button
    onClick={onClick}
    type="button"
    className="text-white border-white bg-slate-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2"
  >
    {label}
  </button>
  )
}

export default CourseButton