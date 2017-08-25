import { renderRoot } from 'cape-router-component'

import registerServiceWorker from './registerServiceWorker'
import createStore from './createStore'
import * as RouteIndex from './RouteIndex'
import './index.css'

/* global window */

const store = createStore()
const rootDestEl = window.document.getElementById('root')

renderRoot({ rootDestEl, RouteIndex, store })

registerServiceWorker()
