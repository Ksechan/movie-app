import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import About from './routes/About.js'
import Home from './routes/Home.js'
import Detail from './routes/Detail.js'
import Navigation from './components/Navigation'

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  )
}

export default App