import React from 'react'
// import PropTypes from 'prop-types'
import './App.css'
import HistoryInput from './HistoryInput'
import HistoryList from './HistoryList'
import Menu from './Menu'

function AppPage() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Redux History Sync</h2>
        <HistoryInput />
      </div>
      <Menu />
      <HistoryList />
      <a href="https://github.com/cape-io/redux-history-example">github code</a>
    </div>
  )
}
AppPage.propTypes = {
}
export default AppPage
