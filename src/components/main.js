import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Movies from './movies'
import Movie from './movie'
import News from './news'

import styled from 'styled-components'

const MainWrapper = styled.main`
`

export default class Main extends React.Component {
  render () {
    return (
      <MainWrapper>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/movies' component={Movies} />
          <Route path='/movies/:movieName' component={Movie} />
          <Route exact path='/news' component={News} />
        </Switch>
      </MainWrapper>
    )
  }
}
