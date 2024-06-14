
export const Button = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        type="button"
        className=" text-black bg-white hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2"
      >
        {label}
      </button>
    );
  };
  
  export default Button;