import { get } from 'lodash/fp'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Menu from 'cape-mixer/lib/Menu'

export const getState = createStructuredSelector({
  links: get('db.menu'),
})

export const actions = {
  sample: () => ({ type: 'sample', payload: 'Do something!' }),
}
export const menuActions = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(getState, menuActions)(Menu)
