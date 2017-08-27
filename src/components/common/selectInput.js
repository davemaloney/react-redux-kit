import React, { PropTypes } from 'react';
// import PropTypes from 'prop-types';

const SelectInput = ({name, label, onChange, defaultOption, options, value, error}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}
      </label>
      <div className="field">
        <select
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value="" disabled>{defaultOption ? defaultOption : `Select ${label}`}</option>
          {options.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  error: PropTypes.string
};

export default SelectInput;
