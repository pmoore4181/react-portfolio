import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css';

class Header extends Component {

  render() {
    return (

      <nav class="navbar navbar-default navbar-fixed-top topnav" role="navigation">
          <div class="container topnav">
              <div class="navbar-header">
                  <a class="navbar-brand topnav" href="#">Patrick Moore</a>
              </div>
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav navbar-right">
                      <li>
                          <a href="#about">About</a>
                      </li>
                      <li>
                          <a href="#services">Projects</a>
                      </li>
                      <li>
                          <a href="#contact">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}


export default Header;
