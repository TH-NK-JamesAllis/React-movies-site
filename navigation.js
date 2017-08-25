import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

// Stylesheets

import styled from 'styled-components'

const NavList = styled.ul`
    margin:0;
    padding:0;
`

const NavListItem = styled.li`
    background: ${(props) =>
        props.primary ? 'lightblue' : 'white'
    };

    border:1px solid rgba(0,0,0,0.1);
    margin:0 10px 0 0;
    display:inline-block;
    list-style:none;
`

const NavListItemLink = styled(NavLink)`
    text-decoration:none;
    padding:10px;
    display:inline-block;

    &:hover{
        background:darkblue;
        color:#fff;
    }

    &.active{
        background:#333;
        color:#fff;
    }


`

export default class Navigation extends Component {
  render () {
    return (
      <div class='nav'>
        <NavList>
          <NavListItem primary data-href='/'><NavListItemLink activeClassName='active' exact to='/'>Home</NavListItemLink></NavListItem>
          <NavListItem><NavListItemLink activeClassName='active' to='/movies'>Movies</NavListItemLink></NavListItem>
          <NavListItem><NavListItemLink activeClassName='active' to='/news'>News</NavListItemLink></NavListItem>
        </NavList>
      </div>
    )
  }
}
