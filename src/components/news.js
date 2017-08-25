import React, { Component } from 'react'

import Heading from './core/heading'

import { ThemeProvider } from 'styled-components'
import colors from './colors'

export default class News extends Component {
  render () {
    return (
      <ThemeProvider theme={colors}>
        <div>
          <Heading title='News page' />
        </div>
      </ThemeProvider>
    )
  }
}
