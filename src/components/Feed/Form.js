import React from "react";

const Form = ({ onInputChange, onSubmit, value }) => {
  return (
    <div className="col-12 col-lg-6 offset-lg-3">
      <input className="form-control my-3" placeholder="Article Title" />
      <textarea
        className="form-control my-3"
        placeholder="Article Description"
        onChange={onInputChange}
        value={value}
      />
      <input className="form-control my-3" placeholder="Article Author" />
      <button onClick={onSubmit} className="btn btn-primary float-right">
        Submit
      </button>
    </div>
  );
};

export default Form;
