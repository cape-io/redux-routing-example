import { map, size } from 'lodash'
import { eq, flow, orderBy } from 'lodash/fp'
import { setField, setWith } from 'cape-lodash'
import { connect } from 'react-redux'
import { selectHistoryState } from 'redux-history-sync'
import HistoryList from './HistoryListEl'

const addIsActive = ({ activeKey, key }) =>
  map(key, setWith('isActive', 'id', eq(activeKey)))

// Figure out what steps to display.
function getStep({ activeKey, firstKey, lastKey, key, refresh }) {
  const lastIndex = key[lastKey].index
  if (!refresh && lastIndex < 3) return 1
  if (refresh && lastIndex > 2) {
    if (size(key) < lastIndex || activeKey === lastKey) return 3
    if (activeKey !== lastKey && activeKey !== firstKey) return 5
    return 4
  }
  if (activeKey === lastKey) return 2
  return 1
}

const mapStateToProps = flow(
  selectHistoryState,
  setField('items', flow(addIsActive, orderBy('index', 'asc'))),
  setField('step', getStep),
)

export default connect(mapStateToProps)(HistoryList)
