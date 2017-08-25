import React, { Component } from 'react'
import Navigation from './navigation'
import Main from './main'

import styled from 'styled-components'
import { injectGlobal } from 'styled-components'

injectGlobal`

    body{
        font-family:arial;
    }
`

const MainWrapper = styled.div`
    width:100%;
    max-width:1280px;
    margin:0 auto;
`

export default class App extends Component {
  render () {
    return (
      <MainWrapper>
        <Navigation />
        <Main />
      </MainWrapper>
    )
  }
}
