import React from 'react'
import PropTypes from 'prop-types'
import { map, slice } from 'lodash'

function Directions({ step, steps }) {
  return (
    <ol>
      {map(slice(steps, 0, step), (txt, key) => <li key={key}>{txt}</li>)}
    </ol>
  )
}
Directions.propTypes = {
  step: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
}
Directions.defaultProps = {
  steps: [
    'Add a few history items.',
    'Click Refresh.',
    'Click the back button a couple times.',
    'Click the forward button once.',
    'Create a new history item. New item becomes last and browser forward button goes away.',
  ],
}
export default Directions
