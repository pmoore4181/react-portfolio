import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Footer.css';

class Footer extends Component {

  render() {
    return (

      <footer>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <ul className="list-inline">
                          <li>
                              <a className='footer-link' href="#about">About</a>
                          </li>
                          <li className="footer-menu-divider">&sdot;</li>
                          <li>
                              <a className='footer-link' href="#services">Projects</a>
                          </li>
                          <li className="footer-menu-divider">&sdot;</li>
                          <li>
                              <a className='footer-link' href="#contact">Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
    );
  }
}


export default Footer;
