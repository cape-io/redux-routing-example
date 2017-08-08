import { connect } from 'react-redux'
import { createHistory } from 'redux-history-sync'
import { connectInput } from 'redux-field-connect'
import App from './InputEl'

function mapStateToProps() {
  return {
    id: 'new-history',
    label: 'New Location:',
    type: 'text',
  }
}
function handleChange(dispatch, props) {
  return (event) => {
    if (event.preventDefault) event.preventDefault()
    props.onChange('')
    dispatch(createHistory(props.value))
  }
}
const getActions = (dispatch, props) => ({
  onSubmit: handleChange(dispatch, props),
})

export default connectInput(connect(mapStateToProps, getActions)(App))
