import { combineReducers } from 'redux'
import { historyReducer as history } from 'redux-history-sync'
import form from 'redux-field'

export default combineReducers({
  form,
  history,
})
