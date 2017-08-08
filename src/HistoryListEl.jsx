import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import Directions from './Directions'

function getStyle(isActive) {
  return isActive ? { backgroundColor: 'yellow' } : null
}

function Item({ id, index, isActive, location: { pathname } }) {
  return (
    <tr key={id} style={getStyle(isActive)}>
      <td>{index}</td>
      <td>{id}</td>
      <td>{pathname}</td>
    </tr>
  )
}
Item.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
}

function HistoryList({ items, refresh, step }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Id</th>
            <th>Path</th>
          </tr>
        </thead>
        <tbody>
          { map(items, Item) }
        </tbody>
      </table>
      {refresh && <h3>User did a refresh!</h3>}
      <Directions step={step} />
    </div>
  )
}
HistoryList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  refresh: PropTypes.bool.isRequired,
  step: PropTypes.number.isRequired,
}
HistoryList.defaultProps = {
}
export default HistoryList
