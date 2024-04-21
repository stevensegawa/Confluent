import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Menu.jsx'
import Options from './Options.jsx'
import Question from './Question.jsx'
import Translation from './Translation.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <Options />
    <Question />
    <Translation />
  </React.StrictMode>,
)
