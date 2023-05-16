import React from "react";


function FormInput(props) {
  return (
    <>
      <label className="basis-full font-raleway font-bold text-lg text-slate-600">
        {props.label}
      </label>
      <div className="relative -translate-y-1  translate-x-10 flex">
       
      </div>
      <input
        name={props.inputName}
        className="basis-full border-2 rounded-full bg-gray-100 text-center p-2 m-2 text-xl formInputs
                hover:shadow-lg hover:bg-white
               focus:shadow-lg focus:bg-white"
        onChange={props.onChange}
        value={props.value}
        style={{ color: " rgb(51 61 85)", outline: "none" }}
        type={props.type}
        placeholder={props.placeholder}
      />
    </>
  );
}

export default FormInput;
