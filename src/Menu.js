import { get } from 'lodash/fp'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Menu from 'cape-mixer/lib/Menu'

export const getState = createStructuredSelector({
  links: get('db.menu'),
})

export default connect(getState)(Menu)
