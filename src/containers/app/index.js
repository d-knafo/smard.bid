import React from 'react'
import ReactRouter from './../../router/router'

const resetApp = () => {
  localStorage.clear()
  window.location.reload()
}
const App = () => (
  <div>
    <main role='main' className='container'>
        <ReactRouter />
    </main>
  </div>
)

export default App
