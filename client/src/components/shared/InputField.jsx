import React from "react";

const InputField = React.forwardRef(
  (
    {
      label,
      placeholder,
      type = "text",
      error,
      gutterBottom = 20,
      register,
      ...props
    },
    ref
  ) => {
    return (
      <React.Fragment>
        <div style={{ marginBottom: `${gutterBottom}px` }}>
          <label
            htmlFor={label}
            className="block mb-2 text-sm font-medium text-black"
          >
            {label}
          </label>
          <input
            {...props}
            autoComplete="off"
            type={type}
            id={label}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={placeholder}
            {...register}
          />
          {error && (
            <p className="text-red-600 text-sm mt-1">{error.message}</p>
          )}
        </div>
      </React.Fragment>
    );
  }
);

export default InputField;
