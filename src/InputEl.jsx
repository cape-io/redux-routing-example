import React from 'react'
import PropTypes from 'prop-types'

// Simple example of input element.
function InputEl({ id, label, onSubmit, value, ...props }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor={id}>
        {label}
        <input id={id} value={value || ''} {...props} />
      </label>
      <input type="submit" value="Go!" />
    </form>
  )
}

InputEl.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
}
InputEl.defaultProps = {
  value: '',
}
export default InputEl
