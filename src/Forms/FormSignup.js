import React from "react";
import { useForm } from "./useForm";
import "./Form.css";
import validate from "./validateInfo"


const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Get Started With Us Today!Create Your Account by filling out the
          spaces below
        </h1>
        <div className="form-inputs">
          <label htmlFor=" username  " className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your name "
            className="form-input"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        {/*email */}
        <div className="form-inputs">
          <label htmlFor=" email  " className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email "
            className="form-input"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        {/*password */}
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password "
            className="form-input"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        {/*password 2 */}
        <div className="form-inputs">
          <label htmlFor=" password2  " className="form-label">
            Confirm password:
          </label>
          <input
            type="password"
            id="password2"
            name="password2"
            placeholder="Confirm your password "
            className="form-input"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        {/*Text Area */}

        <div className="form-inputs">
          <label htmlFor="description" className="form-label" >
            Textarea
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Enter some few details about yourself"
            className="form-input"
            value={values.description}
            onChange={handleChange}
            rows={30}
            cols={40}
          ></textarea>
          {errors.description && <p>{errors.description}</p>}
        </div>

        {/*select dropdown */}

        <div className="form-inputs">
          <label htmlFor="select" className="form-label" >
            Select Country
          </label>
          <select
            name="select"
            id="select"
            placeholder="Enter your profession"
            className="form-input"
            value={values.select}
            onChange={handleChange}
            >
    <option> Choose your country</option>
    <option value="Uganda">Uganda</option>
    <option value="Kenya">Kenya</option>
    <option value="Nigeria">Nigeria</option>




          </select>
            {errors.select && <p>{errors.select}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Sign Up
        </button>
        <span className="form-input-login">
          Already have an Account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export { FormSignup};
