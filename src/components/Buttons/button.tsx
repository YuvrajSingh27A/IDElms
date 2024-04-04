import React from 'react';

interface ButtonProps {
  label: string;
  icon: JSX.Element; 
}

const Button: React.FC<ButtonProps> = ({ label, icon }) => {
  return (
    <div>
    <button className="flex items-center justify-center p-4 mb-5 border rounded-full shadow-2xl hover:shadow-md transition">
      {icon}
     
    </button>
     <span className="ml-2  font-bold text-lg ">{label}</span>
     </div>
  );
};

export default Button;