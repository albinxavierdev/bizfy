/* eslint-disable react/prop-types */


export const Button = ({ children, onClick, type = "button", className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` py-3 rounded-lg text-white w-[20%] bg-blue-600 hover:bg-blue-700  ${className}`}
    >
      {children}
    </button>
  );
};
