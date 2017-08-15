import { defaultTo } from 'lodash/fp'
import { combineReducers } from 'redux'
import { historyReducer as history } from 'redux-history-sync'
import form from 'redux-field'
import locInfo from 'location-info'

export default combineReducers({
  db: defaultTo({}),
  form,
  history,
  locInfo,
})
