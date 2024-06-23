import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
  style?: React.CSSProperties;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  placeholder,
  className = "",
  style,
}) => (
  <div className={`bg-black ${className}`} style={style}>
    <label htmlFor={id} className="mb-2 text-amber-400">
      {label}
    </label>
    {id === "peopleInvitedID" ? (
      <textarea
        id={id}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        style={{
          height: "24rem",
          color: "black",
          textAlign: "left",
        }}
      />
    ) : (
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="h-10 w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-center"
        style={{
          color: "black",
        }}
      />
    )}
  </div>
);

export default InputField;
