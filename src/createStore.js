import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { getInitState as getH, historyMiddleware, syncHistoryWithStore } from 'redux-history-sync'
import { getInitState as getLC } from 'location-info'
import reducer from './reducer'
/* global window */

// Create a menu and provide enough details for creating routes at the same time.
export const menu = {
  foo: {
    id: 'foo',
    routeId: 'foo',
    name: 'Foo',
    position: 2,
  },
  doSomethin: {
    action: 'sample',
    id: 'doSomethin',
    name: 'Dispatch Sample Action',
    route: false,
    position: 1,
  },
  me: {
    id: 'me',
    routeId: 'user',
    routePath: '/user/:userId',
    userId: 1,
    name: 'Profile',
    position: 3,
  },
  table: {
    id: 'table',
    name: 'Table',
  },
}

export default function initStore() {
  const initState = {
    db: { menu },
    history: getH(window.location, window.document.title, window.history),
    locInfo: getLC(menu),
  }
  const store = createStore(
    reducer,
    initState,
    composeWithDevTools( // Can use typical redux compose function instead.
      applyMiddleware(
        historyMiddleware(window.history),
        thunk,
      ),
    )
  )
  syncHistoryWithStore(store, window)
  return store
}
